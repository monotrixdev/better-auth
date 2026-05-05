import { v2 as cloudinary } from 'cloudinary'
import { NextRequest, NextResponse } from 'next/server'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(req: NextRequest) {
    try {

            console.log("ENV CHECK:", {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        secret: process.env.CLOUDINARY_API_SECRET?.slice(0, 5) // only shows first 5 chars
    })


        const fromData = await req.formData();
        const file = fromData.get('file') as File;
        if (!file) {
            return NextResponse.json({ error: 'No file provided'}, { status: 400})
        }

        if (file.size > 5 * 1024 * 1024) {
            return NextResponse.json({ error: "File too large (max 5MB"}, {status: 400})
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const base64 = `data:${file.type};base64,${buffer.toString('base64')}`;

        const result = await cloudinary.uploader.upload(base64, {
            folder: "avatars",
            transformation: [
                { width: 400, height: 400, crop: "fill", gravity: 'face'},
                { quality: "auto", fetch_format: 'auto'}
            ]
        });
        return NextResponse.json({ url: result.secure_url});

    } catch (err) {
          console.error("Upload error:", err);
           return NextResponse.json({ error: (err as Error).message }, { status: 500 });

    }
}