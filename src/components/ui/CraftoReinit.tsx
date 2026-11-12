"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function CraftoReinit() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    // Remove any previously injected main.js and re-inject to reinitialize Crafto
    document.querySelectorAll('script[src*="crafto/js/main.js"]').forEach((s) => s.remove());
    const s = document.createElement("script");
    s.src = "/crafto/js/main.js";
    document.body.appendChild(s);
  }, [pathname]);

  return null;
}
