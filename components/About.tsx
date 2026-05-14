"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const t = useTranslations("about");
  const bio = t("bio");

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <span className="section-label">02 — {t("title")}</span>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Pull quote */}
          <ScrollReveal delay={0.1}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-[3px] bg-accent" />
              <blockquote className="pl-8">
                <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-primary-text whitespace-pre-line">
                  {t("pull_quote")}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-accent" />
                  <span className="section-label text-[11px]">Mamen Sala</span>
                </div>
              </blockquote>
            </div>
          </ScrollReveal>

          {/* Bio text */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-5">
              {bio.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-primary-text/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
