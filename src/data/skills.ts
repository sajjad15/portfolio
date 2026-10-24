export interface SkillItem {
  /** اسم التقنية (إنجليزي في اللغتين) */
  name: string;
  /** مفتاح الوصف في ملفات الترجمة */
  descKey: string;
}

export interface SkillGroup {
  id: "frontend" | "backend" | "databases" | "tools";
  titleKey: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    titleKey: "skills.groups.frontend",
    items: [
      { name: "HTML5 & CSS3", descKey: "skills.items.html" },
      { name: "JavaScript (ES6+)", descKey: "skills.items.js" },
      { name: "React.js", descKey: "skills.items.react" },
      { name: "Next.js", descKey: "skills.items.next" },
      { name: "Tailwind CSS", descKey: "skills.items.tailwind" },
    ],
  },
  {
    id: "backend",
    titleKey: "skills.groups.backend",
    items: [
      { name: "Node.js & Express.js", descKey: "skills.items.node" },
      { name: "RESTful APIs", descKey: "skills.items.rest" },
      { name: "Auth & Authorization", descKey: "skills.items.auth" },
    ],
  },
  {
    id: "databases",
    titleKey: "skills.groups.databases",
    items: [
      { name: "SQL", descKey: "skills.items.sql" },
      { name: "NoSQL", descKey: "skills.items.nosql" },
      { name: "Database Design", descKey: "skills.items.dbdesign" },
    ],
  },
  {
    id: "tools",
    titleKey: "skills.groups.tools",
    items: [
      { name: "Git & GitHub", descKey: "skills.items.git" },
      { name: "Postman", descKey: "skills.items.postman" },
      { name: "Vite / Webpack", descKey: "skills.items.bundlers" },
      { name: "Deployment", descKey: "skills.items.deploy" },
    ],
  },
];