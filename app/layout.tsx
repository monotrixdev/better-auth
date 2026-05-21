import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

// Main Font
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Code Font
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://better-auth-lac.vercel.app/"),

  title: {
    default: "Crock SMS Management",
    template: "%s | Crock SMS",
  },

  description:
    "Professional SMS management platform for messaging, spam detection, contact verification, and communication tools.",

  keywords: [
    "SMS",
    "SMS Management",
    "Bulk SMS",
    "Spam Detection",
    "Truecaller",
    "Messaging Platform",
    "SMS Service",
    "Phone Verification",
  ],

  authors: [
    {
      name: "Crock Team",
    },
  ],

  creator: "Crock Team",

  openGraph: {
    title: "Crock SMS Management",
    description:
      "Professional SMS management and spam detection platform.",
    url: "https://better-auth-lac.vercel.app/",
    siteName: "Crock SMS",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Crock SMS Management",
    description:
      "Professional SMS management and spam detection platform.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full scroll-smooth",
        outfit.variable,
        mono.variable
      )}
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <Toaster position="bottom-center" richColors />

        {children}
      </body>
    </html>
  );
}