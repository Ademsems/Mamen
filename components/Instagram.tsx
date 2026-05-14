"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight, Instagram as InstagramIcon } from "lucide-react";

interface InstagramPost {
  id: string;
  media_url: string;
  thumbnail_url?: string;
  caption?: string;
  permalink: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  timestamp: string;
}

export default function Instagram() {
  const t = useTranslations("instagram");
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => {
        if (!res.ok) throw new Error("Feed unavailable");
        return res.json();
      })
      .then((data) => {
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts.slice(0, 6));
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const showPlaceholder = !loading && (error || posts.length === 0);

  return (
    <section id="instagram" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <span className="section-label">05 — {t("title")}</span>
          <p className="mt-2 text-secondary-text text-sm tracking-wide">
            {t("subtitle")}
          </p>
        </ScrollReveal>

        <div className="mt-10">
          {loading && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-border animate-pulse"
                />
              ))}
            </div>
          )}

          {showPlaceholder && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-border/60 flex items-center justify-center"
                >
                  <InstagramIcon className="w-8 h-8 text-border" />
                </div>
              ))}
            </div>
          )}

          {showPlaceholder && (
            <p className="text-center text-sm text-secondary-text mt-6 italic">
              {t("coming_soon")}
            </p>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {posts.map((post, i) => {
                const imgSrc =
                  post.media_type === "VIDEO"
                    ? post.thumbnail_url ?? ""
                    : post.media_url;
                return (
                  <ScrollReveal key={post.id} delay={i * 0.06}>
                    <motion.a
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block aspect-square overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {imgSrc && (
                        <Image
                          src={imgSrc}
                          alt={post.caption?.slice(0, 80) ?? "Instagram post"}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      )}
                      {/* Caption overlay */}
                      <div className="absolute inset-0 bg-primary-text/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                        <p className="text-white text-xs leading-snug line-clamp-4">
                          {post.caption}
                        </p>
                      </div>
                    </motion.a>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-center">
            <a
              href="https://www.instagram.com/mamensala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              {t("follow")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
