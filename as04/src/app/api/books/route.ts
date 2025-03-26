import { NextResponse } from 'next/server';

const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction" },
  { id: 2, title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction" },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932, genre: "Dystopian" },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Fiction" }
];

export async function GET() {
  return NextResponse.json({ books });
}
