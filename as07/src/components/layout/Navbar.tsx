"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { translations } from "@/lib/i18n/translations";

export default function Navbar({ locale = "en" }: { locale?: string }) {
  const pathname = usePathname();
  const t = translations[locale as "en" | "de"] || translations.en;

  const pathWithoutLocale = pathname.replace(/^\/(en|de)/, '') || '/';

  const switchLocale = (newLocale: string) => {
    return `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href={`/${locale}`} className="text-xl font-bold">Julius Ball</Link>
          <div className="flex items-center gap-6">
            <Link href={`/${locale}`} className="hover:text-indigo-200 transition-colors">
              {t.nav.home}
            </Link>
            <Link href={`/${locale}/about`} className="hover:text-indigo-200 transition-colors">
              {t.nav.about}
            </Link>
            <Link href={`/${locale}/projects`} className="hover:text-indigo-200 transition-colors">
              {t.nav.projects}
            </Link>
            <Link href={`/${locale}/contact`} className="hover:text-indigo-200 transition-colors">
              {t.nav.contact}
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href={switchLocale('en')}
                className={`px-2 py-1 text-sm rounded ${
                  locale === "en"
                    ? "bg-indigo-200 dark:bg-indigo-800 font-medium text-indigo-900 dark:text-white"
                    : "bg-transparent"
                }`}
              >
                EN
              </Link>
              <span className="text-sm text-slate-400">|</span>
              <Link
                href={switchLocale('de')}
                className={`px-2 py-1 text-sm rounded ${
                  locale === "de"
                    ? "bg-indigo-200 dark:bg-indigo-800 font-medium text-indigo-900 dark:text-white"
                    : "bg-transparent"
                }`}
              >
                DE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
