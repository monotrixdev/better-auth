import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Inter } from "next/font/google";
import "./globals.css";
import HeaderPage from "./_components/header";
import FotterPage from "./_components/fotter";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Better Auth",
  description: "Testing Better Auth deployment on Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", dmSans.variable, dmMono.variable, "font-sans", inter.variable)}>
      <body className="flex flex-col">
        <Toaster position="top-center"/>
          {
            children
          }
      </body>
    </html>
  );
}
