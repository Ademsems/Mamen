"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Mediaset España (Telecinco & Cuatro)",
    role: "US Correspondent / NY Correspondent",
    period: "April 2017 – Present",
    location: "New York",
    description:
      "Live broadcast coverage of breaking news from the United States for Spain's leading commercial television network, reporting on politics, society, economics, and sport.",
  },
  {
    company: "France 24",
    role: "New York Correspondent",
    period: "April 2018 – Present",
    location: "New York",
    description:
      "Live connections, articles, and reports from New York City for the international French news network's Spanish-language channel.",
  },
  {
    company: "La Razón",
    role: "New York Correspondent",
    period: "January 2023 – Present",
    location: "New York",
    description:
      "Written journalism for Spain's national daily newspaper. Author page: larazon.es/autores/mamen-sala",
    link: "https://www.larazon.es/autores/mamen-sala/",
  },
  {
    company: "Chef Training U.S.",
    role: "President & Co-Founder",
    period: "August 2016 – Present",
    location: "Miami & New York",
    description:
      "Leading a specialized training and career placement company connecting U.S. hospitality and culinary employers with international talent, and guiding candidates through the visa acquisition process.",
  },
  {
    company: "Universitat Oberta de Catalunya",
    role: "Adjunct Professor, Journalism",
    period: "February 2024 – Present",
    location: "Remote",
    description:
      "Collaborating faculty member for Introduction to Journalism, guiding students through the role, responsibilities, and ethics of journalism in today's information society.",
  },
  {
    company: "Antena 3",
    role: "TV Reporter & Editor in Chief",
    period: "May 2007 – January 2012",
    location: "Spain",
    description:
      "Reported live for Morning and Night Shows on major national events. Coordinated a team of five reporters. Produced, screenwrote, and edited daily television news content.",
  },
  {
    company: "La Sexta",
    role: "Reporter, 'Equipo de Investigación'",
    period: "March 2010 – June 2012",
    location: "Madrid",
    description:
      "Investigative journalist on one of Spain's top investigative TV programmes. Conducted months-long investigations including coverage that was decisive in a murder case and acquired by international media.",
  },
  {
    company: "TVE",
    role: "Reporter, 'Por la Mañana'",
    period: "June 2006 – May 2007",
    location: "Spain",
    description:
      "Field reporter for Spain's national public television morning show.",
  },
];

export default function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <span className="section-label">03 — {t("title")}</span>
        </ScrollReveal>

        <div className="mt-10 relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-border hidden md:block" />

          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="md:pl-8 group">
                  <div className="relative border-l-4 border-l-border group-hover:border-l-accent transition-colors duration-300 bg-surface p-6 shadow-sm hover:shadow-md transition-shadow duration-150">
                    {/* Dot on timeline */}
                    <div className="absolute -left-[25px] top-6 w-3 h-3 rounded-full bg-border group-hover:bg-accent transition-colors duration-300 hidden md:block" />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-primary-text">
                          {exp.company}
                        </h3>
                        <p className="text-sm font-medium text-accent mt-0.5">
                          {exp.role}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm text-secondary-text">{exp.period}</p>
                        <p className="text-xs text-secondary-text/70 mt-0.5">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-primary-text/70 leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 text-xs text-accent hover:underline"
                      >
                        larazon.es/autores/mamen-sala
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
