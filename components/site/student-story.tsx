import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";

export function StudentStory() {
  return (
    <Section className="py-24 sm:py-36 bg-slate-50 overflow-hidden relative">
      <div className="px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] lg:aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=1200"
                  alt="Children learning and engaging in activities at the school"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-8 lg:pl-8 flex flex-col justify-center">
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
                  Real Progress <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
                    Happens Every Day
                  </span>
                </h2>
                <div className="flex gap-2">
                  <div className="h-1.5 w-16 rounded-full bg-brand-blue" />
                  <div className="h-1.5 w-8 rounded-full bg-brand-yellow" />
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  At Umang Divyang School, we believe in the unique potential of
                  every child. Through personalized education plans, continuous
                  therapy, and dedicated life-skills training, our children
                  develop vital communication skills, grow more independent, and
                  build the confidence they need to navigate the world.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Watching them master a new skill or make a new friend are the
                  moments of joy that drive our mission forward. Every
                  milestone, no matter how small, is a giant leap for our
                  students.
                </p>
              </div>

              <div className="pt-6">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-14 text-lg font-bold bg-brand-blue hover:bg-brand-blue/90 hover:-translate-y-1 transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Link href="/about">
                    Read Our Story{" "}
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
