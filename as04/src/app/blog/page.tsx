import Link from 'next/link';

const posts = [
  {
    id: 1,
    slug: 'hello-world',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn the basics of Next.js and how to create your first app with TypeScript and Tailwind CSS.',
    date: 'March 10, 2025',
    category: 'Technology'
  },
  {
    id: 2,
    slug: 'advanced-routing',
    title: 'Advanced Routing in Next.js',
    excerpt: 'Dive deep into Next.js routing capabilities including dynamic routes, catch-all routes, and more.',
    date: 'March 8, 2025',
    category: 'Technology'
  },
  {
    id: 3,
    slug: 'styling-nextjs',
    title: 'Styling in Next.js Applications',
    excerpt: 'Explore different styling approaches in Next.js from CSS Modules to Tailwind CSS.',
    date: 'March 5, 2025',
    category: 'Design'
  }
];

export default function BlogIndex() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white p-6 rounded-lg shadow-sm">
            <Link href={`/blog/posts/${post.slug}`}>
              <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">{post.title}</h2>
            </Link>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.category}</span>
            </div>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link href={`/blog/posts/${post.slug}`} className="text-blue-500 hover:text-blue-700">
              Read more →
            </Link>
          </article>
        ))}
      </div>


    </div>
  );
}
