'use client';

import { useState } from 'react';
import ServerNavigation from '@/components/ServerNavigation/ServerNavigation';

export default function ErrorDemoPage() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('This is a deliberate error for testing the error component!');
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Error Handling Demo</h1>
      <p className="mb-6">
        This page allows you to test the error handling component by deliberately triggering an error.
      </p>

      <div className="bg-yellow-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-2">Trigger an Error</h2>
        <p className="mb-4">
          Click the button below to deliberately trigger an error. This will activate the error boundary.
        </p>
        <button
          onClick={() => setShouldError(true)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Trigger Error
        </button>
      </div>

      <ServerNavigation />
    </div>
  );
}
