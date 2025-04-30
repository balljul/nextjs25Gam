
"use client";

import { useI18n } from "@/lib/i18n/context";

export default function Contact() {
  const { t } = useI18n();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">{t.contact.title}</h1>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">{t.contact.getInTouch.title}</h2>
        <p className="mb-6">
          {t.contact.getInTouch.description}
        </p>

        <div className="space-y-4">
          <div className="flex items-center">
            <span className="font-semibold w-24">{t.contact.email}:</span>
            <a href="mailto:contact@juliusball.com" className="text-indigo-600 hover:text-indigo-800 transition-colors">
              contact@juliusball.com
            </a>
          </div>

          <div className="flex items-center">
            <span className="font-semibold w-24">{t.contact.phone}:</span>
            <a href="tel:+436606149774" className="text-indigo-600 hover:text-indigo-800 transition-colors">
              +43 660 6149774
            </a>
          </div>

          <div className="flex items-center">
            <span className="font-semibold w-24">{t.contact.website}:</span>
            <a
              href="https://www.juliusball.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              www.juliusball.com
            </a>
          </div>

          <div className="flex items-center">
            <span className="font-semibold w-24">{t.contact.linkedin}:</span>
            <a
              href="https://www.linkedin.com/in/juliusball/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              linkedin.com/in/juliusball
            </a>
          </div>

          <div className="flex items-center">
            <span className="font-semibold w-24">{t.contact.github}:</span>
            <a
              href="https://github.com/balljul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              github.com/balljul
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
