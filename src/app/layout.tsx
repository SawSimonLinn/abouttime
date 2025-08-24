// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ConsentBanner from "@/components/consent-banner";
import { Analytics } from "@/components/analytics";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "AboutTime Cafe",
  description: "A modern, sleek café for work, study, and relaxation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ConsentBanner />
        {/* ⬇️ wrap anything that uses useSearchParams/useRouter in Suspense */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
