"use client";

import { useI18n } from "@/lib/i18n/context";
import Link from "next/link";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)]">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-600">
        {t.home.title}
      </h1>
      <p className="text-xl max-w-2xl text-center mb-8">
        {t.home.subtitle}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-10">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-3 text-indigo-500">
            {t.home.services.web.title}
          </h2>
          <p>{t.home.services.web.description}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-3 text-indigo-500">
            {t.home.services.app.title}
          </h2>
          <p>{t.home.services.app.description}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-3 text-indigo-500">
            {t.home.services.devops.title}
          </h2>
          <p>{t.home.services.devops.description}</p>
        </div>
      </div>
      <Link
        href="/about"
        className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium"
      >
        {t.nav.about}
      </Link>
    </div>
  );
}
