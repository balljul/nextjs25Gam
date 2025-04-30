"use client";
import Link from "next/link";
import { translations as allTranslations } from "@/lib/i18n/translations";

type Translations = typeof allTranslations.en;

export default function HomeContent({
  translations,
  locale
}: {
  translations: Translations;
  locale: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)]">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-600">
        {translations.home.title}
      </h1>
      <p className="text-xl max-w-2xl text-center mb-8">
        {translations.home.subtitle}
      </p>
      {/* Rest of component */}
    </div>
  );
}
