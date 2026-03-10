import { DonationCTA } from "@/components/site/donation-cta";
import { GalleryGrid } from "@/components/site/gallery-grid";
import { HeroSection } from "@/components/site/hero-section";
import { ImpactStats } from "@/components/site/impact-stats";
import { StudentStory } from "@/components/site/student-story";
import { Testimonials } from "@/components/site/testimonials";
import { VolunteerSection } from "@/components/site/volunteer-section";
import { FeaturedVideo } from "@/components/site/featured-video";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Umang Divyang School | Special Education for Children with Disabilities",
  description:
    "Umang Divyang School supports children with developmental disabilities through education, therapy, and life-skills training in Korba, Chhattisgarh.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <StudentStory />
      <GalleryGrid />
      <FeaturedVideo />
      <DonationCTA />
      <Testimonials />
      <VolunteerSection />
    </>
  );
}
