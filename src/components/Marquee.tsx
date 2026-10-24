import { Fragment } from "react";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Git",
  "Docker",
];

export default function Marquee() {
  /* القائمة تتكرر مرتين، والحركة تنقلها بمقدار النصف فيصير التكرار سلساً بلا انقطاع */
  const items = [...skills, ...skills];

  return (
    <div
      dir="ltr"
      aria-hidden="true"
      className="marquee relative overflow-hidden border-y border-border bg-surface/60 py-5 backdrop-blur"
    >
      <div className="marquee-track">
        {items.map((skill, i) => (
          <Fragment key={i}>
            <span className="px-6 text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
              {skill}
            </span>
            <span className="self-center text-xl text-accent sm:text-2xl">
              ✦
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}