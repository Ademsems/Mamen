"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LanguageToggle from "./LanguageToggle";

const NAV_ITEMS = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "articles", href: "#articles" },
  { key: "instagram", href: "#instagram" },
  { key: "recommendations", href: "#recommendations" },
  { key: "cv", href: "#cv" },
  { key: "contact", href: "#contact" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-xl font-semibold tracking-tight text-primary-text hover:text-accent transition-colors"
        >
          Mamen Sala
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map(({ key, href }) => (
            <li key={key}>
              <a href={href} className="nav-link">
                {t(key as keyof typeof t)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-primary-text transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-primary-text transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-primary-text transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-border px-6 pb-4">
          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  className="block py-1 text-sm font-medium text-primary-text hover:text-accent transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(key as keyof typeof t)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
