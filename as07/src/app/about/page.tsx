"use client";

import { useI18n } from "@/lib/i18n/context";

export default function About() {
  const { t } = useI18n();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">{t.about.title}</h1>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">{t.about.who.title}</h2>
        <p className="mb-4">
          {t.about.who.p1}
        </p>
        <p className="mb-4">
          {t.about.who.p2}
        </p>
        <p>
          {t.about.who.p3}
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">{t.about.education.title}</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">{t.about.education.school1.title}</h3>
            <p className="text-indigo-500">{t.about.education.school1.period}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{t.about.education.school2.title}</h3>
            <p className="text-indigo-500">{t.about.education.school2.period}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{t.about.education.school3.title}</h3>
            <p className="text-indigo-500">{t.about.education.school3.period}</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">{t.about.skills.title}</h2>

        <h3 className="text-xl font-semibold mb-2">{t.about.skills.languages}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">PHP (Laravel, Livewire)</div>
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">SQL</div>
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">JavaScript</div>
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">HTMX</div>
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">Bash</div>
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">Lua</div>
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">Rust</div>
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">Arduino C++</div>
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">Google Apps Script</div>
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">Python</div>
        </div>

        <h3 className="text-xl font-semibold mb-2">{t.about.skills.tools}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">Linux (Debian & Arch)</div>
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">NeoVim</div>
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">Figma</div>
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">GitHub</div>
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">Docker & Docker Compose</div>
        </div>

        <h3 className="text-xl font-semibold mb-2">{t.about.skills.foreign}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-md text-center">English (B2-C1)</div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">{t.about.certificates.title}</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>{t.about.certificates.cert1}</li>
          <li>{t.about.certificates.cert2}</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">{t.experience.title}</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Team Lead</h3>
            <p className="text-indigo-500 mb-2">Software Development Team • Since January 2024</p>
            <p>Managing a team of up to 4 developers, overseeing project planning, code reviews, and ensuring timely delivery of high-quality software solutions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{t.experience.job1.title}</h3>
            <p className="text-indigo-500 mb-2">{t.experience.job1.company} • {t.experience.job1.period}</p>
            <p>{t.experience.job1.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{t.experience.job2.title}</h3>
            <p className="text-indigo-500 mb-2">{t.experience.job2.company} • {t.experience.job2.period}</p>
            <p>{t.experience.job2.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{t.experience.job3.title}</h3>
            <p className="text-indigo-500 mb-2">{t.experience.job3.company} • {t.experience.job3.period}</p>
            <p>{t.experience.job3.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{t.experience.job4.title}</h3>
            <p className="text-indigo-500 mb-2">{t.experience.job4.company} • {t.experience.job4.period}</p>
            <p>{t.experience.job4.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{t.experience.job5.title}</h3>
            <p className="text-indigo-500 mb-2">{t.experience.job5.company} • {t.experience.job5.period}</p>
            <p>{t.experience.job5.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{t.experience.job6.title}</h3>
            <p className="text-indigo-500 mb-2">{t.experience.job6.company} • {t.experience.job6.period}</p>
            <p>{t.experience.job6.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
