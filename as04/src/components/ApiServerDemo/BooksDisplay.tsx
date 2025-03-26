async function getBooksData() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  await new Promise(resolve => setTimeout(resolve, 2000));

  const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction" },
    { id: 2, title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction" },
    { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932, genre: "Dystopian" },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Fiction" }
  ];

  return books;
}

export default async function BooksDisplay() {
  const books = await getBooksData();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-blue-100">
        <h2 className="text-2xl font-bold">Books (Server-side Fetched)</h2>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genre</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {books.map((book) => (
            <tr key={book.id}>
              <td className="px-6 py-4 whitespace-nowrap">{book.id}</td>
              <td className="px-6 py-4 whitespace-nowrap font-medium">{book.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.year}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
