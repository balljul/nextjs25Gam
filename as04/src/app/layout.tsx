import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Next.js Assignment Demo',
  description: 'A demonstration of Next.js features for the assignment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-gray-800 text-white p-4 mt-auto">
            <div className="container mx-auto text-center">
              <p>© {new Date().getFullYear()} Next.js Assignment AS04</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
