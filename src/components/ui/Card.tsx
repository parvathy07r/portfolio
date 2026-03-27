"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hover = true,
  onClick,
}: CardProps) {
  const baseStyles =
    "rounded-2xl border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-sm";
  const hoverStyles = hover
    ? "transition-all duration-300 ease-out hover:border-zinc-700 hover:bg-zinc-800/50 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
    : "";
  const clickStyles = onClick ? "cursor-pointer" : "";

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${clickStyles} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`px-6 pt-6 pb-2 ${className}`}>{children}</div>;
}

export function CardContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}
