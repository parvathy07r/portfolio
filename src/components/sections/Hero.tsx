"use client";

import { ArrowDown, MapPin, Briefcase } from "lucide-react";
import { Button, Badge } from "../ui";

interface HeroProps {
  name: string;
  title: string;
  location: string;
  company: string;
  description: string[];
}

export default function Hero({
  name,
  title,
  location,
  company,
  description,
}: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex items-center justify-center pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tight">
            {name}
          </h1>

          {/* Title */}
          <p className="mt-4 text-xl md:text-2xl text-zinc-400 font-medium">
            {title}
          </p>

          {/* Location & Company */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-zinc-600" />
              {location}
            </span>
            <span className="hidden sm:block text-zinc-700">•</span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={16} className="text-zinc-600" />
              {company}
            </span>
          </div>

          {/* Description */}
          <div className="mt-8 max-w-2xl space-y-3">
            {description.map((text, index) => (
              <p
                key={index}
                className="text-base md:text-lg text-zinc-400 leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
              <ArrowDown size={18} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#skills")}
          className="p-2 text-zinc-600 hover:text-zinc-400 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
