"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function useTransitions() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "es" : "en";
    document.cookie = `locale=${nextLocale};path=/;max-age=31536000`;
    startTransition(() => {
      router.refresh();
    });
  };

  return { locale, toggleLocale, isPending };
}
