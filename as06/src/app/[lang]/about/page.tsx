import { getTranslations } from '@/lib/getTranslations';

interface PageProps {
  params: { lang: string };
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = params;
  const t = getTranslations(lang);
  return (
    <div>
      <h1 className="text-4xl font-bold">{t.about.title}</h1>
      <p className="mt-4">{t.about.content}</p>
    </div>
  );
}