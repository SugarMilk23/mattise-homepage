"use client";

import { useEffect } from "react";
import { useSmoothScroll } from "./useSmoothScroll";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const lenis = useSmoothScroll();

  useEffect(() => {
    if (lenis) {
      console.log("Lenis is ready");
      // You can add any Lenis-specific logic here
    }
  }, [lenis]);

  return <div className=" w-full">{children}</div>;
}
