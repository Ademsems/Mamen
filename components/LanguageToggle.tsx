"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTransitions } from "@/hooks/useLocale";

export default function LanguageToggle() {
  const { locale, toggleLocale } = useTransitions();

  return (
    <button
      onClick={toggleLocale}
      className="relative flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs font-semibold tracking-wider transition-colors hover:border-accent hover:text-accent"
      aria-label="Toggle language"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={locale}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-accent"
        >
          {locale === "en" ? "EN" : "ES"}
        </motion.span>
      </AnimatePresence>
      <span className="text-secondary-text">/</span>
      <span className="text-secondary-text">
        {locale === "en" ? "ES" : "EN"}
      </span>
    </button>
  );
}
