/**
 * Central registry of images under `public/gallery/`.
 * Regenerate with: `node scripts/generate-gallery-images.mjs`
 */

export type GalleryCategory = "Classroom" | "Therapy" | "Events" | "Activities" | "Team";

export type GalleryPhoto = {
  src: string;
  category: GalleryCategory;
  alt: string;
};

export function galleryPath(folder: string, filename: string): string {
  if (!folder) return `/gallery/${encodeURIComponent(filename)}`;
  return `/gallery/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;
}

export const galleryCategories = [
  "All",
  "Classroom",
  "Therapy",
  "Events",
  "Activities",
  "Team",
] as const;

export const galleryPhotos: GalleryPhoto[] = [
  {
    "src": "/gallery/Activities/IMG-20250806-WA0036.jpg",
    "category": "Activities",
    "alt": "School activity at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG-20250806-WA0065.jpg",
    "category": "Activities",
    "alt": "School activity at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG-20250823-WA0032.jpg",
    "category": "Activities",
    "alt": "School activity at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG-20250906-WA0086.jpg",
    "category": "Activities",
    "alt": "School activity at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG-20250906-WA0087.jpg",
    "category": "Activities",
    "alt": "School activity at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG-20260110-WA0022.jpg",
    "category": "Activities",
    "alt": "School activity at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG-20260128-WA0022.jpg",
    "category": "Activities",
    "alt": "School activity at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG-20260130-WA0015.jpg",
    "category": "Activities",
    "alt": "School activity at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG-20260130-WA0034.jpg",
    "category": "Classroom",
    "alt": "Students learning in a classroom at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG20250714171842.jpg",
    "category": "Activities",
    "alt": "School activity at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG20250714171944.jpg",
    "category": "Activities",
    "alt": "School activity at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG20251017125858.jpg",
    "category": "Activities",
    "alt": "School activity at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG20251111120756.jpg",
    "category": "Activities",
    "alt": "School activity at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG20251113103118.jpg",
    "category": "Activities",
    "alt": "School activity at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG20260106141601.jpg",
    "category": "Classroom",
    "alt": "Students learning in a classroom at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG20260106142752.jpg",
    "category": "Classroom",
    "alt": "Students learning in a classroom at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG20260112125634.jpg",
    "category": "Classroom",
    "alt": "Students learning in a classroom at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG20260126105049.jpg",
    "category": "Classroom",
    "alt": "Students learning in a classroom at Umang Divyang School"
  },
  {
    "src": "/gallery/Activities/IMG20260129151843.jpg",
    "category": "Classroom",
    "alt": "Students learning in a classroom at Umang Divyang School"
  },
  {
    "src": "/gallery/Events/IMG-20251203-WA0146.jpg",
    "category": "Events",
    "alt": "School event at Umang Divyang School"
  },
  {
    "src": "/gallery/Events/IMG-20251203-WA0153.jpg",
    "category": "Events",
    "alt": "School event at Umang Divyang School"
  },
  {
    "src": "/gallery/Events/IMG20250812130217.jpg",
    "category": "Events",
    "alt": "School event at Umang Divyang School"
  },
  {
    "src": "/gallery/Events/IMG20250815083502.jpg",
    "category": "Events",
    "alt": "School event at Umang Divyang School"
  },
  {
    "src": "/gallery/Events/IMG20250822155403.jpg",
    "category": "Events",
    "alt": "School event at Umang Divyang School"
  },
  {
    "src": "/gallery/Events/IMG20251203113219.jpg",
    "category": "Events",
    "alt": "School event at Umang Divyang School"
  },
  {
    "src": "/gallery/Events/IMG20260123123818.jpg",
    "category": "Events",
    "alt": "School event at Umang Divyang School"
  },
  {
    "src": "/gallery/Events/IMG20260126082231.jpg",
    "category": "Events",
    "alt": "School event at Umang Divyang School"
  },
  {
    "src": "/gallery/Events/IMG20260303133658.jpg",
    "category": "Events",
    "alt": "School event at Umang Divyang School"
  },
  {
    "src": "/gallery/Events/IMG20260309164529.jpg",
    "category": "Events",
    "alt": "School event at Umang Divyang School"
  },
  {
    "src": "/gallery/Events/IMG_20250823_131259179.jpg",
    "category": "Events",
    "alt": "School event at Umang Divyang School"
  },
  {
    "src": "/gallery/Events/IMG_20250823_131615903_HDR.jpg",
    "category": "Events",
    "alt": "School event at Umang Divyang School"
  },
  {
    "src": "/gallery/Events/IMG_20250823_135800961.jpg",
    "category": "Events",
    "alt": "School event at Umang Divyang School"
  },
  {
    "src": "/gallery/Founder%20And%20Principal/Aruna%20Sharma-%20BRP.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Aruna Sharma- BRP"
  },
  {
    "src": "/gallery/Founder%20And%20Principal/Javed%20Akhtar%20-%20Founder.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Javed Akhtar - Founder"
  },
  {
    "src": "/gallery/Founder%20And%20Principal/Jwala%20Sholanki-BRP.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Jwala Sholanki-BRP"
  },
  {
    "src": "/gallery/Founder%20And%20Principal/Meena%20Soni%20-%20Principal.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Meena Soni - Principal"
  },
  {
    "src": "/gallery/Opening%20Ceremony/IMG-20250330-WA0010.jpg",
    "category": "Events",
    "alt": "Opening ceremony at Umang Divyang School"
  },
  {
    "src": "/gallery/Opening%20Ceremony/IMG-20250330-WA0012.jpg",
    "category": "Events",
    "alt": "Opening ceremony at Umang Divyang School"
  },
  {
    "src": "/gallery/Opening%20Ceremony/IMG-20250330-WA0013.jpg",
    "category": "Events",
    "alt": "Opening ceremony at Umang Divyang School"
  },
  {
    "src": "/gallery/Opening%20Ceremony/IMG-20250330-WA0014.jpg",
    "category": "Events",
    "alt": "Opening ceremony at Umang Divyang School"
  },
  {
    "src": "/gallery/Opening%20Ceremony/IMG-20250330-WA0015.jpg",
    "category": "Events",
    "alt": "Opening ceremony at Umang Divyang School"
  },
  {
    "src": "/gallery/Opening%20Ceremony/IMG-20250330-WA0016.jpg",
    "category": "Events",
    "alt": "Opening ceremony at Umang Divyang School"
  },
  {
    "src": "/gallery/Staff/15%20Aug%202025.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — 15 Aug 2025"
  },
  {
    "src": "/gallery/Staff/Aaditya%20Ken%20-%20sweeper.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Aaditya Ken - sweeper"
  },
  {
    "src": "/gallery/Staff/Archana%20Bharti%20-%20Caretaker.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Archana Bharti - Caretaker"
  },
  {
    "src": "/gallery/Staff/Geeta%20Dewangan%20-%20Caretaker.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Geeta Dewangan - Caretaker"
  },
  {
    "src": "/gallery/Staff/Indu%20Kurrey%20-Caretaker.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Indu Kurrey -Caretaker"
  },
  {
    "src": "/gallery/Staff/Jyoti%20Rajwade%20-%20Peon.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Jyoti Rajwade - Peon"
  },
  {
    "src": "/gallery/Staff/Ragni%20Yadav%20-%20sweeper_.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Ragni Yadav - sweeper "
  },
  {
    "src": "/gallery/Staff/Satish%20Sharma%20-%20Caretaker.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Satish Sharma - Caretaker"
  },
  {
    "src": "/gallery/Staff/Shakuntala%20-%20Caretaker.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Shakuntala - Caretaker"
  },
  {
    "src": "/gallery/Staff/Shankar%20Rajwade%20-%20Peon.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Shankar Rajwade - Peon"
  },
  {
    "src": "/gallery/Staff/Urmeela%20Bai%20-%20Cook.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Urmeela Bai - Cook"
  },
  {
    "src": "/gallery/Staff/shiv%20dewangan-%20Cook.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — shiv dewangan- Cook"
  },
  {
    "src": "/gallery/Teachers/Kishan%20Lal%20Thakur%20-%20ID_MR%20Teacher.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Kishan Lal Thakur - ID MR Teacher"
  },
  {
    "src": "/gallery/Teachers/Lakshmi%20Narayan%20Suryavanshi%20-%20V.I%20Teacher.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Lakshmi Narayan Suryavanshi - V.I Teacher"
  },
  {
    "src": "/gallery/Teachers/Lata%20Singh%20-%20H.I%20Teacher.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Lata Singh - H.I Teacher"
  },
  {
    "src": "/gallery/Teachers/Naveen%20Tiwari%20Music%20Teacher.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Naveen Tiwari Music Teacher"
  },
  {
    "src": "/gallery/Teachers/Vikasmani%20Bhargav%20-%20C.P%20Teacher.jpg",
    "category": "Team",
    "alt": "Umang Divyang School team — Vikasmani Bhargav - C.P Teacher"
  },
  {
    "src": "/gallery/Therapy/IMG-20250814-WA0001.jpg",
    "category": "Therapy",
    "alt": "Therapy session at Umang Divyang School"
  },
  {
    "src": "/gallery/Therapy/IMG-20250814-WA0002.jpg",
    "category": "Therapy",
    "alt": "Therapy session at Umang Divyang School"
  },
  {
    "src": "/gallery/activity-1.svg",
    "category": "Activities",
    "alt": "Illustration of children at play"
  },
  {
    "src": "/gallery/activity-2.svg",
    "category": "Activities",
    "alt": "Illustration of children at play"
  },
  {
    "src": "/gallery/activity-3.svg",
    "category": "Activities",
    "alt": "Illustration of children at play"
  },
  {
    "src": "/gallery/activity-4.svg",
    "category": "Activities",
    "alt": "Illustration of children at play"
  },
  {
    "src": "/gallery/activity-5.svg",
    "category": "Activities",
    "alt": "Illustration of children at play"
  },
  {
    "src": "/gallery/activity-6.svg",
    "category": "Activities",
    "alt": "Illustration of children at play"
  }
];

/** Home page gallery strip */
export const homeGalleryPreview: GalleryPhoto[] = [{"src":"/gallery/Activities/IMG20260129151843.jpg","category":"Classroom","alt":"Students learning in a classroom at Umang Divyang School"},{"src":"/gallery/Therapy/IMG-20250814-WA0001.jpg","category":"Therapy","alt":"Therapy session at Umang Divyang School"},{"src":"/gallery/Events/IMG20260309164529.jpg","category":"Events","alt":"School event at Umang Divyang School"},{"src":"/gallery/Opening%20Ceremony/IMG-20250330-WA0013.jpg","category":"Events","alt":"Opening ceremony at Umang Divyang School"},{"src":"/gallery/Activities/IMG20251113103118.jpg","category":"Activities","alt":"School activity at Umang Divyang School"},{"src":"/gallery/Activities/IMG-20250906-WA0087.jpg","category":"Activities","alt":"School activity at Umang Divyang School"},{"src":"/gallery/Events/IMG_20250823_131259179.jpg","category":"Events","alt":"School event at Umang Divyang School"},{"src":"/gallery/Activities/IMG20260112125634.jpg","category":"Classroom","alt":"Students learning in a classroom at Umang Divyang School"}];

export const siteImages = {
  "hero": "/gallery/Events/IMG20250812130217.jpg",
  "studentStory": "/gallery/Activities/IMG20260126105049.jpg",
  "aboutPreview": "/gallery/Activities/IMG-20250906-WA0087.jpg",
  "aboutMission": "/gallery/Activities/IMG20260112125634.jpg",
  "volunteer": "/gallery/Events/IMG20260309164529.jpg",
  "programs": {
    "specialEducation": "/gallery/Activities/IMG20260129151843.jpg",
    "lifeSkills": "/gallery/Activities/IMG20251113103118.jpg",
    "therapy": "/gallery/Therapy/IMG-20250814-WA0001.jpg",
    "community": "/gallery/Opening%20Ceremony/IMG-20250330-WA0015.jpg"
  },
  "founder": "/gallery/Founder%20And%20Principal/Javed%20Akhtar%20-%20Founder.jpg",
  "testimonials": [
    "/gallery/Activities/IMG-20250906-WA0086.jpg",
    "/gallery/Events/IMG20250822155403.jpg",
    "/gallery/Opening%20Ceremony/IMG-20250330-WA0013.jpg"
  ]
} as const;
