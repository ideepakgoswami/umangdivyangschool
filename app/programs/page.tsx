import Image from "next/image";
import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";
import { BookOpen, Activity, HeartHandshake, Users } from "lucide-react";
import { siteImages } from "@/lib/gallery-images";

export const metadata = {
  title: "Programs",
  description:
    "Explore the special education, therapy, and life-skills programs offered at Umang Divyang School.",
};

const programs = [
  {
    id: "special-education",
    title: "Special Education",
    icon: BookOpen,
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
    description:
      "Individualized Education Programs (IEPs) tailored to the unique learning style, pace, and abilities of each child. We focus on foundational academics, cognitive development, and communication.",
    impact:
      "Improves cognitive abilities, basic literacy, and numeral skills, fostering a love for continuous learning.",
    image: siteImages.programs.specialEducation,
  },
  {
    id: "life-skills",
    title: "Life Skills Training",
    icon: Activity,
    color: "text-brand-orange",
    bgColor: "bg-brand-orange/10",
    description:
      "Practical training focused on daily living activities. Students learn personal hygiene, money management, basic cooking, and self-care routines to build self-reliance.",
    impact:
      "Enhances personal independence, builds self-esteem, and prepares older adolescents for vocational opportunities.",
    image: siteImages.programs.lifeSkills,
  },
  {
    id: "therapy",
    title: "Therapy Support",
    icon: HeartHandshake,
    color: "text-brand-green",
    bgColor: "bg-brand-green/10",
    description:
      "Comprehensive therapeutic interventions including Speech Therapy, Occupational Therapy, and Physiotherapy provided by certified professionals in equipped environments.",
    impact:
      "Improves speech clarity, motor skills, sensory processing, and emotional regulation.",
    image: siteImages.programs.therapy,
  },
  {
    id: "community",
    title: "Community Inclusion",
    icon: Users,
    color: "text-brand-purple",
    bgColor: "bg-brand-purple/10",
    description:
      "Organized social events, field trips, and integration activities that encourage interaction between our students and the broader community, breaking down social barriers.",
    impact:
      "Fosters social skills, reduces stigma, and builds a supportive, inclusive local network.",
    image: siteImages.programs.community,
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Section className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
        <div className="px-4 max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-slate-900 mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive approaches tailored to each child&apos;s unique
              needs, combining education, therapy, and real-world skills.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-24 bg-white">
        <div className="px-4 max-w-7xl mx-auto space-y-24">
          {programs.map((prog, index) => (
            <FadeIn key={prog.id} delay={0.1}>
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "md:[&>*:first-child]:order-last" : ""}`}
              >
                <div className="space-y-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${prog.bgColor} ${prog.color}`}
                  >
                    <prog.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    {prog.title}
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {prog.description}
                  </p>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2">
                      Impact on Students:
                    </h4>
                    <p className="text-slate-600">{prog.impact}</p>
                  </div>
                </div>
                <div className="relative aspect-video md:aspect-square overflow-hidden rounded-[2rem] shadow-lg">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
