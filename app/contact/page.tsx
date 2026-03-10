import { Section } from "@/components/site/section";
import { FadeIn } from "@/components/site/fade-in";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Umang Divyang School.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
        <div className="px-4 max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-slate-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We&apos;d love to hear from you. Reach out with any questions
              about admissions, programs, or how you can support our mission.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-24 bg-white">
        <div className="px-4 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <FadeIn className="lg:col-span-1 space-y-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                    <p className="text-slate-600 leading-relaxed">
                      {siteConfig.contact.addressLines.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                    <p className="text-slate-600">{siteConfig.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-600">{siteConfig.contact.email}</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="bg-slate-50 p-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Send us a message
                </h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="h-12 bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="h-12 bg-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      className="h-12 bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                      className="min-h-[150px] bg-white"
                    />
                  </div>
                  <Button className="h-14 px-8 text-lg font-bold bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section className="py-0 h-[400px] sm:h-[500px] w-full">
        <iframe
          src={siteConfig.contact.googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full bg-slate-200"
          title="Umang Divyang School Location"
        />
      </Section>
    </>
  );
}
