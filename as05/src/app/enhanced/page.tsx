import { Suspense } from 'react';
import DataLoader from '@/components/DataLoader';
import SlowComponent from '@/components/SlowComponent';
import { UserData } from '@/lib/types';
import Link from 'next/link';

const sampleUser: UserData = {
  name: 'Anna Beispiel',
  email: 'anna.beispiel@example.com',
  role: 'user',
  isActive: true,
  lastActive: new Date(),
  loginCount: 15
};

export default function EnhancedPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Enhanced Suspense Demo</h1>

      <div className="w-full max-w-2xl space-y-8">
        <div className="p-6 border rounded-lg bg-white shadow-md">
          <h2 className="text-2xl font-semibold mb-4">UserData Interface Example</h2>
          <div className="space-y-2">
            <p><strong>Name (string):</strong> {sampleUser.name}</p>
            <p><strong>Email (string):</strong> {sampleUser.email}</p>
            <p><strong>Role (union type):</strong> {sampleUser.role}</p>
            <p><strong>Active Status (boolean):</strong> {sampleUser.isActive ? 'Yes' : 'No'}</p>
            <p><strong>Last Active (Date):</strong> {sampleUser.lastActive.toLocaleString()}</p>
            <p><strong>Login Count (number):</strong> {sampleUser.loginCount}</p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            This demonstrates a TypeScript interface with 6 member variables of different types.
          </p>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Suspense Example 1: Data Fetching</h2>
          <Suspense fallback={<div className="p-4 bg-gray-100 rounded animate-pulse">Loading user data...</div>}>
            <DataLoader />
          </Suspense>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Suspense Example 2: Slow Component</h2>
          <Suspense fallback={<div className="p-4 bg-gray-100 rounded animate-pulse">Loading slow component...</div>}>
            <SlowComponent />
          </Suspense>
        </div>

        <div className="py-4">
          <Link href="/" className="text-blue-500 hover:underline">← Back to Basic Example</Link>
        </div>
      </div>
    </main>
  );
}
