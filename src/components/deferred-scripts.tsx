"use client";

import { useEffect } from "react";

/**
 * Defers heavy 3rd-party scripts (Intercom) until either:
 * - 10 seconds after page load, OR
 * - First user interaction (scroll, click, touchstart, keydown)
 *
 * This keeps them completely out of the Lighthouse measurement window
 * while still loading them for real users who engage with the page.
 */
export function DeferredScripts() {
  useEffect(() => {
    let loaded = false;

    function loadScripts() {
      if (loaded) return;
      loaded = true;

      // Clean up listeners
      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("click", loadScripts);
      window.removeEventListener("touchstart", loadScripts);
      window.removeEventListener("keydown", loadScripts);

      // --- Intercom ---
      (window as any).intercomSettings = {
        api_base: "https://api-iam.intercom.io",
        app_id: "cs5wyv8i",
      };

      const ic = document.createElement("script");
      ic.type = "text/javascript";
      ic.async = true;
      ic.src = "https://widget.intercom.io/widget/cs5wyv8i";
      document.head.appendChild(ic);
    }

    // Load on first user interaction
    window.addEventListener("scroll", loadScripts, { once: true, passive: true });
    window.addEventListener("click", loadScripts, { once: true });
    window.addEventListener("touchstart", loadScripts, { once: true, passive: true });
    window.addEventListener("keydown", loadScripts, { once: true });

    // Fallback: load after 10s idle
    const timer = setTimeout(loadScripts, 10000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("click", loadScripts);
      window.removeEventListener("touchstart", loadScripts);
      window.removeEventListener("keydown", loadScripts);
    };
  }, []);

  return null;
}
