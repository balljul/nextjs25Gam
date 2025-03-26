'use client';

import Link from "next/link";
import { useState } from "react";

export default function ClientNavigation() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Client Component Navigation</h2>
      <p className="mb-2">This is a client component with state: {clickCount} clicks</p>
      <button
        onClick={() => setClickCount(prev => prev + 1)}
        className="bg-orange-500 text-white px-3 py-1 rounded mb-4 hover:bg-orange-600"
      >
        Click me
      </button>

      <div className="flex flex-wrap gap-2">
        <Link
          href="/server-component"
          className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
        >
          Server Component
        </Link>
        <Link
          href="/swr-demo"
          className="bg-purple-500 text-white px-3 py-2 rounded hover:bg-purple-600"
        >
          SWR Demo
        </Link>
        <Link
          href="/router-demo"
          className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
        >
          Router Demo
        </Link>
        <Link
          href="/redirect-demo"
          className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
        >
          Redirect Demo
        </Link>
        <Link
          href="/api-client-demo"
          className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600"
        >
          API Client Demo
        </Link>
        <Link
          href="/api-server-demo"
          className="bg-pink-500 text-white px-3 py-2 rounded hover:bg-pink-600"
        >
          API Server Demo
        </Link>
      </div>
    </div>
  );
}
