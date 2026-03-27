"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex cursor-pointer items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:pointer-events-none rounded-lg";

    const variants = {
      primary:
        "bg-white text-zinc-900 hover:bg-zinc-200 focus:ring-white",
      secondary:
        "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 focus:ring-zinc-700",
      ghost:
        "bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 focus:ring-zinc-700",
      outline:
        "border border-zinc-700 bg-transparent text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 focus:ring-zinc-700",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs gap-1.5",
      md: "px-4 py-2 text-sm gap-2",
      lg: "px-6 py-3 text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
