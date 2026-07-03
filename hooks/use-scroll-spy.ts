"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently near the viewport center.
 */
export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    if (sectionIds.length === 0) {
      return;
    }

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const visibleEntry = entries.find((entry) => entry.isIntersecting);
          if (visibleEntry) {
            setActiveId(id);
          }
        },
        {
          rootMargin: "-45% 0px -45% 0px",
          threshold: 0.05,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeId;
}
