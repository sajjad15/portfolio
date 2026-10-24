import { motion } from "framer-motion";
import { Database, LayoutTemplate, Server, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";
import { skillGroups, type SkillGroup } from "../data/skills";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const icons: Record<SkillGroup["id"], typeof Server> = {
  frontend: LayoutTemplate,
  backend: Server,
  databases: Database,
  tools: Wrench,
};

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative py-24 md:py-32">
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
            {t("skills.label")}
          </span>

          <h2 className="mt-6 text-4xl font-black leading-[1.25] tracking-tight md:text-6xl">
            {t("skills.title")}
          </h2>

          <p className="mt-6 text-lg leading-loose text-muted">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        {/* البطاقات */}
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.id];
            const featured = group.id === "frontend";
            const fullWidth = group.id === "frontend" || group.id === "tools";

            let itemsGrid = "sm:grid-cols-1";
            if (featured) {
              itemsGrid = "sm:grid-cols-2 lg:grid-cols-3";
            } else if (group.id === "tools") {
              itemsGrid = "sm:grid-cols-2 lg:grid-cols-4";
            }

            return (
              <motion.div
                key={group.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-[2rem] p-7 md:p-8 ${
                  featured
                    ? "bg-accent text-accent-fg"
                    : "border border-border bg-surface"
                } ${fullWidth ? "md:col-span-2" : ""}`}
              >
                {featured && (
                  <div className="absolute -top-14 -end-14 h-48 w-48 rounded-full bg-white/20" />
                )}

                {/* رأس البطاقة */}
                <div className="relative flex items-center gap-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      featured ? "bg-white/20" : "bg-accent/15 text-accent"
                    }`}
                  >
                    <Icon size={24} />
                  </span>
                  <h3 className="text-xl font-extrabold md:text-2xl">
                    {t(group.titleKey)}
                  </h3>
                </div>

                {/* المهارات */}
                <ul className={`relative mt-8 grid gap-3 ${itemsGrid}`}>
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className={`rounded-2xl p-4 ${
                        featured
                          ? "bg-white/15"
                          : "border border-border bg-bg"
                      }`}
                    >
                      <p dir="ltr" className="text-start font-bold">
                        {item.name}
                      </p>
                      <p
                        className={`mt-1 text-sm leading-relaxed ${
                          featured ? "opacity-85" : "text-muted"
                        }`}
                      >
                        {t(item.descKey)}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}