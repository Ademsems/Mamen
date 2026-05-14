"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden
      >
        <span
          className="text-[clamp(8rem,25vw,22rem)] font-serif font-bold tracking-widest text-primary-text/[0.03] rotate-[-8deg] whitespace-nowrap"
        >
          JOURNALIST
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-5"
          >
            <motion.span variants={item} className="section-label">
              {t("eyebrow")}
            </motion.span>

            <motion.h1
              variants={item}
              className="font-serif text-[clamp(3rem,7vw,5rem)] font-bold leading-none tracking-tight text-primary-text"
            >
              {t("headline")}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-secondary-text font-light tracking-wide"
            >
              {t("subtitle")}
            </motion.p>

            <motion.p variants={item} className="text-base text-primary-text/80 max-w-md">
              {t("bio")}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://www.larazon.es/autores/mamen-sala/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors"
              >
                {t("cta_work")}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-primary-text text-primary-text px-6 py-3 text-sm font-medium tracking-wide hover:border-accent hover:text-accent transition-colors"
              >
                {t("cta_contact")}
              </a>
            </motion.div>
          </motion.div>

          {/* Photos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            {/* Primary headshot */}
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/images/hero.jpg"
                alt="Mamen Sala — US Correspondent & Journalist"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Secondary photo */}
            <div className="relative w-full aspect-video overflow-hidden rounded-sm">
              <Image
                src="/images/secondary.jpg"
                alt="Mamen Sala reporting"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="section-label text-[10px]">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-8 bg-accent/60"
        />
      </motion.div>
    </section>
  );
}
