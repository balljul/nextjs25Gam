import ClientInServer from "./ClientInServer";

export default function ServerWithClient() {
  const serverData = {
    message: "Hello from the server component!",
    timestamp: new Date().toISOString(),
    features: ["Server Rendering", "SEO Friendly", "Direct DB Access"]
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Server Component with Client Component</h1>
      <p className="mb-6">
        This is a server component that imports and uses a client component. The server component
        prepares data on the server and passes it to the client component.
      </p>

      <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Server Component Section</h2>
        <p className="mb-2">This content is rendered on the server:</p>
        <div className="bg-white p-4 rounded border border-blue-200">
          <p><strong>Message:</strong> {serverData.message}</p>
          <p><strong>Generated at:</strong> {serverData.timestamp}</p>
          <div className="mt-2">
            <strong>Server Features:</strong>
            <ul className="list-disc pl-5">
              {serverData.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Client component used inside the server component */}
      <ClientInServer initialCount={10} serverMessage={serverData.message} />
    </div>
  );
}
