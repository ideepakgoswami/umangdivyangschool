import Link from "next/link";
import { Instagram, Youtube, MapPin, Phone, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-24 sm:py-32">
      <div className="px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* School Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <Heart
                className="w-6 h-6 text-brand-orange"
                fill="currentColor"
              />
              Umang Divyang School
            </h3>
            <p className="text-base leading-relaxed text-slate-400">
              Empowering children with intellectual and developmental
              disabilities in Korba through structured education, therapy, and
              life-skills training.
            </p>
            <div className="flex gap-5 pt-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-900 rounded-full hover:bg-slate-800"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-900 rounded-full hover:bg-slate-800"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-xl font-bold text-white mb-8 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-4 text-base font-medium">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-white transition-colors"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-brand-orange hover:text-brand-orange/80 transition-colors font-bold flex items-center gap-2"
                >
                  Donate Now
                  <Heart className="w-4 h-4 fill-current" />
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteer"
                  className="hover:text-white transition-colors"
                >
                  Become a Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold text-white mb-8 tracking-wide">
              Contact Information
            </h4>
            <ul className="space-y-6 text-base font-medium">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
                <a
                  href="https://maps.google.com/?q=Umang+Divyang+School,+Korba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors leading-relaxed"
                >
                  Umang Divyang School
                  <br />
                  Near Community Hall, Korba
                  <br />
                  Chhattisgarh 495677, India
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-brand-orange shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-brand-orange shrink-0" />
                <a
                  href="mailto:info@umangschool.org"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  info@umangschool.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 font-medium">
          <p>
            © {new Date().getFullYear()} Umang Divyang School. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed with{" "}
            <Heart className="w-4 h-4 text-brand-orange" fill="currentColor" />{" "}
            for special children.
          </p>
        </div>
      </div>
    </footer>
  );
}
