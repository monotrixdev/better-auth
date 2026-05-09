import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { Look } from "@/lib/lookup";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();   

  const session = await auth.api.getSession({
    headers: req.headers,
  });
  if (!session?.session) {
    return NextResponse.json({ error: 'Unauthorize'}, { status: 404});
  }

  const totalLookup = await Look.countDocuments({ userId: session?.user?.id});
  const today = await Look.countDocuments({
    userId: session?.user?.id,
    timeStamp: {
        $gte: new Date(new Date().setHours(0, 0, 0, 0)),
    },
  });
  return NextResponse.json({
    lookups: totalLookup,
    todayLookups: today,
  })
}