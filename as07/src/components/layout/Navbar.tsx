// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useI18n } from "@/lib/i18n/context";

export default function Navbar() {
  const { t } = useI18n();

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">Julius Ball</Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-indigo-200 transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/about" className="hover:text-indigo-200 transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/projects" className="hover:text-indigo-200 transition-colors">
              {t.nav.projects}
            </Link>
            <Link href="/contact" className="hover:text-indigo-200 transition-colors">
              {t.nav.contact}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
