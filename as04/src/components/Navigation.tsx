import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-xl font-bold mb-2 md:mb-0">Next.js Assignment Demo</div>
        <ul className="flex flex-wrap gap-4">
          <li><Link href="/" className="hover:text-blue-300">Home</Link></li>

          <li><Link href="/about" className="hover:text-blue-300">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
          <li><Link href="/products" className="hover:text-blue-300">Products</Link></li>

          <li><Link href="/server-component" className="hover:text-green-300">Server Component</Link></li>
          <li><Link href="/client-component" className="hover:text-blue-300">Client Component</Link></li>
          <li><Link href="/swr-demo" className="hover:text-purple-300">SWR Demo</Link></li>
          <li><Link href="/router-demo" className="hover:text-green-300">Router Demo</Link></li>
          <li><Link href="/redirect-demo" className="hover:text-red-300">Redirect Demo</Link></li>
          <li><Link href="/api-client-demo" className="hover:text-yellow-300">API Client</Link></li>
          <li><Link href="/api-server-demo" className="hover:text-pink-300">API Server</Link></li>
          <li><Link href="/server-prop-demo" className="hover:text-indigo-300">Server Prop</Link></li>
          <li><Link href="/server-with-client" className="hover:text-orange-300">Server+Client</Link></li>
          <li><Link href="/error-demo" className="hover:text-red-300">Error Demo</Link></li>
        </ul>
      </div>
    </nav>
  );
}
