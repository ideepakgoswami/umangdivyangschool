"use client";

import Image from "next/image";
import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";

const photos = [
  { src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=800", alt: "Teacher interacting with children" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800", alt: "Children doing a group activity" },
  { src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800", alt: "Child exploring and learning" },
  { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800", alt: "Student using learning materials" },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800", alt: "Color pencils and drawing taking place" },
  { src: "https://images.unsplash.com/photo-1409152222869-c262873c2be6?auto=format&fit=crop&q=80&w=800", alt: "Kids playing together and having fun" },
  { src: "https://images.unsplash.com/photo-1521404071337-377045b4129b?auto=format&fit=crop&q=80&w=800", alt: "Classroom activities" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", alt: "Engaged in specialized education program" },
];

export function GalleryGrid() {
  return (
    <Section className="py-24 bg-white">
      <div className="mx-auto px-4 max-w-7xl text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6 sm:text-5xl">
          Moments of Joy & Learning
        </h2>
        <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full mb-6" />
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          A glimpse into our classrooms, therapy sessions, and everyday events
          where children build life skills in a warm, supportive environment.
        </p>
      </div>

      <div className="mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative group overflow-hidden rounded-2xl bg-slate-50 aspect-[4/3] shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
