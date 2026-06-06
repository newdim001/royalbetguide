"use client";

import { useEffect } from "react";

export default function RedirectClient({ url }: { url: string }) {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/+$/, "");

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f172a] text-[#e2e8f0]">
      <div className="max-w-[480px] p-8 text-center">
        <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-[3px] border-[#334155] border-t-[#f59e0b]" />
        <h1 className="mb-2 text-xl font-bold">Taking you to {displayUrl}</h1>
        <p className="text-sm text-[#94a3b8]">
          Click{" "}
          <a href={url} className="text-[#f59e0b] hover:underline">
            here
          </a>{" "}
          if you are not redirected automatically.
        </p>
      </div>
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${url}`} />
      </noscript>
    </div>
  );
}
