import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Next.js Assignment as04</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Server & Client Components</h2>
          <p className="text-gray-600 mb-4">
            Examples of server components and client components with navigation using Link.
          </p>
          <div className="flex gap-2">
            <Link
              href="/server-component"
              className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
            >
              Server Component
            </Link>
            <Link
              href="/client-component"
              className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
            >
              Client Component
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Data Fetching</h2>
          <p className="text-gray-600 mb-4">
            Examples of data fetching with SWR and using API routes.
          </p>
          <div className="flex gap-2">
            <Link
              href="/swr-demo"
              className="bg-purple-500 text-white px-3 py-2 rounded hover:bg-purple-600"
            >
              SWR Demo
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

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Routing & Navigation</h2>
          <p className="text-gray-600 mb-4">
            Examples of routing with useRouter and redirect.
          </p>
          <div className="flex gap-2">
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
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Advanced Features</h2>
          <p className="text-gray-600 mb-4">
            Examples of advanced Next.js features.
          </p>
          <div className="flex gap-2">
            <Link
              href="/server-prop-demo"
              className="bg-indigo-500 text-white px-3 py-2 rounded hover:bg-indigo-600"
            >
              Server Prop Demo
            </Link>
            <Link
              href="/error-demo"
              className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
            >
              Error Demo
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">About This Project</h2>
        <p>This project showcases various Next.js features including:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Server Components & Client Components</li>
          <li>SWR for data fetching</li>
          <li>Dynamic API Routes</li>
          <li>Navigation with Link and useRouter</li>
          <li>Redirects</li>
          <li>Error Handling</li>
          <li>Tailwind CSS 4 for styling</li>
        </ul>
      </div>
    </main>
  );
}
