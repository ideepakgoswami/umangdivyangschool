import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";

export function VolunteerSection() {
  return (
    <Section className="py-24 sm:py-32 bg-slate-900 text-white overflow-hidden">
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
            <div className="space-y-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-brand-orange backdrop-blur-md w-fit">
                <HeartHandshake className="h-4 w-4" />
                Join Our Community
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  Become a Volunteer
                </h2>
                <div className="h-1.5 w-24 rounded-full bg-brand-orange" />
              </div>

              <div className="space-y-6">
                <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                  Join our dedicated team of volunteers and make a lasting
                  impact on the lives of special children. Your time, skills,
                  and compassion can help build a more inclusive world.
                </p>
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-10 h-16 text-lg font-bold shadow-xl bg-brand-orange hover:bg-brand-orange/90 text-white hover:scale-105 transition-all"
                >
                  <Link href="/volunteer">
                    Join Our Mission{" "}
                    <ArrowRight className="ml-2 h-6 w-6" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] lg:aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-800 shadow-2xl ring-1 ring-white/10">
              <Image
                src="https://images.unsplash.com/photo-1593113563332-6142713f01c7?auto=format&fit=crop&q=80&w=1200"
                alt="Volunteers helping children"
                fill
                className="object-cover opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
