import { getTranslations } from '@/lib/getTranslations';

interface PageProps {
  params: { lang: string };
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = params;
  const t = getTranslations(lang);
  return (
    <div>
      <h1 className="text-4xl font-bold">{t.contact.title}</h1>
      <ul className="mt-6 space-y-2">
        <li>
          Mail:{' '}
          <a
            href={`mailto:${t.contact.email}`}
            className="text-primary hover:underline"
          >
            {t.contact.email}
          </a>
        </li>
        <li>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/juliusball"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {t.contact.linkedin}
          </a>
        </li>
        <li>
          GitHub:{' '}
          <a
            href="https://github.com/balljul"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {t.contact.github}
          </a>
        </li>
      </ul>
    </div>
  );
}