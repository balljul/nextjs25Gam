import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { I18nProvider } from "@/lib/i18n/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julius Ball - Portfolio",
  description: "Personal portfolio of Julius Ball, a student and full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50`}>
        <I18nProvider>
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </I18nProvider>
      </body>
    </html>
  );
}
