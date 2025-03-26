'use client';

import { useEffect, useState } from 'react';

export default function LoadingAnimation() {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev < 3 ? prev + 1 : 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-6">
      <div className="flex flex-col items-center justify-center min-h-40">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-8 border-blue-200 opacity-25 rounded-full"></div>
          <div className="absolute inset-0 border-t-8 border-blue-500 rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-lg font-semibold text-blue-800">
          Loading{'.'.repeat(dots)}
        </p>
      </div>

      <div className="mt-8 animate-pulse">
        <div className="h-6 bg-gray-200 rounded mb-4 w-1/3"></div>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="grid grid-cols-5 gap-4">
              <div className="h-4 bg-gray-200 rounded col-span-1"></div>
              <div className="h-4 bg-gray-200 rounded col-span-2"></div>
              <div className="h-4 bg-gray-200 rounded col-span-1"></div>
              <div className="h-4 bg-gray-200 rounded col-span-1"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
