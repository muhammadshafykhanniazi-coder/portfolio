import { useEffect, useState } from "react";
import type { NavSectionId } from "../types";

const SECTION_IDS: NavSectionId[] = ["home", "about", "skills", "projects", "contact"];

export function useActiveSection(): NavSectionId {
  const [active, setActive] = useState<NavSectionId>("home");

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        const id = (visible?.target as HTMLElement | undefined)?.id as NavSectionId | undefined;
        if (id) setActive(id);
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.2, 0.3, 0.4, 0.6],
      },
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return active;
}

