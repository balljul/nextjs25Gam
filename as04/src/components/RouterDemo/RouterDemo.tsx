'use client';

import { useRouter } from "next/navigation";
import ServerNavigation from "@/components/ServerNavigation/ServerNavigation";

export default function RouterDemo() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Router Navigation Demo</h1>
      <p className="mb-6">
        This component demonstrates the use of the useRouter hook for programmatic navigation.
      </p>

      <div className="bg-yellow-100 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-2">useRouter Navigation</h2>
        <p className="mb-4">Click the buttons below to navigate using the useRouter hook:</p>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleNavigation('/')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation('/server-component')}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Server Component
          </button>
          <button
            onClick={() => handleNavigation('/client-component')}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Client Component
          </button>
          <button
            onClick={() => handleNavigation('/swr-demo')}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            SWR Demo
          </button>
        </div>
      </div>

      <ServerNavigation />
    </div>
  );
}
