import { NEVER } from "better-auth";
import { useAuthQuery } from "better-auth/client";
import { LockKeyhole } from "lucide-react";
import { NextRequest, NextResponse } from "next/server";
import { isKeyObject } from "util/types";

export async function POST(request: NextRequest) {
    const {email, password } = await request.json();
    return NextResponse.json({ status: false, message: "You are unauthorize"})

}