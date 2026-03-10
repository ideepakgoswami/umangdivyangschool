import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, HeartPulse, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Donate",
  description:
    "Support Umang Divyang School and make a difference in the lives of children.",
};

const donationTiers = [
  {
    amount: "₹500",
    title: "Learning Materials",
    description:
      "Provides specialized educational toys, books, and art supplies for one child.",
    icon: BookOpen,
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
  },
  {
    amount: "₹2,000",
    title: "Therapy Support",
    description:
      "Funds multiple essential speech or occupational therapy sessions.",
    icon: HeartPulse,
    color: "text-brand-green",
    bgColor: "bg-brand-green/10",
    popular: true,
  },
  {
    amount: "₹5,000",
    title: "Monthly Education",
    description:
      "Sponsors a full month of comprehensive education and therapy for a child in need.",
    icon: GraduationCap,
    color: "text-brand-orange",
    bgColor: "bg-brand-orange/10",
  },
];

export default function DonatePage() {
  return (
    <>
      <Section className="py-20 sm:py-28 bg-brand-orange relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="px-4 max-w-5xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium mb-6 backdrop-blur-sm">
              <Heart className="h-4 w-4 fill-current" />
              Support Our Cause
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
              Give the Gift of Independence
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Your contribution directly empowers children with disabilities to
              receive the education and therapy they deserve.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-24 bg-slate-50">
        <div className="px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Choose Your Impact
            </h2>
            <div className="w-16 h-1.5 bg-brand-orange mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {donationTiers.map((tier, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className={`bg-white rounded-[2rem] p-8 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full ${tier.popular ? "border-brand-orange shadow-lg relative" : "border-slate-100"}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                      Most Impactful
                    </div>
                  )}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${tier.bgColor} ${tier.color} mb-6`}
                  >
                    <tier.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 mb-2">
                    {tier.amount}
                  </h3>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">
                    {tier.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    {tier.description}
                  </p>
                  <Button className="w-full h-14 text-lg font-bold rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white">
                    Donate {tier.amount}
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Prefer to enter a custom amount?
            </h3>
            <p className="text-slate-600 mb-8 text-lg">
              Every contribution, no matter the size, helps us create a better
              learning environment.
            </p>
            <Button className="h-14 px-10 text-lg font-bold rounded-full bg-slate-900 hover:bg-slate-800 text-white">
              Donate Custom Amount
            </Button>
          </div>
        </div>
      </Section>

      <Section className="py-24 bg-white">
        <div className="px-4 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Why Donations Matter
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                Subsidized Education
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Many of our students come from underprivileged backgrounds. Your
                donations help us subsidize their education, ensuring that
                financial constraints never stand in the way of a child&apos;s
                development.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                Specialized Equipment
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Special education requires specific sensory tools, mobility
                aids, and therapeutic equipment. Funding allows us to maintain a
                state-of-the-art facility tailored to diverse needs.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
