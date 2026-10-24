import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./locales/ar.json";
import en from "./locales/en.json";

export type Lang = "ar" | "en";

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "ar" || saved === "en") return saved;
  } catch {
    // تجاهل أخطاء التخزين
  }
  return navigator.language.startsWith("ar") ? "ar" : "en";
}

function applyDocumentLang(lang: string) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

const initialLang = getInitialLang();

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: ar },
    en: { translation: en },
  },
  lng: initialLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

applyDocumentLang(initialLang);
i18n.on("languageChanged", applyDocumentLang);

export default i18n;