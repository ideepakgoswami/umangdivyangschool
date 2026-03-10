import Link from "next/link";
import Image from "next/image";
import { Menu, Heart } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Brand() {
  return (
    <Link
      href="/"
      aria-label={siteConfig.name}
      className="inline-flex items-center focus-visible:focus-ring rounded-md"
    >
      <span className="relative h-16 w-16 overflow-hidden rounded-3xl border bg-background shadow-sm">
        <Image
          src="/logo.png"
          alt="Umang Divyang School logo"
          fill
          sizes="64px"
          className="object-cover"
          priority
        />
      </span>
    </Link>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm transition-all duration-300">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:shadow focus-ring"
      >
        Skip to content
      </a>

      <div className="flex h-20 items-center justify-between container px-4 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-4">
          <Brand />
        </div>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-accent hover:text-brand-orange focus-visible:focus-ring"
            >
              {l.label}
            </Link>
          ))}
          <Button
            asChild
            className="ml-4 bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 shadow-md font-bold text-base transition-transform hover:scale-105"
          >
            <Link href="/donate">
              <Heart className="mr-2 h-5 w-5 fill-current" aria-hidden />
              Donate
            </Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[380px]">
              <div className="flex items-center justify-between">
                <Brand />
              </div>
              <div className="mt-8 grid gap-4">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-md px-4 py-3 text-base font-medium hover:bg-accent focus-visible:focus-ring"
                  >
                    {l.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-6 shadow-md font-bold text-lg flex items-center justify-center"
                >
                  <Link href="/donate">
                    <Heart className="mr-2 h-5 w-5 fill-current" aria-hidden />
                    Donate
                  </Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-muted-foreground text-center">
                Warm, hopeful support for divyang learners and their families.
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
