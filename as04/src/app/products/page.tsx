import Navigation from "@/components/Navigation";
import Link from "next/link";

const products = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Smartphone", price: 699.99 },
  { id: 3, name: "Headphones", price: 149.99 },
  { id: 4, name: "Tablet", price: 349.99 },
  { id: 5, name: "Smartwatch", price: 199.99 }
];

export default function Products() {
  return (
    <main>
      <Navigation />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <p className="mb-6">
          Browse our selection of products. Click on a product to see more details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">€{product.price.toFixed(2)}</p>
              <Link
                href={`/products/${product.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
