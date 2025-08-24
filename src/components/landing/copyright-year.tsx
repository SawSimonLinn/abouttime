"use client";

import { useEffect, useState } from "react";

export function CopyrightYear() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  
  return <>{year}</>;
}
