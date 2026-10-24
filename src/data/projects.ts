export interface Project {
  id: "vortex" | "mrn" | "kai" | "yrmin";
  /** اسم المشروع (يبقى كما هو في اللغتين) */
  name: string;
  /** مفتاح الوصف في ملفات الترجمة */
  descKey: string;
  /** التقنيات (إنجليزية في اللغتين) */
  tech: string[];
  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: "vortex",
    name: "VORTEX",
    descKey: "projects.items.vortex",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Three Fiber",
      "Three.js",
      "Supabase",
      "Vercel",
    ],
    live: "https://vortex-games-app.vercel.app/",
    github: "https://github.com/sajjad15/vortex-games",
  },
  {
    id: "mrn",
    name: "مرن | mrn store",
    descKey: "projects.items.mrn",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript (ES Modules)",
      "Firebase Firestore",
      "Firebase Auth",
      "Firebase Hosting",
      "WhatsApp API",
    ],
    live: "https://mrn-store-a7687.web.app/",
    github: "https://github.com/sajjad15/mrn-store",
  },
  {
    id: "kai",
    name: "KAI Store",
    descKey: "projects.items.kai",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Sanity.io",
      "Vercel",
    ],
    live: "https://kai-store-alpha.vercel.app/",
    github: "https://github.com/sajjad15/kai-store",
  },
  {
    id: "yrmin",
    name: "Yrmin Garden | يرمين",
    descKey: "projects.items.yrmin",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Google Maps",
      "WhatsApp",
      "Cloudflare Pages",
    ],
    live: "https://yrmin.pages.dev/",
    github: "https://github.com/sajjad15/yrmin-garden/tree/main",
  },
];