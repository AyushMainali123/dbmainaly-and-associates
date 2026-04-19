"use client";

import { useEffect, useState } from "react";

export function useActiveAnchor(anchors: string[]) {
  const [activeAnchor, setActiveAnchor] = useState<string>("");

  useEffect(() => {
    if (anchors.length === 0) return;

    const handleScroll = () => {
      // Find the heading that is most "active"
      // We look for headings and see which one is at the top of the viewport
      const offset = 150; // Offset for sticky header

      const anchorElements = anchors.map(anchor => {
        const id = anchor.replace("#", "");
        return {
          id: anchor,
          element: document.getElementById(id)
        };
      }).filter(item => item.element !== null);

      let currentActive = "";

      for (let i = 0; i < anchorElements.length; i++) {
        const { id, element } = anchorElements[i]!;
        if (!element) continue;
        const rect = element.getBoundingClientRect();

        // If the heading is above the threshold (offset)
        if (rect.top <= offset) {
          currentActive = id;
        } else {
          // If this heading is below the threshold, the previous one was the active one
          break;
        }
      }

      if (currentActive && currentActive !== activeAnchor) {
        setActiveAnchor(currentActive);
      } else if (!currentActive && anchors.length > 0) {
        setActiveAnchor(anchors[0]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [anchors, activeAnchor]);

  return activeAnchor;
}
