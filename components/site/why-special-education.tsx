import { Zap, HeartPulse, Users } from "lucide-react";
import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";

const points = [
  {
    icon: Zap,
    title: "Early Intervention",
    description: "Support in the early years is critical. We identify needs early to provide specialized guidance that helps children reach developmental milestones faster.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: HeartPulse,
    title: "Therapy and Life Skills",
    description: "Beyond academics, we focus on functional independence through occupational and speech therapy, and daily living skills training.",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Users,
    title: "Community Inclusion",
    description: "Every child deserves to belong. we create social integration opportunities to ensure our students are active, respected members of society.",
    color: "bg-indigo-500/10 text-indigo-600",
  },
] as const;

export function WhySpecialEducation() {
  return (
    <Section className="bg-muted/30">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Mission</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Why Children with Special Needs Need Support
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Special education isn&apos;t just about learning; it&apos;s about dignity, independence, and the right to live a meaningful life.
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {points.map((p, idx) => (
          <FadeIn key={p.title} delay={idx * 0.1}>
            <div className="relative flex flex-col items-center text-center">
              <div className={`mb-6 grid h-16 w-16 place-items-center rounded-2xl ${p.color} shadow-sm transition-transform hover:scale-110 duration-300`}>
                <p.icon className="h-8 w-8" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
