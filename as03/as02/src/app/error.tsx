'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled error:', error);
  }, [error]);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-red-700 mb-4">Something went wrong!</h2>
        <p className="mb-4 text-gray-700">
          An unexpected error has occurred. Our team has been notified.
        </p>
        {error.message && (
          <div className="bg-white p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
            <p className="text-red-600">{error.message}</p>
            {error.digest && <p className="text-gray-500 mt-2">Error ID: {error.digest}</p>}
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => reset()}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Try again
          </button>
          <Link
            href="/"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 text-center"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
