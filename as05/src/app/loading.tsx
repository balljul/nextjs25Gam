export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-12 w-12 rounded-full border-4 border-t-blue-500 animate-spin"></div>
        <p className="text-xl font-medium">Loading page...</p>
      </div>
    </div>
  );
}
