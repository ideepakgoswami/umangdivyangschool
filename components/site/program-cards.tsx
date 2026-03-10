import Link from "next/link";
import {
  BookOpenCheck,
  Brain,
  Hand,
  UsersRound,
  ArrowRight,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";

const programs = [
  {
    icon: BookOpenCheck,
    title: "Special Education",
    description:
      "Personalized learning plans tailored to each child's cognitive abilities, ensuring they learn at their own pace.",
    href: "/programs#special-education",
    color: "group-hover:text-blue-600",
    bg: "bg-blue-500/10",
  },
  {
    icon: Hand,
    title: "Life Skills Training",
    description:
      "Training in activities of daily living (ADL), communication, and social skills to foster independence.",
    href: "/programs#life-skills",
    color: "group-hover:text-orange-600",
    bg: "bg-orange-500/10",
  },
  {
    icon: Brain,
    title: "Therapy Support",
    description:
      "Comprehensive speech, occupational, and behavioral therapy sessions led by certified professionals.",
    href: "/programs#therapy",
    color: "group-hover:text-green-600",
    bg: "bg-green-500/10",
  },
  {
    icon: UsersRound,
    title: "Community Inclusion",
    description:
      "Organizing events and awareness campaigns that bridge the gap between special children and society.",
    href: "/programs#inclusion",
    color: "group-hover:text-purple-600",
    bg: "bg-purple-500/10",
  },
] as const;

export function ProgramCards() {
  return (
    <Section className="bg-background">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Our Programs</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Support that’s practical and compassionate.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We focus on skills that matter in everyday life—learning, communication,
            independence, and belonging.
          </p>
        </div>
        <Button asChild variant="outline" className="rounded-full px-8 border-2">
          <Link href="/programs">
            Explore all programs <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {programs.map((p, idx) => (
          <FadeIn key={p.title} delay={idx * 0.1}>
            <Card className="group relative h-full rounded-[2.5rem] border-2 border-transparent bg-muted/30 p-2 transition-all hover:border-primary/20 hover:bg-card hover:shadow-xl">
              <CardHeader className="space-y-4 p-6">
                <div className={`grid h-14 w-14 place-items-center rounded-[1.25rem] ${p.bg} transition-transform group-hover:scale-110 duration-300`}>
                  <p.icon className={`h-7 w-7 transition-colors ${p.color}`} aria-hidden />
                </div>
                <CardTitle className="text-xl font-bold">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 px-6 pb-8">
                <p className="text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <Link 
                  href={p.href}
                  className="inline-flex items-center text-sm font-bold text-primary hover:underline hover:underline-offset-4"
                >
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

