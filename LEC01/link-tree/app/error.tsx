"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Application Error:", error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 dark:bg-zinc-900 p-4 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-red-500">Something went wrong!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          We encountered an unexpected error.
        </p>
        <div className="p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg text-left overflow-auto max-w-2xl mx-auto">
          <p className="font-mono text-sm text-red-600 dark:text-red-400">
            {error.message || "Unknown error"}
          </p>
        </div>
        <Button
          onClick={() => reset()}
          className="mt-4"
          variant="default"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
