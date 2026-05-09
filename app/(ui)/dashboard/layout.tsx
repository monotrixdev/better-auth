// app/dashboard/layout.t
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Sidebar from "../_components/nav";
import React from "react";
import DashboardShell from "@/app/_components/dashboard-shell";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect('/login');
    }

    if (!session.user.isOnboarded) {
        redirect('/onboarding');
    }

    return <DashboardShell>{children}</DashboardShell>
}