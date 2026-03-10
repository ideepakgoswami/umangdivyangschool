export type PhotoItem = {
  src: string;
  alt: string;
  tag?: string;
  credit?: { name: string; url: string };
};

// High-quality real photography placeholders (royalty-free).
// Replace with Umang's real photos (with consent) for launch.
export const homePhotos: PhotoItem[] = [
  {
    src: "https://images.unsplash.com/photo-1588072432836-7d4f8b1b69f5?auto=format&fit=crop&w=1600&q=80",
    alt: "Teacher helping a student at a desk in a classroom",
    tag: "Learning support",
    credit: { name: "Unsplash", url: "https://unsplash.com" },
  },
  {
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80",
    alt: "Child writing with focus in a classroom setting",
    tag: "Education",
    credit: { name: "Unsplash", url: "https://unsplash.com" },
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
    alt: "Group learning activity with children and an educator",
    tag: "Group activity",
    credit: { name: "Unsplash", url: "https://unsplash.com" },
  },
  {
    src: "https://images.unsplash.com/photo-1536337005238-94b997371b40?auto=format&fit=crop&w=1600&q=80",
    alt: "Hands working on arts and crafts project",
    tag: "Creativity",
    credit: { name: "Unsplash", url: "https://unsplash.com" },
  },
  {
    src: "https://images.unsplash.com/photo-1588072432904-843af37f03ed?auto=format&fit=crop&w=1600&q=80",
    alt: "Classroom scene with students listening to an educator",
    tag: "Structured learning",
    credit: { name: "Unsplash", url: "https://unsplash.com" },
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    alt: "Students collaborating with supportive guidance",
    tag: "Inclusion",
    credit: { name: "Unsplash", url: "https://unsplash.com" },
  },
];

