import { initReactI18next } from "react-i18next";
import i18next, { TOptions } from "i18next";
import english from "./en.json";
import languageDetector from "i18next-browser-languagedetector";

export type TransKey = keyof typeof english;

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: english },
    },
    fallbackLng: "en",
    returnNull: false,
    interpolation: { escapeValue: false },
  });

export function translate(key: TransKey, options?: TOptions): string {
  return i18next.t(key, options);
}

export default i18next;
