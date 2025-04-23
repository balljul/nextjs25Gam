import { getTranslations } from '@/lib/getTranslations';

interface PageProps {
  params: { lang: string };
}

export default async function SkillsPage({ params }: PageProps) {
  const { lang } = params;
  const t = getTranslations(lang);
  return (
    <div>
      <h1 className="text-4xl font-bold">{t.skills.title}</h1>
      <div className="mt-6 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold">Design</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Adobe XD</li>
            <li>Adobe Illustrator</li>
            <li>Font Awesome</li>
            <li>Canva</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Front-End</h2>
          <ul className="list-disc list-inside mt-2">
            <li>HTML</li>
            <li>Vanilla CSS</li>
            <li>LESS</li>
            <li>Scss and Sass</li>
            <li>Tailwind CSS</li>
            <li>Javascript</li>
            <li>Anime.js</li>
            <li>Bootstrap</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Back-End</h2>
          <ul className="list-disc list-inside mt-2">
            <li>PHP</li>
            <li>Laravel</li>
            <li>SQL</li>
            <li>Google Apps Script</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Database</h2>
          <ul className="list-disc list-inside mt-2">
            <li>MySQL</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Cybersecurity</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Linux</li>
            <li>Docker</li>
            <li>Hacking</li>
            <li>Network Building</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">System Programming</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Arduino C/C++</li>
            <li>Network Building</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Game Development</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Unity</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Graphics</h2>
          <ul className="list-disc list-inside mt-2">
            <li>GLSL</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Certificates</h2>
          <ul className="list-disc list-inside mt-2">
            <li>W3Schools PHP Certificate</li>
            <li>Cisco Introduction to Cybersecurity</li>
          </ul>
        </section>
      </div>
    </div>
  );
}