import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: "Laptop", price: 999.99, description: "Powerful laptop with the latest processor, 16GB RAM, and 512GB SSD." },
  { id: 2, name: "Smartphone", price: 699.99, description: "Latest smartphone with a stunning camera and all-day battery life." },
  { id: 3, name: "Headphones", price: 149.99, description: "Wireless noise-canceling headphones with premium sound quality." },
  { id: 4, name: "Tablet", price: 349.99, description: "Lightweight tablet perfect for productivity and entertainment." },
  { id: 5, name: "Smartwatch", price: 199.99, description: "Track your fitness and stay connected with this feature-packed smartwatch." }
];

export async function GET() {
  return NextResponse.json({ products });
}
