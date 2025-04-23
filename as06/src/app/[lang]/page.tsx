interface PageProps {
  params: { lang: string };
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = params;
  return (
    <div className="max-w-3xl mx-auto p-8 space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-bold">Julius Ball</h1>
        <p className="mt-2 text-xl text-gray-600 dark:text-gray-400">Curriculum Vitae</p>
      </header>
      <section>
        <h2 className="text-2xl font-semibold text-primary border-b border-primary pb-1">
          Contacts &amp; Social Media:
        </h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>+43 660 6149774</li>
          <li>www.juliusball.com</li>
          <li>contact@juliusball.com</li>
          <li>github.com/balljul</li>
          <li>linkedin.com/in/juliusball</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-primary border-b border-primary pb-1">
          Education:
        </h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Volksschule Treffen | 2013 - 2017</li>
          <li>Peryugymnasium Villach | 2017 - 2021</li>
          <li>HTL Villach IT | since 2021</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-primary border-b border-primary pb-1">
          Personal Profile:
        </h2>
        <p className="mt-2">
          I am a 17 year old student at HTBLuVA Villach IT. My interest in Computers sparked when I was 12
          years old. It began with simple programming and PC building. Today I aspire to become a full
          stack developer.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-primary border-b border-primary pb-1">
          My Career:
        </h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Great Big Value GmbH | Internship, July 2021 – Researching Contact Data
          </li>
          <li>
            Great Big Value GmbH | Data Research, Aug 2021 – Nov 2022 – Researching Data
          </li>
          <li>
            Pixelpoint multimedia werbe GmbH | Internship, Aug 2022 – Sep 2022 – Web Development,
            Design, Cyber Security
          </li>
          <li>
            Great Big Value GmbH | Developer, Sep 2022 – Jun 2023 – Development of Tools using Google
            Apps Script
          </li>
          <li>
            Pixelpoint multimedia werbe GmbH | Internship, Jul 2023 – Aug 2023 – Web Development,
            Developing Customer Websites with WordPress, Adobe XD, Docker &amp; Docker Compose,
            GitHub
          </li>
          <li>
            Great Big Value GmbH | Full Stack Developer, since Aug 2023 – Figma Design of a full
            application, App Development with Laravel &amp; Livewire, Database Design, GitHub, Docker
            Compose
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-primary border-b border-primary pb-1">
          Certificates:
        </h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Cisco Introduction to Cyber Security</li>
          <li>W3Schools PHP Certificate</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-primary border-b border-primary pb-1">
          Skills:
        </h2>
        <div className="mt-2 space-y-4">
          <div>
            <h3 className="text-xl font-medium text-secondary border-l-4 border-secondary pl-2">
              Languages:
            </h3>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>PHP (Laravel, Livewire)</li>
              <li>SQL</li>
              <li>JavaScript</li>
              <li>HTMX</li>
              <li>Bash</li>
              <li>Lua</li>
              <li>Rust</li>
              <li>Arduino C++</li>
              <li>Google Apps Script</li>
              <li>Python</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-secondary border-l-4 border-secondary pl-2">
              Systems &amp; Tools:
            </h3>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Linux (Debian &amp; Arch Linux)</li>
              <li>NeoVim</li>
              <li>Figma</li>
              <li>GitHub</li>
              <li>Docker &amp; Docker Compose</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-secondary border-l-4 border-secondary pl-2">
              Foreign Languages:
            </h3>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>English (B2 - C1)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}