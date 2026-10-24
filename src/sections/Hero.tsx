import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";
import CodeWindow from "../components/CodeWindow";
import Marquee from "../components/Marquee";

export default function Hero() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden">
      {/* الخلفية: شبكة + توهج */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="glow-blob -top-24 start-[-8%] h-80 w-80" />
        <div
          className="glow-blob end-[-6%] top-1/3 h-72 w-72"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      {/* المحتوى */}
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-36 md:pt-40">
        {/* حالة التوفر */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          {t("hero.available")}
        </motion.div>

        {/* الاسم العملاق */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`font-black tracking-tight text-[clamp(3.5rem,12vw,9rem)] ${
            isRTL ? "leading-[1.3]" : "leading-[1]"
          }`}
        >
          <span>{t("hero.firstName")}</span>{" "}
          <span className="gradient-text">{t("hero.lastName")}</span>
        </motion.h1>

        <div className="mt-12 grid items-center gap-14 md:grid-cols-2">
          {/* النص والأزرار */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-2xl font-bold md:text-3xl"
            >
              <span className="text-accent">{t("hero.greeting")}</span>{" "}
              {t("hero.role")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 max-w-md leading-relaxed text-muted"
            >
              {t("hero.tagline")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-semibold text-accent-fg transition hover:opacity-90"
              >
                {t("hero.cta")}
                <ArrowUpRight size={18} className="rtl:-scale-x-100" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3 font-semibold transition hover:border-accent"
              >
                <Mail size={18} />
                {t("hero.ctaSecondary")}
              </a>
            </motion.div>

            {/* الإحصائيات */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 flex gap-10"
            >
              <div>
                <p className="text-3xl font-extrabold">+6</p>
                <p className="text-sm text-muted">{t("hero.stats.projects")}</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold">+2</p>
                <p className="text-sm text-muted">{t("hero.stats.years")}</p>
              </div>
            </motion.div>
          </div>

          {/* نافذة الكود */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <CodeWindow />
          </motion.div>
        </div>
      </div>

      {/* الشريط المتحرك */}
      <Marquee />
    </section>
  );
}