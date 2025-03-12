'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export default function ApiDemo() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        setError('Error loading products from API');
        setLoading(false);
        console.error(err);
      }
    }

    fetchProducts();
  }, []);

  return (
    <main>
      <Navigation />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">API Data Demo</h1>
        <p className="mb-6">
          This page fetches product data from our internal API at <code className="bg-gray-100 px-2 py-1 rounded">/api/products</code>
        </p>

        {loading && (
          <div className="text-center py-10">
            <p className="text-xl">Loading products...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 shadow-sm">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">€{product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mb-4">{product.description.substring(0, 100)}...</p>
                <Link
                  href={`/products/${product.id}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
