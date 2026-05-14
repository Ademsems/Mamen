"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

const recommendations = [
  {
    name: "Borja Flors",
    linkedin: "https://www.linkedin.com/in/borjaflors/",
    title: "Jefe de programas en À Punt Mèdia",
    relationship: "Managed Mamen directly",
    date: "July 2015",
    isSpanish: true,
    text: "Mamen Sala es una profesional comprometida y rigurosa. Posee una larga experiencia en el periodismo audiovisual y se desenvuelve a la perfección tanto en la producción de contenidos, como en el planteamiento y desarrollo de guiones.",
  },
  {
    name: "David Morse",
    linkedin: "https://www.linkedin.com/in/david-morse-6a2134/",
    title: "Market Researcher and Author — 'Polycultural Intelligence'",
    relationship: "Mamen's teacher",
    date: "July 2015",
    isSpanish: false,
    text: "Mamen has a curiosity and positive attitude that allow her to be a fast learner. She always strives to learn more and works great in a team. She is analytical, conscientious, detail oriented and committed to whatever she takes on. Additionally, she is very creative, and likes to discover new and original ways of doing things.",
  },
  {
    name: "Manuel O.",
    linkedin: "https://www.linkedin.com/in/manuel-o-5a35b430/",
    title: "Director de Contenidos en Winwin Audiovisual",
    relationship: "Worked on the same team",
    date: "July 2015",
    isSpanish: true,
    text: "Mamen Sala es una magnífica profesional tanto de la televisión como del marketing. En Equipo de Investigación demostró cada día el buen hacer profesional. Lo importante para ella es entregar el mejor trabajo posible. Es una profesional con gran instinto para investigar en profundidad cualquier tema y tiene una capacidad innata para ver más allá de un titular. Además posee un gran don de gentes que facilita su trabajo y hace que pueda obtener grandes resultados en un cara a cara con un entrevistado.",
  },
  {
    name: "Tito Zamalloa",
    linkedin: "https://www.linkedin.com/in/titoz/",
    title: "Marketing Professor | Fractional CMO | Entrepreneur",
    relationship: "Mamen's teacher",
    date: "June 2015",
    isSpanish: false,
    text: "Mamen is diligent, dedicated, and has strong command of mass media. Her dynamic personality and inquisitive nature can add value to any marketing team. She would fit in right away as a fast learner who carries a confident style to support a dynamic management team.",
  },
  {
    name: "Joe Hartnett",
    linkedin: "https://www.linkedin.com/in/joehartnett/",
    title: "Pacific Film Foundation",
    relationship: "Mamen's teacher",
    date: "June 2015",
    isSpanish: false,
    text: "Mamen is a smart, energetic and passionate bilingual (English/Spanish) marketer, who has deep media understanding. She was most recently a TV Reporter in Spain and came to UCLA to deepen her understanding of marketing and communication. She's a leader who will continue to learn, grow and contribute.",
  },
];

export default function Recommendations() {
  const t = useTranslations("recommendations");

  return (
    <section id="recommendations" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <span className="section-label">06 — {t("title")}</span>
        </ScrollReveal>

        <div className="mt-10 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {recommendations.map((rec, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                className="break-inside-avoid bg-background border border-border p-6 group relative overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.15 }}
              >
                {/* Accent border reveal on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                {/* Decorative quote mark */}
                <span className="font-serif text-6xl leading-none text-accent/30 block -mb-4">
                  &ldquo;
                </span>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <div />
                  {rec.isSpanish && (
                    <span className="text-[10px] tracking-wide text-secondary-text border border-border px-2 py-0.5 rounded-full shrink-0">
                      {t("spanish_label")}
                    </span>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-primary-text/80 italic">
                  {rec.text}
                </p>

                <div className="mt-5 pt-4 border-t border-border flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-sm text-primary-text">
                      {rec.name}
                    </p>
                    <p className="text-xs text-secondary-text mt-0.5 leading-snug">
                      {rec.title}
                    </p>
                    <p className="text-xs text-secondary-text/70 mt-0.5">
                      {rec.relationship} · {rec.date}
                    </p>
                  </div>
                  <a
                    href={rec.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1 text-[11px] font-medium text-accent hover:underline mt-0.5"
                  >
                    {t("view_linkedin")}
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
