import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="mb-6">
          This is a demonstration of Next.js routing with multiple pages and navigation using the Link component.
        </p>
      </div>
    </main>
  );
}
