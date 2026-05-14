"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

// TODO: Replace with real article data
const articles = [
  {
    publication: "La Razón",
    headline: "Article headline goes here — replace with real title",
    excerpt:
      "A short excerpt from the article that gives readers a sense of the story. Replace with actual article content.",
    date: "Month DD, YYYY",
    href: "#",
  },
  {
    publication: "La Razón",
    headline: "Second featured article headline — replace with real title",
    excerpt:
      "Another short excerpt from a featured article. This placeholder should be replaced with actual journalism.",
    date: "Month DD, YYYY",
    href: "#",
  },
  {
    publication: "France 24",
    headline: "Third featured article — replace with real title",
    excerpt:
      "Excerpt for the third article card. Replace with actual content from a featured piece.",
    date: "Month DD, YYYY",
    href: "#",
  },
];

export default function FeaturedArticles() {
  const t = useTranslations("articles");

  return (
    <section id="articles" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <span className="section-label">04 — {t("title")}</span>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <article className="group flex flex-col bg-background border border-border hover:border-accent transition-colors duration-150 card-hover">
                {/* Article image placeholder */}
                {/* TODO: Replace with real article image */}
                <div className="aspect-video bg-border/60 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <svg
                      className="w-8 h-8 text-border mx-auto mb-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-xs text-secondary-text italic">
                      [ Article image ]
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 gap-3">
                  <span className="section-label text-[10px]">
                    {article.publication}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-primary-text leading-snug group-hover:text-accent transition-colors">
                    {article.headline}
                  </h3>
                  <p className="text-sm text-secondary-text leading-relaxed flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                    <span className="text-xs text-secondary-text">
                      {article.date}
                    </span>
                    <a
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                    >
                      {t("read_more")}
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
