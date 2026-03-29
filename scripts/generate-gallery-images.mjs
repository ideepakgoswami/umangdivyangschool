import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "public", "gallery");

function galleryPath(dir, file) {
  if (!dir) return `/gallery/${encodeURIComponent(file)}`;
  return `/gallery/${encodeURIComponent(dir)}/${encodeURIComponent(file)}`;
}

const classroomFiles = new Set([
  "IMG20260129151843.jpg",
  "IMG-20260130-WA0034.jpg",
  "IMG20260126105049.jpg",
  "IMG20260112125634.jpg",
  "IMG20260106141601.jpg",
  "IMG20260106142752.jpg",
]);

const items = [];
const dirs = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

for (const dir of dirs) {
  const p = path.join(root, dir);
  for (const file of fs.readdirSync(p)) {
    if (!/\.(jpe?g|png|webp|gif)$/i.test(file)) continue;

    let category;
    let alt;

    if (dir === "Activities") {
      category = classroomFiles.has(file) ? "Classroom" : "Activities";
      alt = classroomFiles.has(file)
        ? "Students learning in a classroom at Umang Divyang School"
        : "School activity at Umang Divyang School";
    } else if (dir === "Classroom") {
      category = "Classroom";
      alt = "Students learning in a classroom at Umang Divyang School";
    } else if (dir === "Events" || dir === "Opening Ceremony") {
      category = "Events";
      alt =
        dir === "Opening Ceremony"
          ? "Opening ceremony at Umang Divyang School"
          : "School event at Umang Divyang School";
    } else if (dir === "Therapy") {
      category = "Therapy";
      alt = "Therapy session at Umang Divyang School";
    } else if (
      dir === "Staff" ||
      dir === "Teachers" ||
      dir === "Founder And Principal"
    ) {
      category = "Team";
      const base = file.replace(/\.[^.]+$/, "").replace(/_/g, " ");
      alt = `Umang Divyang School team — ${base}`;
    } else {
      category = "Activities";
      alt = "Umang Divyang School";
    }

    items.push({ src: galleryPath(dir, file), category, alt });
  }
}

for (const file of fs.readdirSync(root)) {
  const fp = path.join(root, file);
  if (!fs.statSync(fp).isFile()) continue;
  if (!/\.svg$/i.test(file)) continue;
  items.push({
    src: galleryPath("", file),
    category: "Activities",
    alt: "Illustration of children at play",
  });
}

const pick = (pred) => items.find(pred);

const homeGalleryPreview = [
  pick((i) => i.src.includes("IMG20260129151843")),
  pick((i) => i.category === "Therapy" && i.src.includes("WA0001")),
  pick((i) => i.src.includes("IMG20260309164529")),
  pick((i) => i.src.includes("IMG-20250330-WA0013")),
  pick((i) => i.category === "Activities" && i.src.includes("IMG20251113103118")),
  pick((i) => i.src.includes("IMG-20250906-WA0087")),
  pick((i) => i.src.includes("IMG_20250823_131259179")),
  pick((i) => i.category === "Classroom" && i.src.includes("IMG20260112125634")),
].filter(Boolean);

const siteImages = {
  hero: pick((i) => i.src.includes("IMG20250812130217"))?.src,
  studentStory: pick((i) => i.src.includes("IMG20260126105049"))?.src,
  aboutPreview: pick((i) => i.src.includes("IMG-20250906-WA0087"))?.src,
  aboutMission: pick((i) => i.src.includes("IMG20260112125634"))?.src,
  volunteer: pick((i) => i.src.includes("IMG20260309164529"))?.src,
  programs: {
    specialEducation: pick((i) => i.src.includes("IMG20260129151843"))?.src,
    lifeSkills: pick((i) => i.src.includes("IMG20251113103118"))?.src,
    therapy: pick((i) => i.category === "Therapy")?.src,
    community: pick(
      (i) => i.src.includes("Opening%20Ceremony") && i.src.includes("WA0015")
    )?.src,
  },
  founder: pick((i) => i.src.includes("Javed%20Akhtar"))?.src,
  testimonials: [
    pick((i) => i.src.includes("IMG-20250906-WA0086"))?.src,
    pick((i) => i.src.includes("IMG20250822155403"))?.src,
    pick((i) => i.src.includes("IMG-20250330-WA0013"))?.src,
  ],
};

const categories = ["Classroom", "Therapy", "Events", "Activities", "Team"];

const fileContent = `/**
 * Central registry of images under \`public/gallery/\`.
 * Regenerate with: \`node scripts/generate-gallery-images.mjs\`
 */

export type GalleryCategory = ${categories.map((c) => `"${c}"`).join(" | ")};

export type GalleryPhoto = {
  src: string;
  category: GalleryCategory;
  alt: string;
};

export function galleryPath(folder: string, filename: string): string {
  if (!folder) return \`/gallery/\${encodeURIComponent(filename)}\`;
  return \`/gallery/\${encodeURIComponent(folder)}/\${encodeURIComponent(filename)}\`;
}

export const galleryCategories = [
  "All",
  ${categories.map((c) => `"${c}"`).join(",\n  ")},
] as const;

export const galleryPhotos: GalleryPhoto[] = ${JSON.stringify(items, null, 2)};

/** Home page gallery strip */
export const homeGalleryPreview: GalleryPhoto[] = ${JSON.stringify(homeGalleryPreview)};

export const siteImages = ${JSON.stringify(siteImages, null, 2)} as const;
`;

const outPath = path.join(__dirname, "..", "lib", "gallery-images.ts");
fs.writeFileSync(outPath, fileContent);
console.log(`Wrote ${items.length} photos to ${outPath}`);
