import Image from "next/image";
import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/gallery-images";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { HeartHandshake, Sparkles, BookOpen, Presentation } from "lucide-react";

export const metadata = {
  title: "Volunteer",
  description:
    "Join our dedicated team of volunteers and make a lasting impact.",
};

const waysToHelp = [
  {
    icon: BookOpen,
    title: "Classroom Assistant",
    desc: "Help teachers during lessons, assist students with activities, and provide one-on-one support.",
  },
  {
    icon: HeartHandshake,
    title: "Therapy Aide",
    desc: "Assist our professional therapists in organizing sessions and engaging children.",
  },
  {
    icon: Presentation,
    title: "Event Organizer",
    desc: "Help plan and execute school events, field trips, and community outreach programs.",
  },
  {
    icon: Sparkles,
    title: "Skill Sharing",
    desc: "Share your unique skills like art, music, or computer literacy with our students.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <Section className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="px-4 max-w-5xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-brand-orange mb-6">
              <HeartHandshake className="h-4 w-4" />
              Make a Difference
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
              Volunteer With Us
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Your time and compassion can change a child&apos;s life. Join our
              community and help build a more inclusive world.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-24 bg-white">
        <div className="px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ways You Can Help
            </h2>
            <div className="w-16 h-1.5 bg-brand-orange mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {waysToHelp.map((way, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6">
                    <way.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {way.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{way.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-24 bg-slate-50">
        <div className="px-4 max-w-5xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12 bg-brand-orange text-white flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
                <p className="text-lg text-white/90 leading-relaxed mb-8">
                  Fill out the form to register your interest. Our volunteer
                  coordinator will reach out to you to discuss available
                  opportunities and schedule an orientation.
                </p>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mt-auto hidden md:block">
                  <Image
                    src={siteImages.volunteer}
                    alt="Volunteers and school community at Umang Divyang School"
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
              </div>
              <div className="p-10 md:p-12">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="h-12 bg-slate-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-12 bg-slate-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="h-12 bg-slate-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How would you like to help?</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your interests and availability..."
                      className="min-h-[120px] bg-slate-50"
                    />
                  </div>
                  <Button className="w-full h-14 text-lg font-bold bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
