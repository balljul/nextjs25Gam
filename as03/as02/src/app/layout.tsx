import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Next.js Routing Project',
  description: 'A demonstration of Next.js routing capabilities',
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
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-gray-800 text-white p-4 mt-auto">
            <div className="container mx-auto text-center">
              <p>© {new Date().getFullYear()} Next.js Routing Demo</p>
              <p className="text-sm mt-1">This is a layout</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
