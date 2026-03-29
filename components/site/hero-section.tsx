import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import heroPhoto from "../../public/gallery/Events/IMG20250812130217.jpg";

export function HeroSection() {
  return (
    <section className="relative flex h-[calc(100vh-80px)] min-h-[600px] w-full items-center justify-center overflow-hidden bg-amber-50/50">
      {/* Playful Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-brand-yellow/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
        <div
          className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-brand-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          style={{ animationDelay: "2s", animationDuration: "7s" }}
        />
        <div
          className="absolute bottom-[-10%] left-[20%] w-[25rem] h-[25rem] bg-brand-red/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          style={{ animationDelay: "4s", animationDuration: "8s" }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-10 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
          {/* Text Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <Badge
              variant="outline"
              className="mb-8 border-brand-orange text-brand-orange px-5 py-2 text-sm sm:text-base font-bold tracking-wider uppercase rounded-full bg-brand-orange/10 shadow-sm flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Inclusive Education & Therapy
            </Badge>

            <h1 className="text-balance text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-[4.5rem] leading-[1.1] mb-6">
              Empowering Special Children to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red">
                Live with Dignity
              </span>
            </h1>

            <p className="max-w-xl text-pretty text-lg text-slate-600 sm:text-xl mb-10 leading-relaxed font-medium">
              Umang Divyang School supports children with developmental
              disabilities through structured education, therapy, and
              life-skills training in a joyful environment.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="rounded-full px-10 h-16 text-lg font-bold shadow-xl bg-brand-orange text-white hover:bg-brand-orange/90 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-orange/30"
              >
                <Link href="/donate">
                  Donate Now{" "}
                  <Heart className="ml-2 h-6 w-6 fill-current" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full px-8 h-16 text-lg font-bold transition-all text-slate-700 hover:bg-brand-blue/10 hover:text-brand-blue"
              >
                <Link href="/volunteer">
                  Volunteer <ArrowRight className="ml-2 h-6 w-6" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          {/* Creative Image Composition */}
          <div className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center">
            {/* Decorative background shape for image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/30 to-brand-purple/30 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[spin_20s_linear_infinite] opacity-50 blur-xl" />

            {/* Main Image with organic border radius */}
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[3rem] lg:rounded-[5rem] rounded-tr-[10rem] overflow-hidden shadow-2xl shadow-brand-blue/20 border-8 border-white z-10 hover:scale-[1.02] transition-transform duration-500">
              <Image
                src={heroPhoto}
                alt="Students and educators during an activity at Umang Divyang School"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
