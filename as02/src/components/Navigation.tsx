import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Next.js Routing Demo</div>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-300">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
          <li><Link href="/products" className="hover:text-blue-300">Products</Link></li>
          <li><Link href="/api-demo" className="hover:text-blue-300">API Demo</Link></li>
          <li><Link href="/product-api" className="hover:text-blue-300">Product API</Link></li>
        </ul>
      </div>
    </nav>
  );
}
