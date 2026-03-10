import Link from "next/link";
import {
  Heart,
  MessageCircle,
  BookOpen,
  Activity,
  CalendarHeart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";

const tiers = [
  { amount: "₹500", label: "Learning materials", icon: BookOpen },
  { amount: "₹2000", label: "Therapy support", icon: Activity },
  { amount: "₹5000", label: "Monthly education support", icon: CalendarHeart },
];

export function DonationCTA() {
  return (
    <Section className="py-28 sm:py-36 bg-amber-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-3xl opacity-60" />

      <div className="relative z-10 px-4 max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Your Support Can Change a Child&apos;s Future
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Every donation helps us provide essential therapy, education, and
              life-skills training. A small contribution goes a long way in
              giving a child a life of dignity and independence.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mb-10 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.amount}
                className="bg-white rounded-[2rem] p-10 shadow-lg shadow-amber-900/5 text-center transition-all duration-300 border-2 border-transparent hover:border-amber-400 hover:ring-4 hover:ring-amber-400/20 hover:-translate-y-2 flex flex-col items-center"
              >
                <div className="p-4 bg-amber-100/50 rounded-full mb-6 text-amber-600">
                  <tier.icon className="w-8 h-8" />
                </div>
                <h3 className="text-5xl font-extrabold text-amber-600 mb-4">
                  {tier.amount}
                </h3>
                <p className="text-lg text-slate-600 font-semibold leading-snug">
                  {tier.label}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <p className="text-slate-600 font-medium">
              You can donate securely via UPI, credit/debit card, or bank
              transfer.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="rounded-full px-12 h-16 text-xl font-bold shadow-xl shadow-amber-600/20 bg-amber-600 hover:bg-amber-700 text-white transition-all hover:scale-105"
            >
              <Link href="/donate">
                Donate Now{" "}
                <Heart className="ml-3 h-6 w-6 fill-current" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-12 h-16 text-xl font-bold transition-all border-2 border-slate-300 text-slate-700 hover:bg-white hover:text-slate-900 hover:border-slate-400"
            >
              <Link href="/contact">
                Talk to Us{" "}
                <MessageCircle className="ml-3 h-6 w-6" aria-hidden />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
