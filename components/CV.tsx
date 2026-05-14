"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";
import { Download } from "lucide-react";

const skills = [
  "Live Broadcasting",
  "Breaking News",
  "Video Production & Editing",
  "Investigative Reporting",
  "Screenwriting",
  "Multimedia Journalism",
  "Community Management",
  "Corporate Communications",
  "Bilingual (EN/ES)",
];

const education = [
  {
    degree: "Bachelor's, Mass Communication/Media Studies",
    institution: "Universitat Internacional de Catalunya",
    years: "2002–2006",
  },
  {
    degree: "Bachelor's, Criminology",
    institution: "Universitat Internacional de Catalunya",
    years: "2006–2008",
  },
  {
    degree: "LL.B., Law",
    institution: "Universitat Oberta de Catalunya",
    years: "2008–2012",
  },
  {
    degree: "Master's, Marketing",
    institution: "UCLA",
    years: "2014–2015",
  },
];

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Full Professional" },
  { name: "Catalan", level: "Professional Working" },
];

export default function CV() {
  const t = useTranslations("cv");

  return (
    <section id="cv" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <span className="section-label">07 — {t("title")}</span>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Skills */}
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary-text mb-5">
                {t("skills_title")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium border border-border px-3 py-1.5 text-primary-text/80 hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal delay={0.15}>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary-text mb-5">
                {t("education_title")}
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="border-l-2 border-border pl-4 hover:border-accent transition-colors">
                    <p className="text-sm font-semibold text-primary-text">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-secondary-text mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-secondary-text/70 mt-0.5">
                      {edu.years}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Languages */}
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary-text mb-5">
                {t("languages_title")}
              </h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between border-b border-border pb-2"
                  >
                    <span className="text-sm font-medium text-primary-text">
                      {lang.name}
                    </span>
                    <span className="text-xs text-secondary-text">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Download button */}
        <ScrollReveal delay={0.25}>
          <div className="mt-12 flex justify-center">
            {/* TODO: Place mamen-sala-cv.pdf in /public/cv/ to activate download */}
            <a
              href="/cv/mamen-sala-cv.pdf"
              download
              className="inline-flex items-center gap-3 bg-primary-text text-background px-8 py-4 text-sm font-medium tracking-wide hover:bg-accent transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              {t("download")}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
