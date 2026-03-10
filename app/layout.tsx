import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "min-h-dvh font-sans antialiased",
        )}
      >
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />

        {/* Floating Donate Button */}
        <div
          className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10 animate-bounce"
          style={{ animationDuration: "3s" }}
        >
          <Button
            asChild
            className="rounded-full shadow-2xl bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 h-auto text-lg font-bold flex items-center gap-2 hover:scale-105 transition-transform border-4 border-white"
          >
            <Link href="/donate">❤️ Donate Now</Link>
          </Button>
        </div>
      </body>
    </html>
  );
}
