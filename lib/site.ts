export const siteConfig = {
  name: "Umang Divyang School",
  description:
    "Umang Divyang School supports children with developmental disabilities through education, therapy, and life-skills training in Korba, Chhattisgarh.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://umangdivyangschool.org",
  keywords: [
    "special children school",
    "divyang school",
    "special education India",
    "therapy for disabled children",
    "special education Korba",
    "inclusive education",
  ],
  social: {
    instagram: "https://www.instagram.com/umangdivyangschool/",
    youtube: "https://www.youtube.com/@UmangDivyangSchool",
    orgReference: "https://umangindia.org/",
  },
  contact: {
    phone: "+91 89623 00655",
    email: "umangdivyangschool.korba@gmail.com",
    addressLines: [
      "Umang Divyang School",
      "Near E Library, Dingapur",
      "Korba, Chhattisgarh",
      "India",
    ],
    googleMapsEmbedUrl:
      "https://www.google.com/maps?q=Umang%20Divyang%20School&output=embed",
  },
} as const;

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
] as const;

