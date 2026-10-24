import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SocialIcon } from "../components/SocialIcons";
import { contactLinks, EMAIL, WHATSAPP_NUMBER } from "../data/contact";
import { useLanguage } from "../hooks/useLanguage";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const greeting = t("contact.waGreeting", {
      name: name.trim() || "...",
    });
    const text = `${greeting}\n\n${message.trim()}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section id="contact" className="relative overflow-hidden pt-24 md:pt-32">
      {/* خلفية: توهج */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="glow-blob bottom-0 start-[-10%] h-96 w-96" />
        <div
          className="glow-blob end-[-8%] top-10 h-80 w-80"
          style={{ animationDelay: "-7s" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* العنوان العملاق */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {t("contact.label")}
          </span>

          <h2
            className={`mt-6 font-black tracking-tight text-[clamp(2.75rem,9vw,7rem)] ${
              isRTL ? "leading-[1.3]" : "leading-[1.02]"
            }`}
          >
            <span className="block">{t("contact.titleLine1")}</span>
            <span className="gradient-text">{t("contact.titleLine2")}</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-loose text-muted">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="mt-14 grid items-start gap-6 md:grid-cols-2">
          {/* حبوب الروابط */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap"
          >
            {contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.id === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-4 py-3 text-sm font-semibold transition hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-accent-fg sm:gap-3 sm:px-6 sm:py-4 sm:text-base"
              >
                <SocialIcon name={link.id} size={20} />
                <span dir="ltr">{link.label}</span>
                <ArrowUpRight
                  size={16}
                  className="hidden opacity-0 transition group-hover:opacity-100 sm:block rtl:-scale-x-100"
                />
              </a>
            ))}

            <p className="col-span-2 mt-4 w-full text-center text-sm text-muted sm:text-start">
              {t("contact.emailLabel")}:{" "}
              <a
                href={`mailto:${EMAIL}`}
                dir="ltr"
                className="font-semibold text-fg underline decoration-accent underline-offset-4"
              >
                {EMAIL}
              </a>
            </p>
          </motion.div>

          {/* النموذج */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[2rem] border border-border bg-surface p-7 md:p-8"
          >
            <h3 className="text-xl font-extrabold">{t("contact.formTitle")}</h3>
            <p className="mt-2 text-sm text-muted">{t("contact.formHint")}</p>

            <label className="mt-6 block text-sm font-medium" htmlFor="c-name">
              {t("contact.nameLabel")}
            </label>
            <input
              id="c-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("contact.namePlaceholder")}
              required
              className="mt-2 w-full rounded-2xl border border-border bg-bg px-4 py-3 outline-none transition focus:border-accent"
            />

            <label
              className="mt-5 block text-sm font-medium"
              htmlFor="c-message"
            >
              {t("contact.messageLabel")}
            </label>
            <textarea
              id="c-message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("contact.messagePlaceholder")}
              required
              className="mt-2 w-full resize-none rounded-2xl border border-border bg-bg px-4 py-3 outline-none transition focus:border-accent"
            />

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-accent-fg transition hover:opacity-90"
            >
              <Send size={18} className="rtl:-scale-x-100" />
              {t("contact.send")}
            </button>
          </motion.form>
        </div>
      </div>

      {/* الفوتر */}
      <footer className="relative mt-24 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {t("hero.firstName")}{" "}
            {t("hero.lastName")} · {t("contact.footerRights")}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition hover:border-accent"
          >
            <ArrowUp size={16} />
            {t("contact.backToTop")}
          </button>
        </div>
      </footer>
    </section>
  );
}