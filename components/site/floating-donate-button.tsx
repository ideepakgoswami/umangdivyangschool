"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

/** Hidden on `/` so the hero is not competing with a second donate CTA. */
export function FloatingDonateButton() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
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
  );
}
