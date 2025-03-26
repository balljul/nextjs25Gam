import Link from 'next/link';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto p-6">
      <header className="mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-4xl font-bold text-center mb-2">Our Blog</h1>
        <p className="text-center text-gray-600 mb-6">Latest news, tutorials, and updates</p>
        <nav className="flex justify-center">
          <ul className="flex space-x-8">
            <li><Link href="/blog" className="text-blue-500 hover:text-blue-700">All Posts</Link></li>
            <li><Link href="/blog/category/technology" className="text-blue-500 hover:text-blue-700">Technology</Link></li>
            <li><Link href="/blog/category/design" className="text-blue-500 hover:text-blue-700">Design</Link></li>
            <li><Link href="/blog/category/business" className="text-blue-500 hover:text-blue-700">Business</Link></li>
            <li><Link href="/" className="text-blue-500 hover:text-blue-700">Back to Main Site</Link></li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        <main className="lg:w-2/3">
          {children}
        </main>

        <aside className="lg:w-1/3">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">About Our Blog</h2>
            <p className="text-gray-600 mb-4">
              Welcome to our blog where we share insights about web development, technology trends, and best practices.
            </p>
            <h3 className="text-lg font-semibold mb-2 mt-6">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Next.js</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">TypeScript</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Tailwind CSS</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Web Development</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
