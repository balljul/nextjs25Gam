'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ClientInServerProps {
  initialCount: number;
  serverMessage: string;
}

export default function ClientInServer({ initialCount, serverMessage }: ClientInServerProps) {
  const [count, setCount] = useState(initialCount);
  const [clientTime, setClientTime] = useState<string>('');

  useEffect(() => {
    // Set the initial client time
    setClientTime(new Date().toLocaleTimeString());

    // Update the time every second
    const timer = setInterval(() => {
      setClientTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-orange-50 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Client Component Section</h2>
      <p className="mb-4">This content is interactive and runs in the browser:</p>

      <div className="bg-white p-4 rounded border border-orange-200 mb-4">
        <p className="mb-2"><strong>Message from server:</strong> {serverMessage}</p>
        <p className="mb-4"><strong>Client time:</strong> {clientTime}</p>

        <div className="flex items-center gap-4 mb-2">
          <span className="font-semibold">Counter: {count}</span>
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            -
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            +
          </button>
          <button
            onClick={() => setCount(initialCount)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link
          href="/"
          className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
        >
          Home
        </Link>
        <Link
          href="/server-component"
          className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
        >
          Server Component
        </Link>
        <Link
          href="/client-component"
          className="bg-orange-500 text-white px-3 py-2 rounded hover:bg-orange-600"
        >
          Client Component
        </Link>
      </div>
    </div>
  );
}
