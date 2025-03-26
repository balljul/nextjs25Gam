'use client';

import useSWR from 'swr';
import ClientNavigation from '@/components/ClientNavigation/ClientNavigation';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function SwrDemo() {
  const { data, error, isLoading } = useSWR('/api/products', fetcher);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">SWR Data Fetching Demo</h1>
      <p className="mb-6">
        This component demonstrates using SWR to fetch data from an API. The data is automatically cached and refreshed.
      </p>

      {isLoading && (
        <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-6">
          <p className="text-xl font-semibold">Loading products...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>Error loading products: {error.message}</p>
        </div>
      )}

      {data && !error && (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <h2 className="text-2xl font-bold mb-4">Products (via SWR)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.products.map((product: Product) => (
              <div key={product.id} className="border rounded p-4 hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-blue-600 font-medium mb-2">€{product.price.toFixed(2)}</p>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <ClientNavigation />
    </div>
  );
}
