// components/analytics.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", "G-R35FQ191B5", { page_path: pathname });
    }
  }, [pathname]);

  return null;
}
