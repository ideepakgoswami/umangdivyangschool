"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";
import { galleryCategories, galleryPhotos } from "@/lib/gallery-images";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos =
    activeCategory === "All"
      ? galleryPhotos
      : galleryPhotos.filter((photo) => photo.category === activeCategory);

  return (
    <>
      <Section className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
        <div className="px-4 max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-slate-900 mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Explore moments of joy, learning, and growth from our daily life at Umang Divyang School.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-16 bg-white min-h-[60vh]">
        <div className="px-4 max-w-7xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-brand-blue text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, i) => (
              <FadeIn key={photo.src} delay={i * 0.05}>
                <div className="relative group overflow-hidden rounded-2xl bg-slate-100 aspect-square shadow-sm hover:shadow-xl transition-all duration-300">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium tracking-wide bg-black/30 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {photo.category}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
