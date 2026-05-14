"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const t = useTranslations("contact");

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [validationError, setValidationError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setValidationError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message) {
      setValidationError(true);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Send failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <span className="section-label">08 — {t("title")}</span>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: message */}
          <ScrollReveal delay={0.1}>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary-text leading-tight">
                {t("title")}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-primary-text/70 max-w-md">
                {t("message")}
              </p>

              <div className="mt-10 space-y-4">
                <div>
                  <p className="section-label text-[11px] mb-1">Email</p>
                  <a
                    href="mailto:Msalats@gmail.com"
                    className="text-sm text-accent hover:underline"
                  >
                    Msalats@gmail.com
                  </a>
                </div>
                <div>
                  <p className="section-label text-[11px] mb-1">Instagram</p>
                  <a
                    href="https://www.instagram.com/mamensala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline"
                  >
                    @mamensala
                  </a>
                </div>
                <div>
                  <p className="section-label text-[11px] mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/mamensala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline"
                  >
                    linkedin.com/in/mamensala
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="section-label text-[10px]" htmlFor="name">
                    {t("name")} *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-primary-text placeholder:text-secondary-text/60 focus:outline-none focus:border-accent transition-colors"
                    placeholder={t("name")}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="section-label text-[10px]" htmlFor="email">
                    {t("email")} *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-primary-text placeholder:text-secondary-text/60 focus:outline-none focus:border-accent transition-colors"
                    placeholder={t("email")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="section-label text-[10px]" htmlFor="subject">
                  {t("subject")} *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-primary-text placeholder:text-secondary-text/60 focus:outline-none focus:border-accent transition-colors"
                  placeholder={t("subject")}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="section-label text-[10px]" htmlFor="message">
                  {t("message_field")} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-border bg-background px-4 py-3 text-sm text-primary-text placeholder:text-secondary-text/60 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder={t("message_field")}
                />
              </div>

              {validationError && (
                <p className="text-sm text-red-600">{t("error_required")}</p>
              )}

              {status === "success" && (
                <p className="text-sm text-green-700 font-medium">
                  {t("success")}
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-accent text-white py-4 text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : t("send")}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
