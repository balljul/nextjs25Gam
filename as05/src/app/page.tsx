import { Suspense } from 'react';
import DataLoader from '@/components/DataLoader';
import SlowComponent from '@/components/SlowComponent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Next.js Suspense Demo</h1>

      <div className="w-full max-w-2xl space-y-8">
        {/* First Suspense usage */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Suspense Example 1: Data Fetching</h2>
          <Suspense fallback={<div className="p-4 bg-gray-100 rounded animate-pulse">Loading user data...</div>}>
            <DataLoader />
          </Suspense>
        </div>

        {/* Second Suspense usage */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Suspense Example 2: Slow Component</h2>
          <Suspense fallback={<div className="p-4 bg-gray-100 rounded animate-pulse">Loading slow component...</div>}>
            <SlowComponent />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
