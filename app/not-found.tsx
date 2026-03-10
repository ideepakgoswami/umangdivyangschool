import Link from "next/link";

import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section>
      <div className="max-w-2xl space-y-4">
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="text-muted-foreground">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/">Go to home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

