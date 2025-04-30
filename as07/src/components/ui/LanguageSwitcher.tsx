"use client";

import { useI18n } from "@/lib/i18n/context";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useI18n();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 py-1 text-sm rounded ${
          language === "en"
            ? "bg-indigo-200 dark:bg-indigo-800 font-medium"
            : "bg-transparent"
        }`}
      >
        EN
      </button>
      <span className="text-sm text-slate-400">|</span>
      <button
        onClick={() => changeLanguage("de")}
        className={`px-2 py-1 text-sm rounded ${
          language === "de"
            ? "bg-indigo-200 dark:bg-indigo-800 font-medium"
            : "bg-transparent"
        }`}
      >
        DE
      </button>
    </div>
  );
}
