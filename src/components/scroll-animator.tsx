"use client";

import { useEffect } from "react";

// ---------------------------------------------------------------------------
// Scroll Animator — Client Component
// ---------------------------------------------------------------------------
// Uses IntersectionObserver to add the `visible` class to elements with
// `data-animate` when they scroll into view. Keeps the landing page a
// Server Component while enabling scroll-triggered CSS animations.
// ---------------------------------------------------------------------------

export function ScrollAnimator() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
