import ServerPropWrapper from "@/components/ServerPropDemo/ServerPropWrapper";
import ServerContent from "@/components/ServerPropDemo/ServerContent";
import ServerNavigation from "@/components/ServerNavigation/ServerNavigation";

export default function ServerPropDemoPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Server Component as Prop Demo</h1>
      <p className="mb-6">
        This page demonstrates passing a server component as a prop to a client component.
        The server component is rendered on the server and then passed to the client component.
      </p>

      <ServerPropWrapper
        title="Server Component Wrapper"
        serverComponent={<ServerContent />}
      />

      <ServerNavigation />
    </main>
  );
}
