import Navigation from "@/components/Navigation";
import Link from "next/link";
import { notFound } from "next/navigation";

const products = [
  { id: 1, name: "Laptop", price: 999.99, description: "Powerful laptop with the latest processor, 16GB RAM, and 512GB SSD." },
  { id: 2, name: "Smartphone", price: 699.99, description: "Latest smartphone with a stunning camera and all-day battery life." },
  { id: 3, name: "Headphones", price: 149.99, description: "Wireless noise-canceling headphones with premium sound quality." },
  { id: 4, name: "Tablet", price: 349.99, description: "Lightweight tablet perfect for productivity and entertainment." },
  { id: 5, name: "Smartwatch", price: 199.99, description: "Track your fitness and stay connected with this feature-packed smartwatch." }
];

export default function ProductDetail({ params }: { params: { id: string } }) {

  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Navigation />
      <div className="container mx-auto p-6">
        <div className="mb-4">
          <Link href="/products" className="text-blue-500 hover:underline">
            ← Back to Products
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl text-blue-600 font-semibold mb-4">€{product.price.toFixed(2)}</p>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p>{product.description}</p>
          </div>

          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Add to Cart
          </button>
        </div>

        <div className="mt-8 bg-blue-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Dynamic Route</h2>
          <p>This page demonstrates a dynamic route with the product ID: {productId}</p>
          <p>URL pattern: /products/[id]</p>
        </div>
      </div>
    </main>
  );
}
