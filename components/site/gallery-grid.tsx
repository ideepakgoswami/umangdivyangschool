"use client";

import Image from "next/image";
import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";
import { homeGalleryPreview } from "@/lib/gallery-images";

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
          {homeGalleryPreview.map((photo, i) => (
            <FadeIn key={photo.src} delay={i * 0.1}>
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
