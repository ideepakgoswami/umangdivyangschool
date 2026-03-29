import Image from "next/image";
import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";
import { Heart, Target, History } from "lucide-react";
import { siteImages } from "@/lib/gallery-images";

export const metadata = {
  title: "About Us",
  description:
    "Learn about the mission, vision, and story of Umang Divyang School.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
        <div className="px-4 max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-slate-900 mb-6">
              About Umang Divyang School
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Empowering children with developmental disabilities through
              specialized education, compassionate therapy, and a nurturing
              community.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-20 bg-white">
        <div className="px-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-4 py-2 text-sm font-medium text-brand-orange">
                  <Target className="h-4 w-4" />
                  Our Mission & Vision
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  A World of Inclusion
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  <strong>Mission:</strong> To provide accessible, high-quality
                  special education and life-skills training that enables every
                  child to reach their full potential and lead an independent
                  life.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  <strong>Vision:</strong> To create an inclusive society where
                  neurodivergent individuals are respected, supported, and given
                  equal opportunities to thrive.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl">
                <Image
                  src={siteImages.aboutMission}
                  alt="Children learning at Umang Divyang School"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-slate-50">
        <div className="px-4 max-w-4xl mx-auto text-center">
          <FadeIn>
            <Heart className="w-12 h-12 text-brand-red mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Umang Divyang School was born out of a profound realization:
                children with special needs require an environment that adapts
                to them, not the other way around. Over a decade ago, a small
                group of passionate educators and parents came together to
                bridge the gap in special education in our community.
              </p>
              <p>
                What started in a single room with just a few students has
                blossomed into a comprehensive facility offering education,
                therapy, and vocational training to hundreds of children,
                transforming countless lives along the way.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-20 bg-white">
        <div className="px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Founder&apos;s Message
            </h2>
            <div className="w-16 h-1.5 bg-brand-blue mx-auto rounded-full" />
          </div>
          <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 shadow-lg border-2 border-slate-100 max-w-4xl mx-auto relative">
            <QuoteIcon className="w-16 h-16 text-brand-blue/20 absolute top-8 left-8 -rotate-12" />
            <div className="relative z-10 pl-4 sm:pl-12">
              <p className="text-xl md:text-2xl text-slate-800 font-medium italic leading-relaxed mb-8">
                &quot;Every child is a unique universe of potential. Our job is
                not to force them into a standard mold, but to discover the key
                that unlocks their individual brilliance. Seeing our students
                take their first independent steps is the greatest reward we
                could ever ask for.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-blue/20">
                  <Image
                    src={siteImages.founder}
                    alt="Javed Akhtar, Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    Javed Akhtar
                  </h4>
                  <p className="text-slate-500">Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-slate-900 text-white">
        <div className="px-4 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <History className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          </div>
          <div className="space-y-12">
            {[
              {
                year: "2014",
                title: "The Beginning",
                desc: "Started in a small rented facility with 5 students.",
              },
              {
                year: "2018",
                title: "Expansion",
                desc: "Moved to a dedicated campus and introduced speech and occupational therapy.",
              },
              {
                year: "2021",
                title: "Vocational Center",
                desc: "Launched life-skills training for older adolescents to promote independence.",
              },
              {
                year: "2023",
                title: "Milestone",
                desc: "Reached 250+ students supported and recognized as a center of excellence.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  <div className="flex-shrink-0 w-32 text-brand-yellow text-3xl font-black">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-lg">{item.desc}</p>
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

function QuoteIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
