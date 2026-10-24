import { motion } from "framer-motion";
import { Code2, Target, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-14 md:grid-cols-2">
          {/* النص */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {t("about.label")}
            </span>

            <h2 className="mt-6 text-4xl font-black leading-[1.25] tracking-tight md:text-6xl">
              {t("about.title")}
            </h2>

            <p className="mt-8 text-lg leading-loose text-muted">
              {t("about.p1")}
            </p>
            <p className="mt-5 text-lg leading-loose text-muted">
              {t("about.p2")}
            </p>
          </motion.div>

          {/* البطاقات */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* التخصص: بطاقة بنفسجية عريضة */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-[2rem] bg-accent p-7 text-accent-fg sm:col-span-2"
            >
              <div className="absolute -top-12 -end-12 h-40 w-40 rounded-full bg-white/20" />
              <Code2 size={30} className="relative" />
              <p className="relative mt-8 text-sm font-medium opacity-80">
                {t("about.cards.specialty.title")}
              </p>
              <p
                dir="ltr"
                className="relative mt-2 text-start text-2xl font-extrabold md:text-3xl"
              >
                {t("about.cards.specialty.value")}
              </p>
            </motion.div>

            {/* التركيز الحالي */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[2rem] border border-border bg-surface p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <Target size={24} />
              </span>
              <p className="mt-6 text-sm font-medium text-muted">
                {t("about.cards.focus.title")}
              </p>
              <p className="mt-2 text-lg font-bold leading-snug">
                {t("about.cards.focus.value")}
              </p>
            </motion.div>

            {/* أسلوب العمل */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-[2rem] border border-border bg-surface p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <ShieldCheck size={24} />
              </span>
              <p className="mt-6 text-sm font-medium text-muted">
                {t("about.cards.style.title")}
              </p>
              <p className="mt-2 text-lg font-bold leading-snug">
                {t("about.cards.style.value")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}