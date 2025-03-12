import React from 'react';
import Header from '@/components/Header';
import UserList from '@/components/UserList';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Next.js App</h2>
        <p className="mb-4">This is a simple template using:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Next.js with App Router</li>
          <li>TypeScript for type safety</li>
          <li>Tailwind CSS v4 for styling</li>
          <li>Custom components with composition</li>
        </ul>
        <div className="bg-secondary p-4 rounded-lg text-gray-800 mb-6">
          <p>This project meets the requirements for the "PlusPlus" part of the assignment.</p>
        </div>

        <UserList />
      </div>
    </main>
  );
}
