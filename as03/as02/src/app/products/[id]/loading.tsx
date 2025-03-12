export default function Loading() {
  return (
    <div className="container mx-auto p-6">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded mb-6 w-1/4"></div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>

          <div className="h-6 bg-gray-200 rounded mb-6 w-1/5"></div>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <div className="h-6 bg-gray-200 rounded mb-4 w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5"></div>
          </div>

          <div className="h-10 bg-gray-200 rounded w-1/4"></div>
        </div>

        <div className="mt-8 bg-gray-100 p-4 rounded-lg">
          <div className="h-6 bg-gray-200 rounded mb-4 w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        </div>
      </div>
    </div>
  );
}
