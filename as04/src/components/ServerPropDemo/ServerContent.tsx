export default function ServerContent() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
      <h3 className="text-lg font-semibold mb-2">Server Component Content</h3>
      <p className="mb-2">
        This content was rendered on the server at build time or during server-side rendering.
      </p>
      <div className="bg-white p-3 rounded border border-blue-100">
        <p className="font-mono">Server time when rendered: {currentTime}</p>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Note: This time will not update until the page is refreshed because it's rendered on the server.
      </p>
    </div>
  );
}
