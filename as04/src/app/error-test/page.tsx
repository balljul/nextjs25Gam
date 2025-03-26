'use client';

import { useState } from 'react';

export default function ErrorTest() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('This is a deliberate error for testing error handling!');
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Error Handling Test</h1>
      <p className="mb-6">
        This page allows you to test the error handling component by deliberately triggering an error.
      </p>
      <button
        onClick={() => setShouldError(true)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Trigger Error
      </button>


    </div>
  );
}
