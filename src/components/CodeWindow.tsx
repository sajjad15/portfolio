import { useEffect, useState } from "react";

interface Token {
  text: string;
  cls: string;
}

type Line = Token[];

/* محتوى النافذة: كل سطر مقسّم لقطع، ولكل قطعة لون */
const lines: Line[] = [
  [
    { text: "const ", cls: "text-pink-400" },
    { text: "developer", cls: "text-sky-300" },
    { text: " = {", cls: "text-zinc-300" },
  ],
  [
    { text: "  name", cls: "text-sky-300" },
    { text: ": ", cls: "text-zinc-400" },
    { text: '"Sajjad Mahdi"', cls: "text-amber-300" },
    { text: ",", cls: "text-zinc-400" },
  ],
  [
    { text: "  role", cls: "text-sky-300" },
    { text: ": ", cls: "text-zinc-400" },
    { text: '"Full-Stack Developer"', cls: "text-amber-300" },
    { text: ",", cls: "text-zinc-400" },
  ],
  [
    { text: "  stack", cls: "text-sky-300" },
    { text: ": [", cls: "text-zinc-400" },
    { text: '"React"', cls: "text-amber-300" },
    { text: ", ", cls: "text-zinc-400" },
    { text: '"Node"', cls: "text-amber-300" },
    { text: ", ", cls: "text-zinc-400" },
    { text: '"TS"', cls: "text-amber-300" },
    { text: "],", cls: "text-zinc-400" },
  ],
  [
    { text: "  available", cls: "text-sky-300" },
    { text: ": ", cls: "text-zinc-400" },
    { text: "true", cls: "text-emerald-400" },
    { text: ",", cls: "text-zinc-400" },
  ],
  [{ text: "};", cls: "text-zinc-300" }],
];

/* شارات التقنيات الطايرة حول النافذة */
const badges = [
  { label: "React", pos: "-top-5 -end-2 md:-end-6", delay: "0s" },
  { label: "TypeScript", pos: "top-1/2 -start-3 md:-start-10", delay: "1.2s" },
  { label: "Node.js", pos: "-bottom-5 end-8", delay: "2.1s" },
  { label: "Tailwind", pos: "-bottom-3 -start-2 md:-start-4", delay: "0.6s" },
];

const TOTAL_CHARS =
  lines.reduce(
    (sum, line) => sum + line.reduce((s, tok) => s + tok.text.length, 0),
    0
  ) +
  (lines.length - 1);

export default function CodeWindow() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(TOTAL_CHARS);
      return;
    }

    let interval: number | undefined;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setCount((prev) => {
          if (prev >= TOTAL_CHARS) {
            window.clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 38);
    }, 700);

    return () => {
      window.clearTimeout(start);
      if (interval) window.clearInterval(interval);
    };
  }, []);

  /* نحسب الجزء المكتوب من كل سطر، ومكان المؤشر */
  let remaining = count;
  let caretIndex = -1;

  const rows = lines.map((line, i) => {
    const tokens = line.map((tok) => {
      const take = Math.max(0, Math.min(tok.text.length, remaining));
      remaining -= take;
      return { text: tok.text.slice(0, take), cls: tok.cls };
    });

    if (caretIndex === -1 && remaining <= 0) {
      caretIndex = i;
    } else {
      remaining -= 1; // الانتقال للسطر التالي
    }

    return tokens;
  });

  if (caretIndex === -1) caretIndex = lines.length - 1;

  return (
    <div className="relative w-full max-w-md">
      {/* توهج خلف النافذة */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[2.5rem] bg-accent/25 blur-2xl"
      />

      {/* النافذة (دائماً من اليسار لليمين لأنها كود) */}
      <div
        dir="ltr"
        aria-hidden="true"
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f0f16] shadow-2xl shadow-black/30"
      >
        {/* شريط العنوان */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/90" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
          <span className="h-3 w-3 rounded-full bg-green-400/90" />
          <span className="ms-3 font-mono text-xs text-zinc-400">
            developer.ts
          </span>
        </div>

        {/* الكود */}
        <pre className="m-0 overflow-hidden p-5 font-mono text-[13px] leading-6 sm:text-sm">
          {rows.map((tokens, i) => (
            <div key={i} className="min-h-6 whitespace-pre">
              {tokens.map((tok, j) => (
                <span key={j} className={tok.cls}>
                  {tok.text}
                </span>
              ))}
              {i === caretIndex && <span className="caret" />}
            </div>
          ))}
        </pre>
      </div>

      {/* شارات التقنيات */}
      {badges.map((badge) => (
        <span
          key={badge.label}
          className={`float-y absolute z-10 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold shadow-lg ${badge.pos}`}
          style={{ animationDelay: badge.delay }}
        >
          {badge.label}
        </span>
      ))}
    </div>
  );
}