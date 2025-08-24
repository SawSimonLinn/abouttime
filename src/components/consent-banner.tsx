// components/consent-banner.tsx
"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-R35FQ191B5";
const KEY = "consent:analytics";

type Consent = "granted" | "denied" | "unknown";

export default function ConsentBanner() {
  const [consent, setConsent] = useState<Consent>("unknown");

  useEffect(() => {
    const saved = (typeof window !== "undefined" &&
      localStorage.getItem(KEY)) as Consent | null;
    if (saved === "granted" || saved === "denied") setConsent(saved);
  }, []);

  const accept = () => {
    localStorage.setItem(KEY, "granted");
    setConsent("granted");
  };

  const reject = () => {
    localStorage.setItem(KEY, "denied");
    setConsent("denied");
  };

  return (
    <>
      {/* Load GA only if consent is granted */}
      {consent === "granted" && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              // Explicit consent update
              gtag('consent', 'update', { 'analytics_storage': 'granted' });
              // We'll send page_view manually
              gtag('config', '${GA_ID}', { send_page_view: false });
            `}
          </Script>
        </>
      )}

      {/* Banner */}
      {consent === "unknown" && (
        <div className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-3xl rounded-t-2xl border bg-white p-4 shadow-xl dark:bg-zinc-900 dark:border-zinc-800">
          <p className="text-sm">
            We use cookies to enhance your experience. By clicking "Accept", you
            consent to our use of cookies for analytics. You can reject if you
            prefer.
          </p>
          <div className="mt-3 flex gap-2">
            <button
              onClick={accept}
              className="rounded-xl px-4 py-2 text-sm font-medium bg-accent text-white"
            >
              Accept
            </button>
            <button
              onClick={reject}
              className="rounded-xl px-4 py-2 text-sm font-medium border dark:border-zinc-700"
            >
              Reject
            </button>
          </div>
        </div>
      )}
    </>
  );
}
