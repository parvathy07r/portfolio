"use client";

import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function Section({
  id,
  children,
  className = "",
  title,
  subtitle,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-10 md:mb-12">
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-3 text-zinc-400 text-base md:text-lg max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
