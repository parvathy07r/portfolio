"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-lg shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-end">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors rounded-lg hover:bg-zinc-800/50 outline-none focus-visible:ring-2 focus-visible:ring-zinc-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden outline-none focus-visible:ring-2 focus-visible:ring-zinc-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-200 ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <div
          className={`absolute right-0 top-0 h-full w-[78%] max-w-sm border-l border-zinc-800/60 bg-zinc-950/90 shadow-2xl shadow-black/40 backdrop-blur-lg transition-transform duration-200 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex h-16 items-center justify-end px-5">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="rounded-lg p-2 text-zinc-300 transition-colors hover:bg-zinc-800/50 hover:text-zinc-100 outline-none focus-visible:ring-2 focus-visible:ring-zinc-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <X size={18} />
            </button>
          </div>

          <div className="px-3 pb-6 pt-2">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition-all hover:bg-zinc-800/60 hover:text-zinc-50 outline-none focus-visible:ring-2 focus-visible:ring-zinc-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
