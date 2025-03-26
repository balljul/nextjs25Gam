import ServerNavigation from "@/components/ServerNavigation/ServerNavigation";

export default function ServerComponentPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Server Component Example</h1>
      <p className="mb-6">
        This page demonstrates a server component with navigation links.
      </p>

      <ServerNavigation />

      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2">About Server Components</h2>
        <p>
          Server Components are rendered on the server and sent to the client as HTML.
          They can access server-side resources directly, such as databases or file systems.
          This makes them efficient for data fetching and rendering static content.
        </p>
      </div>
    </main>
  );
}
