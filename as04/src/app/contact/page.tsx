import Navigation from "@/components/Navigation";

export default function Contact() {
  return (
    <main>
      <Navigation />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          Feel free to reach out to us with any questions or feedback.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +43 123 456789</p>
          <p>Address: Technologiepark 1, 9500 Villach, Austria</p>
        </div>
      </div>
    </main>
  );
}
