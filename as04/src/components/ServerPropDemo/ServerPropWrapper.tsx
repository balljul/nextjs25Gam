'use client';

import { useState } from 'react';
import { ReactNode } from 'react';

interface ServerPropWrapperProps {
  serverComponent: ReactNode;
  title: string;
}

export default function ServerPropWrapper({ serverComponent, title }: ServerPropWrapperProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="border rounded-lg shadow-md overflow-hidden mb-6">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-white text-purple-700 px-3 py-1 rounded-md hover:bg-gray-100"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      {isExpanded && (
        <div className="p-4 bg-white">
          {serverComponent}
        </div>
      )}

      <div className="bg-gray-100 p-4 text-sm">
        <p className="font-medium text-gray-600">
          This is a client component that accepts a server component as a prop.
          The server component is rendered server-side and passed to this client component.
        </p>
      </div>
    </div>
  );
}
