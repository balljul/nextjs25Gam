import RedirectDemo from "@/components/RedirectDemo/RedirectDemo";

export default function RedirectDemoPage({ searchParams }: { searchParams: { redirect?: string, to?: string } }) {
  return <RedirectDemo searchParams={searchParams} />;
}
