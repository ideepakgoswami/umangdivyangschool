"use client";

import * as React from "react";
import {
  GraduationCap,
  HeartHandshake,
  Layers,
  CalendarHeart,
} from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  React.useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: GraduationCap,
    label: "Students Supported",
    value: 250,
    suffix: "+",
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/5",
  },
  {
    icon: CalendarHeart,
    label: "Years of Service",
    value: 10,
    suffix: "+",
    color: "text-brand-orange",
    bgColor: "bg-brand-orange/5",
  },
  {
    icon: Layers,
    label: "Programs",
    value: 8,
    suffix: "",
    color: "text-brand-green",
    bgColor: "bg-brand-green/5",
  },
  {
    icon: HeartHandshake,
    label: "Volunteers",
    value: 300,
    suffix: "+",
    color: "text-brand-purple",
    bgColor: "bg-brand-purple/5",
  },
] as const;

export function ImpactStats() {
  return (
    <Section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative dots background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every number represents a story of resilience, learning, and growth
            in our beautiful community.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <FadeIn key={s.label} delay={idx * 0.1}>
              <div
                className={`flex flex-col items-center justify-center p-8 rounded-[2rem] ${s.bgColor} border border-slate-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md shadow-sm`}
              >
                <div
                  className={`p-4 rounded-full bg-white shadow-sm mb-6 ${s.color}`}
                >
                  <s.icon className="h-10 w-10" aria-hidden />
                </div>
                <p
                  className={`text-5xl lg:text-6xl font-black tracking-tighter mb-2 ${s.color} flex items-center justify-center`}
                >
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <h3 className="text-base font-semibold text-slate-600 tracking-wide text-center">
                  {s.label}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
