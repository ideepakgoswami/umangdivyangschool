import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { FloatingDonateButton } from "@/components/site/floating-donate-button";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { Preloader } from "@/components/site/preloader";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

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
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
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
        <Preloader />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />

        <FloatingDonateButton />
      </body>
    </html>
  );
}
