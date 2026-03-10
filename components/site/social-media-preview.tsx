import Link from "next/link";
import { Instagram, Youtube, ExternalLink } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/site/section";

export function SocialMediaPreview() {
  return (
    <Section className="bg-muted/20">
      <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
        <Card className="rounded-2xl">
          <CardHeader className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-primary" aria-hidden />
                <CardTitle className="text-base">Instagram highlights</CardTitle>
              </div>
              <Button asChild variant="outline" size="sm">
                <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">
                  Follow <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Quick glimpses of activities, celebrations, and classroom moments.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <a
                  key={i}
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group aspect-square rounded-xl border bg-background transition hover:-translate-y-0.5 hover:shadow-sm focus-visible:focus-ring"
                  aria-label="View Instagram post preview"
                >
                  <div className="grid h-full place-items-center text-xs text-muted-foreground">
                    Post {i + 1}
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Replace this preview with a real feed integration later (e.g.,
              curated posts).
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Youtube className="h-5 w-5 text-primary" aria-hidden />
                <CardTitle className="text-base">YouTube</CardTitle>
              </div>
              <Button asChild variant="outline" size="sm">
                <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer">
                  Visit channel <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Short videos show how therapy, education, and inclusion look in real
              life.
            </p>
          </CardHeader>
          <CardContent>
            <div className="aspect-video overflow-hidden rounded-xl border bg-background">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed?listType=user_uploads&list=UmangDivyangSchool"
                title="Umang Divyang School YouTube videos"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              If the embed doesn’t load in some regions/browsers, visitors can
              still open the channel directly.
            </p>
            <div className="mt-4">
              <Button asChild>
                <Link href="/gallery">See photos & impact</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

