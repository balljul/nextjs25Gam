import { Suspense } from 'react';
import Link from 'next/link';
import DataLoader from '@/components/DataLoader';
import ProjectsLoader from '@/components/ProjectsLoader';
import { UserData } from '@/lib/types';

const sampleUser: UserData = {
  name: 'Anna Beispiel',
  email: 'anna.beispiel@example.com',
  role: 'user',
  isActive: true,
  lastActive: new Date(),
  loginCount: 15
};

export default function ApiEnhancedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 pt-12 pb-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-indigo-800 mb-4">
            API Enhanced Demo
          </h1>
          <p className="text-lg text-indigo-600">
            Using dynamic API URLs with React Suspense
          </p>
        </header>

        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-indigo-700 py-3 px-6">
              <h2 className="text-2xl font-semibold text-white">UserData Interface</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-indigo-500 font-medium">NAME (STRING)</p>
                  <p className="text-lg font-medium text-indigo-900">{sampleUser.name}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-500 font-medium">EMAIL (STRING)</p>
                  <p className="text-lg font-medium text-purple-900">{sampleUser.email}</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-indigo-500 font-medium">ROLE (UNION TYPE)</p>
                  <p className="text-lg font-medium text-indigo-900">{sampleUser.role}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-500 font-medium">ACTIVE STATUS (BOOLEAN)</p>
                  <p className="text-lg font-medium text-purple-900">
                    {sampleUser.isActive ?
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span> :
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Inactive
                      </span>
                    }
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-indigo-500 font-medium">LAST ACTIVE (DATE)</p>
                  <p className="text-lg font-medium text-indigo-900">{sampleUser.lastActive.toLocaleString()}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-500 font-medium">LOGIN COUNT (NUMBER)</p>
                  <p className="text-lg font-medium text-purple-900">{sampleUser.loginCount}</p>
                </div>
              </div>
            </div>
          </section>

          {/* API Data with Suspense */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-indigo-700 py-3 px-6">
              <h2 className="text-2xl font-semibold text-white">Dynamic API Projects</h2>
            </div>
            <div className="p-6">
              <Suspense fallback={
                <div className="bg-indigo-50 p-6 rounded-lg animate-pulse">
                  <div className="h-5 bg-indigo-200 rounded w-3/4 mb-4"></div>
                  <div className="h-24 bg-indigo-200 rounded w-full mb-3"></div>
                  <div className="h-24 bg-indigo-200 rounded w-full mb-3"></div>
                  <div className="h-24 bg-indigo-200 rounded w-full"></div>
                </div>
              }>
                <ProjectsLoader />
              </Suspense>
            </div>
          </section>

          {/* First Suspense usage with data fetching */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-purple-700 py-3 px-6">
              <h2 className="text-2xl font-semibold text-white">User Data Fetching</h2>
            </div>
            <div className="p-6">
              <Suspense fallback={
                <div className="bg-purple-50 p-6 rounded-lg animate-pulse">
                  <div className="h-5 bg-purple-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-purple-200 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-purple-200 rounded w-2/3"></div>
                </div>
              }>
                <DataLoader />
              </Suspense>
            </div>
          </section>

          <div className="flex justify-center pt-4 flex-wrap gap-2">
            <Link
              href="/tailwind-enhanced"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              ← Tailwind Enhanced Version
            </Link>
            <Link
              href="/enhanced"
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              ← Basic Enhanced Version
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              ← Simple Version
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
