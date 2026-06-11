"use client";

import { usePathname } from "next/navigation";

export default function HreflangLinks() {
  const pathname = usePathname();

  // Language configuration
  const languages = [
    { code: "en", path: "" },
    { code: "de", path: "/de" },
    { code: "fr", path: "/fr" },
    { code: "es", path: "/es" },
    { code: "it", path: "/it" },
  ];
  const langPrefixes = ["/de/", "/fr/", "/es/", "/it/"];

  // Homepage: generate standard set of language alternates
  if (pathname === "/" || pathname === "") {
    return (
      <>
        <link rel="alternate" href="https://royalbetguide.com" hrefLang="en" />
        <link rel="alternate" href="https://royalbetguide.com/de" hrefLang="de" />
        <link rel="alternate" href="https://royalbetguide.com/fr" hrefLang="fr" />
        <link rel="alternate" href="https://royalbetguide.com/es" hrefLang="es" />
        <link rel="alternate" href="https://royalbetguide.com/it" hrefLang="it" />
        <link rel="alternate" href="https://royalbetguide.com" hrefLang="x-default" />
      </>
    );
  }

  // Detect if we're on a translated page
  let currentLang = "";
  let pagePath = pathname;

  for (const prefix of langPrefixes) {
    if (pathname.startsWith(prefix)) {
      currentLang = prefix.slice(1, -1); // "de", "fr", etc.
      pagePath = pathname.slice(prefix.length - 1); // /something/page/
      break;
    }
  }

  // Only generate per-page hreflang on translated pages
  if (!currentLang) {
    return null;
  }

  // Generate alternates for all languages pointing to the same page path
  const baseUrl = "https://royalbetguide.com";

  return (
    <>
      {languages.map((lang) => (
        <link
          key={lang.code}
          rel="alternate"
          href={`${baseUrl}${lang.path}${pagePath}`}
          hrefLang={lang.code}
        />
      ))}
      <link
        rel="alternate"
        href={`${baseUrl}${pagePath}`}
        hrefLang="x-default"
      />
    </>
  );
}
