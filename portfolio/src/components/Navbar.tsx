import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { NavSectionId } from "../types";
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToSection } from "../hooks/useSmoothScroll";

const NAV: Array<{ id: NavSectionId; label: string }> = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(() => NAV, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={[
          "mx-auto max-w-6xl px-4 sm:px-6",
          "pt-3",
        ].join(" ")}
      >
        <div
          className={[
            "glass rounded-2xl px-4 sm:px-5",
            "flex h-[60px] items-center justify-between gap-3",
            "transition-shadow",
            scrolled ? "shadow-card" : "",
          ].join(" ")}
        >
          <button
            className="ring-premium group inline-flex items-center gap-2 rounded-xl px-2.5 py-2 text-left"
            onClick={() => scrollToSection("home")}
            aria-label="Go to top"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <span className="text-sm font-semibold tracking-tight text-ink">MSK</span>
            </span>
            <span className="hidden sm:block">
              <span className="block text-[13px] font-semibold leading-none text-ink">
                Muhammad Shafy Khan
              </span>
              <span className="mt-1 block text-[12px] leading-none text-ink/65">
                Cybersecurity · Developer
              </span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {navItems.map((n) => {
              const isActive = active === n.id;
              return (
                <button
                  key={n.id}
                  className={[
                    "ring-premium relative rounded-xl px-3 py-2 text-[13px] font-medium",
                    "transition-colors",
                    isActive ? "text-ink" : "text-ink/70 hover:text-ink",
                  ].join(" ")}
                  onClick={() => scrollToSection(n.id)}
                >
                  <span className="u-underline">{n.label}</span>
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-xl bg-white/5 border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              className="ring-premium relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <motion.span
                className="absolute h-[2px] w-5 bg-ink"
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
                transition={{ duration: 0.22 }}
              />
              <motion.span
                className="absolute h-[2px] w-5 bg-ink"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.18 }}
              />
              <motion.span
                className="absolute h-[2px] w-5 bg-ink"
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
                transition={{ duration: 0.22 }}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="md:hidden"
            >
              <div className="glass mt-3 rounded-2xl p-2 border border-white/10">
                {navItems.map((n) => {
                  const isActive = active === n.id;
                  return (
                    <button
                      key={n.id}
                      className={[
                        "ring-premium w-full rounded-xl px-4 py-3 text-left text-[13px] font-medium",
                        isActive ? "bg-white/5 text-ink" : "text-ink/80 hover:bg-white/5 hover:text-ink",
                      ].join(" ")}
                      onClick={() => {
                        scrollToSection(n.id);
                        setOpen(false);
                      }}
                    >
                      {n.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}

