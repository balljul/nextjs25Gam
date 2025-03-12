import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-yellow-700 mb-4">Product Not Found</h2>
        <p className="mb-6 text-gray-700">
          Sorry, the product you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/products"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 inline-block"
        >
          Browse All Products
        </Link>
      </div>
    </div>
  );
}
