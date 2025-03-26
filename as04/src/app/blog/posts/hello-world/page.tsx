import Link from 'next/link';

export default function BlogPost() {
  return (
    <article>
      <div className="mb-6">
        <Link href="/blog" className="text-blue-500 hover:text-blue-700">
          ← Back to all posts
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-3">Getting Started with Next.js</h1>
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span>March 10, 2025</span>
        <span className="mx-2">•</span>
        <span>Technology</span>
      </div>

      <div className="prose max-w-none">
        <p className="mb-4">
          Next.js has emerged as one of the most popular React frameworks for building modern web applications.
          Its features like server-side rendering, static site generation, and simplified routing make it a
          powerful tool for developers.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why Next.js?</h2>
        <p className="mb-4">
          Next.js provides an intuitive and powerful way to build React applications with many features built-in:
        </p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li className="mb-2">Server-side rendering for improved performance and SEO</li>
          <li className="mb-2">Automatic code splitting for faster page loads</li>
          <li className="mb-2">Simple file-based routing</li>
          <li className="mb-2">Built-in API routes</li>
          <li className="mb-2">Support for TypeScript and modern JavaScript features</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
        <p className="mb-4">
          Creating a new Next.js project is straightforward:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>
{`npx create-next-app@latest my-next-app
cd my-next-app
npm run dev`}
          </code>
        </pre>

        <p>
          This blog post is part of a demonstration of the different layouts feature in Next.js,
          showing how we can apply specific layouts to different sections of our website.
        </p>
      </div>
    </article>
  );
}
