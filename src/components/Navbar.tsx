import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../hooks/useLanguage";
import { navLinks } from "../data/navLinks";

export default function Navbar() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { toggleLang } = useLanguage();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(navLinks[0].id);

  // تصغير الـ Navbar + تحديد القسم الحالي عند التمرير
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 24);

      // إذا وصلنا لآخر الصفحة نفعّل آخر قسم (التواصل)
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;

      if (nearBottom) {
        setActive(navLinks[navLinks.length - 1].id);
        return;
      }

      // القسم الحالي = آخر قسم وصل أعلاه للخط الوهمي
      const line = window.innerHeight * 0.35;
      let current = navLinks[0].id;

      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= line) {
          current = link.id;
        }
      }

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={`mx-auto flex items-center justify-between rounded-full border border-border bg-surface/80 px-4 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "max-w-3xl py-2" : "max-w-5xl py-3"
        }`}
      >
        {/* الشعار */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-1 ps-2 text-lg font-extrabold"
        >
          SM<span className="text-accent">.</span>
        </a>

        {/* روابط الشاشات الكبيرة */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === link.id
                    ? "bg-accent text-accent-fg"
                    : "text-muted hover:text-fg"
                }`}
              >
                {t(link.labelKey)}
              </a>
            </li>
          ))}
        </ul>

        {/* أزرار اللغة والمظهر */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label={t("toggles.language")}
            className="flex h-10 items-center gap-2 rounded-full border border-border px-3 text-sm font-medium transition hover:border-accent"
          >
            <Languages size={16} />
            {t("toggles.langLabel")}
          </button>

          <button
            onClick={toggleTheme}
            aria-label={t("toggles.theme")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-accent"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* زر القائمة للجوال */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-fg md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* قائمة الجوال */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 flex max-w-5xl flex-col gap-1 rounded-3xl border border-border bg-surface/95 p-3 shadow-lg backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active === link.id
                      ? "bg-accent text-accent-fg"
                      : "text-fg hover:bg-bg"
                  }`}
                >
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}