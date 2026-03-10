"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";

const categories = ["All", "Classroom", "Therapy", "Events", "Activities"];

const photos = [
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800", category: "Classroom", alt: "Classroom learning" },
  { src: "https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?auto=format&fit=crop&q=80&w=800", category: "Activities", alt: "Art activity" },
  { src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800", category: "Therapy", alt: "Therapy session" },
  { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", category: "Events", alt: "Group event" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", category: "Classroom", alt: "Reading time" },
  { src: "https://images.unsplash.com/photo-1593113563332-6142713f01c7?auto=format&fit=crop&q=80&w=800", category: "Activities", alt: "Outdoor activities" },
  { src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=800", category: "Activities", alt: "Group activities" },
  { src: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=800", category: "Events", alt: "School gathering" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos = activeCategory === "All"
    ? photos
    : photos.filter(photo => photo.category === activeCategory);

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
            {categories.map((cat) => (
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
              <FadeIn key={i} delay={i * 0.05}>
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
