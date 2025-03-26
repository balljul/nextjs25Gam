import { Suspense } from 'react';
import ServerNavigation from '@/components/ServerNavigation/ServerNavigation';
import BooksDisplay from './BooksDisplay';
import LoadingAnimation from './LoadingAnimation';

export default function ApiServerDemo() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">API Server Demo</h1>
      <p className="mb-6">
        This server component fetches data from our custom API route at <code className="bg-gray-100 px-2 py-1 rounded">/api/books</code>.
        It includes a loading animation while the data is being fetched.
      </p>

      <Suspense fallback={<LoadingAnimation />}>
        <BooksDisplay />
      </Suspense>

      <div className="mt-6">
        <ServerNavigation />
      </div>
    </div>
  );
}
