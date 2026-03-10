"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";

const testimonials = [
  {
    quote:
      "Umang helped our child gain confidence and communication skills we never imagined possible. The dedicated teachers and supportive environment made all the difference.",
    parent: "Priya Sharma",
    childAge: "Mother of Siya",
    image:
      "https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?auto=format&fit=crop&q=80&w=200",
    color: "border-brand-blue",
    quoteColor: "text-brand-blue/40",
    offset: "lg:translate-y-4",
  },
  {
    quote:
      "Finding a school that truly understands neurodiversity was a blessing. The personalized attention our son receives has transformed his daily life.",
    parent: "Rajesh Kumar",
    childAge: "Father of Rohan",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    color: "border-brand-yellow",
    quoteColor: "text-brand-yellow/50",
    offset: "lg:-translate-y-4",
  },
  {
    quote:
      "The life-skills training has helped my child become more independent at home. We are grateful for the caring community at Umang.",
    parent: "Anita Desai",
    childAge: "Mother of Aryan",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=200",
    color: "border-brand-green",
    quoteColor: "text-brand-green/40",
    offset: "lg:translate-y-4",
  },
];

export function Testimonials() {
  return (
    <Section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative SVG background curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-20 -translate-y-1/2">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-32 text-brand-orange fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6 sm:text-5xl">
            What Parents Say
          </h2>
          <div className="flex justify-center gap-2">
            <div className="h-1.5 w-16 rounded-full bg-brand-orange" />
            <div className="h-1.5 w-4 rounded-full bg-brand-yellow" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {testimonials.map((t, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div
                className={`bg-white rounded-[2.5rem] rounded-tr-3xl rounded-bl-3xl p-12 relative flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${t.color} ${t.offset} hover:-translate-y-2`}
              >
                <Quote
                  className={`${t.quoteColor} w-20 h-20 absolute top-4 right-6 -rotate-12`}
                />
                <p className="text-lg lg:text-xl text-slate-900 font-semibold leading-relaxed mb-10 relative z-10 flex-grow italic">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-5 mt-auto relative z-10">
                  <Image
                    src={t.image}
                    alt={t.parent}
                    width={64}
                    height={64}
                    className="rounded-full object-cover w-16 h-16 ring-4 ring-white shadow-sm"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">
                      {t.parent}
                    </h4>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                      {t.childAge}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
