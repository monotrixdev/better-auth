import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const sessionCookie = 
        request.cookies.get("better-auth.session_token") ?? 
        request.cookies.get("__Secure-better-auth.session_token"); // for HTTPS

    if (!sessionCookie) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Can't check isOnboarded here — handle it in the dashboard/layout instead
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*']
}