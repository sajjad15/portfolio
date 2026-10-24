import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

/* أيقونة GitHub مدمجة (لأن lucide-react لا تحتوي عليها في الإصدارات الحديثة) */
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(projects[0].id);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* العنوان */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {t("projects.label")}
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.25] tracking-tight md:text-6xl">
            {t("projects.title")}
          </h2>

          <p className="mt-6 text-lg leading-loose text-muted">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* قائمة المشاريع */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 border-b border-border"
        >
          {projects.map((project, index) => {
            const isOpen = openId === project.id;
            const number = String(index + 1).padStart(2, "0");

            return (
              <div key={project.id} className="border-t border-border">
                {/* السطر القابل للضغط */}
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : project.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-4 py-7 text-start md:gap-8 md:py-9"
                >
                  <span
                    dir="ltr"
                    className="w-10 shrink-0 text-sm font-bold tracking-widest text-accent"
                  >
                    {number}
                  </span>

                  <span
                    className={`flex-1 text-3xl font-black leading-[1.35] tracking-tight transition-all duration-300 md:text-6xl ${
                      isOpen
                        ? "text-accent"
                        : "group-hover:translate-x-2 group-hover:text-accent rtl:group-hover:-translate-x-2"
                    }`}
                  >
                    {project.name}
                  </span>

                  <span
                    dir="ltr"
                    className="hidden text-sm text-muted lg:block"
                  >
                    {project.tech.slice(0, 2).join(" · ")}
                  </span>

                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-accent bg-accent text-accent-fg"
                        : "border-border group-hover:border-accent"
                    }`}
                  >
                    <Plus size={22} />
                  </span>
                </button>

                {/* التفاصيل */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 ps-14 md:ps-[4.5rem]">
                        <p className="max-w-3xl leading-loose text-muted">
                          {t(project.descKey)}
                        </p>

                        <ul dir="ltr" className="mt-6 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-8 flex flex-wrap gap-3">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition hover:opacity-90"
                          >
                            {t("projects.live")}
                            <ArrowUpRight
                              size={18}
                              className="rtl:-scale-x-100"
                            />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-accent"
                          >
                            <GithubIcon size={18} />
                            {t("projects.github")}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}