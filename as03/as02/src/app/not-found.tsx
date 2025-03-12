import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-xl text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 inline-block"
      >
        Go Back Home
      </Link>
    </div>
  );
}
