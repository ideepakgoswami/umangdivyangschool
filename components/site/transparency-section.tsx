import Link from "next/link";
import { ShieldCheck, BarChart3, FileText, ExternalLink } from "lucide-react";
import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";

const pillars = [
  {
    icon: ShieldCheck,
    title: "How Funds Are Used",
    description:
      "100% of donations go directly towards programs — therapy, education, assistive devices, and inclusive activities. We maintain audited financial records.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: BarChart3,
    title: "Impact Reporting",
    description:
      "We share regular updates through our community channels and have a detailed annual impact report showing outcomes achieved by our students.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: FileText,
    title: "Regular Updates",
    description:
      "Donors receive regular updates with photos and progress stories (with consent) so you can see the real-world difference your support makes.",
    color: "bg-purple-500/10 text-purple-600",
  },
];

export function TransparencySection() {
  return (
    <Section className="bg-muted/20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Accountability</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Transparency and Accountability
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          We believe trust is earned through openness. Here&apos;s how we operate with full accountability to our donors and community.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {pillars.map((p, idx) => (
          <FadeIn key={p.title} delay={idx * 0.1}>
            <div className="relative flex flex-col gap-6 rounded-[2.5rem] border-2 border-border/50 bg-card p-8 transition-all hover:border-primary/20 hover:shadow-xl">
              <div className={`grid h-14 w-14 place-items-center rounded-2xl ${p.color} transition-transform hover:scale-110 duration-300`}>
                <p.icon className="h-7 w-7" aria-hidden />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="mt-12 flex flex-col items-center gap-4 rounded-[2rem] border-2 border-primary/20 bg-primary/5 p-8 text-center sm:flex-row sm:text-left">
          <div className="flex-1">
            <p className="font-bold text-foreground text-lg">Official Organization</p>
            <p className="mt-1 text-muted-foreground">
              Umang Divyang School is operated under Umang India. For official financial records and organizational details, visit our parent organization.
            </p>
          </div>
          <Link
            href="https://umangindia.org"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:scale-105"
          >
            Visit umangindia.org
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </FadeIn>
    </Section>
  );
}
