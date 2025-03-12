import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <main>
      <Navigation />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          We are a demo company showcasing Next.js routing capabilities.
        </p>
        <p>
          This page is part of the basic navigation structure using Next.js Link components.
        </p>
      </div>
    </main>
  );
}
