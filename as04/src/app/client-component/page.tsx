import ClientNavigation from "@/components/ClientNavigation/ClientNavigation";

export default function ClientComponentPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Client Component Example</h1>
      <p className="mb-6">
        This page demonstrates a client component with interactive features.
      </p>

      <ClientNavigation />

      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2">About Client Components</h2>
        <p>
          Client Components are rendered in the browser and can use React hooks and browser APIs.
          They're ideal for interactive UI elements, state management, and event handling.
        </p>
      </div>
    </main>
  );
}
