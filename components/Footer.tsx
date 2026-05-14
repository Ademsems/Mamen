"use client";

import { useTranslations } from "next-intl";
import { Instagram, Linkedin, BookOpen } from "lucide-react";

const NAV_ITEMS = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "articles", href: "#articles" },
  { key: "instagram", href: "#instagram" },
  { key: "recommendations", href: "#recommendations" },
  { key: "cv", href: "#cv" },
  { key: "contact", href: "#contact" },
] as const;

const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/mamensala",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mamensala",
    icon: Linkedin,
  },
  {
    label: "La Razón",
    href: "https://www.larazon.es/autores/mamen-sala/",
    icon: BookOpen,
  },
];

export default function Footer() {
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");

  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left: branding */}
          <div>
            <a
              href="#"
              className="font-serif text-xl font-semibold text-footer-text hover:text-accent transition-colors"
            >
              Mamen Sala
            </a>
            <p className="mt-2 text-sm text-footer-text/60">{tFooter("location")}</p>
            <p className="mt-6 text-xs text-footer-text/40 leading-relaxed">
              {tFooter("copyright")}
            </p>
          </div>

          {/* Center: nav */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-footer-text/40 mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV_ITEMS.map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-sm text-footer-text/70 hover:text-accent transition-colors"
                  >
                    {tNav(key as keyof typeof tNav)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: socials */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-footer-text/40 mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {SOCIAL.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-footer-text/70 hover:text-accent transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
