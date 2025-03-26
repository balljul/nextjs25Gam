import { redirect } from "next/navigation";
import { Suspense } from "react";

function RedirectComponent({ shouldRedirect, destination }: { shouldRedirect: boolean, destination: string }) {
  if (shouldRedirect) {
    redirect(destination);
  }

  return (
    <div className="bg-red-100 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-2">No Redirect Triggered</h2>
      <p>The redirect condition was not met. You're still viewing this component.</p>
    </div>
  );
}

export default function RedirectDemo({ searchParams }: { searchParams: { redirect?: string, to?: string } }) {
  const shouldRedirect = searchParams.redirect === "true";
  const destination = searchParams.to || "/";

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Redirect Demo</h1>
      <p className="mb-6">
        This component demonstrates the use of the redirect function. Add <code>?redirect=true&to=/path</code>
        to the URL to trigger a redirect.
      </p>

      <div className="bg-yellow-100 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-2">Current Parameters</h2>
        <p><strong>redirect:</strong> {searchParams.redirect || "not set"}</p>
        <p><strong>to:</strong> {searchParams.to || "not set (defaults to Home)"}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <a
          href="/redirect-demo?redirect=true&to=/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Redirect to Home
        </a>
        <a
          href="/redirect-demo?redirect=true&to=/server-component"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Redirect to Server Component
        </a>
        <a
          href="/redirect-demo?redirect=true&to=/client-component"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Redirect to Client Component
        </a>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <RedirectComponent shouldRedirect={shouldRedirect} destination={destination} />
      </Suspense>
    </div>
  );
}
