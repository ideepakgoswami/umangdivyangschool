import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";
import { siteImages } from "@/lib/gallery-images";

export function AboutPreview() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold text-primary">About Umang</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            A school built on patience, evidence, and hope.
          </h2>
          <p className="mt-4 max-w-prose text-muted-foreground">
            Every child deserves a learning environment that adapts to them—not
            the other way around. We partner with parents, therapists, and
            educators to create individualized support plans, celebrate small
            wins, and nurture independence.
          </p>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link href="/about">
                Read our story <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
            <Image
              src={siteImages.aboutPreview}
              alt="A teacher supporting a child with a learning activity"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

