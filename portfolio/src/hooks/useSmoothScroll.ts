import type { NavSectionId } from "../types";

export function scrollToSection(id: NavSectionId): void {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function hijackHashLinks(): () => void {
  const handler = (e: MouseEvent) => {
    const a = (e.target as HTMLElement | null)?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    const id = href.slice(1) as NavSectionId;
    if (!id) return;
    if (!document.getElementById(id)) return;
    e.preventDefault();
    scrollToSection(id);
    if (history.replaceState) history.replaceState(null, "", href);
  };

  document.addEventListener("click", handler);
  return () => document.removeEventListener("click", handler);
}

