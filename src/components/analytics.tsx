// components/analytics.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    // @ts-ignore
    if (typeof window !== "undefined" && window.gtag) {
      // @ts-ignore
      window.gtag("config", "G-R35FQ191B5", { page_path: url });
    }
  }, [pathname, searchParams]);

  return null;
}
