'use client';

import ErrorComponent from "@/components/ErrorDemo/ErrorComponent";

export default function ErrorBoundary(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorComponent error={props.error} reset={props.reset} />;
}
