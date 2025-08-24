// app/metadata.ts (or export in app/layout.tsx)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AboutTime Café – Where Focus Meets Flavor",
  description: "A modern, sleek café in LA for work, study, and relaxation.",
  metadataBase: new URL("https://abouttime.cafe"),
  openGraph: {
    type: "website",
    url: "https://abouttime.cafe",
    title: "AboutTime Café",
    description:
      "Your study & work café with Wi‑Fi, outlets, and great coffee.",
    siteName: "AboutTime Café",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "AboutTime Café" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AboutTime Café",
    description: "Where focus meets flavor.",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};
