import { useTranslation } from "react-i18next";
import type { Lang } from "../i18n";

export function useLanguage() {
  const { i18n } = useTranslation();
  const lang: Lang = i18n.language === "ar" ? "ar" : "en";

  const setLang = (next: Lang) => {
    i18n.changeLanguage(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      // تجاهل أخطاء التخزين
    }
  };

  const toggleLang = () => setLang(lang === "ar" ? "en" : "ar");

  return {
    lang,
    dir: lang === "ar" ? ("rtl" as const) : ("ltr" as const),
    isRTL: lang === "ar",
    setLang,
    toggleLang,
  };
}