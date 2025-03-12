'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export default function ProductApi() {
  const [productId, setProductId] = useState<string>('');
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchProduct() {
    if (!productId || isNaN(parseInt(productId))) {
      setError('Please enter a valid product ID (1-5)');
      return;
    }

    setLoading(true);
    setError(null);
    setProduct(null);

    try {
      const response = await fetch(`/api/products/${productId}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch product');
      }

      setProduct(data.product);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <Navigation />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">API with Path Parameter</h1>
        <p className="mb-6">
          This page demonstrates an API route with a path parameter. Enter a product ID (1-5) to fetch data from <code className="bg-gray-100 px-2 py-1 rounded">/api/products/[id]</code>
        </p>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <input
            type="number"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Enter product ID (1-5)"
            min="1"
            max="5"
            className="border rounded px-4 py-2 w-full md:w-64"
          />
          <button
            onClick={fetchProduct}
            disabled={loading}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? 'Loading...' : 'Fetch Product'}
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <p>{error}</p>
          </div>
        )}

        {product && (
          <div className="bg-white border rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-xl text-blue-600 font-semibold mb-4">€{product.price.toFixed(2)}</p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p>{product.description}</p>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
