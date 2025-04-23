import { use } from 'react';

function createDelay() {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("I'm a component that loads slowly!");
    }, 2000);
  });
}

export default function SlowComponent() {
  const message = use(createDelay());

  return (
    <div className="space-y-4">
      <div className="bg-green-100 p-4 rounded-md border border-green-300">
        <p className="text-green-700 font-medium">{message}</p>
        <p className="text-sm text-green-600 mt-2">
          This component was artificially delayed for 2 seconds to demonstrate Suspense.
        </p>
      </div>
    </div>
  );
}
