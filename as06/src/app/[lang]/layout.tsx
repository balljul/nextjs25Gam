import Link from 'next/link';
import { ReactNode } from 'react';
import { getTranslations } from '@/lib/getTranslations';

interface LayoutProps {
  children: ReactNode;
  params: { lang: string };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang } = params;
  const t = getTranslations(lang);
  return (
    <>
      <nav className="bg-foreground text-background p-4">
        <ul className="flex gap-4">
          <li>
            <Link href={`/${lang}`}>{t.nav.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/skills`}>{t.nav.skills}</Link>
          </li>
          <li>
            <Link href={`/${lang}/projects`}>{t.nav.projects}</Link>
          </li>
          <li>
            <Link href={`/${lang}/contact`}>{t.nav.contact}</Link>
          </li>
          <li>
            <Link href={`/${lang === 'en' ? 'de' : 'en'}`}>{lang === 'en' ? 'DE' : 'EN'}</Link>
          </li>
        </ul>
      </nav>
      <main className="p-8">{children}</main>
    </>
  );
}