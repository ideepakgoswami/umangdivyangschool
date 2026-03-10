import { PlayCircle } from "lucide-react";
import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";

export function FeaturedVideo() {
  const videoSrc = "https://www.youtube.com/embed/1qojUPPYTTk";

  return (
    <Section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="mx-auto px-4 max-w-6xl">
        <FadeIn>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white mb-6 backdrop-blur-md">
              <PlayCircle className="h-5 w-5" aria-hidden />
              Our Work
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              See the Impact in Action
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Experience the journey of learning and discovery. Watch how
              specialized education and therapy help our students thrive every
              single day.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] shadow-2xl shadow-black/50 ring-1 ring-white/10">
            <div className="aspect-video w-full bg-black relative">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoSrc}
                title="Umang Divyang School Impact Video"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
