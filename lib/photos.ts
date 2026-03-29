import { galleryPhotos } from "@/lib/gallery-images";

export type PhotoItem = {
  src: string;
  alt: string;
  tag?: string;
};

/** First six real gallery photos (for carousels / lightboxes). */
export const homePhotos: PhotoItem[] = galleryPhotos
  .filter((p) => !p.src.endsWith(".svg"))
  .slice(0, 6)
  .map((p) => ({
    src: p.src,
    alt: p.alt,
    tag: p.category,
  }));
