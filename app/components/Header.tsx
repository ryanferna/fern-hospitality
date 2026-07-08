"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          borderBottom: scrolled ? "1px solid rgba(244,239,230,0.07)" : "1px solid transparent",
          background: scrolled ? "rgba(13,26,17,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div className="container flex items-center justify-between h-20">
          {/* Wordmark */}
          <Link href="/" className="flex flex-col leading-none">
            <span
              className="text-[var(--ivory)] tracking-tight"
              style={{ fontFamily: "var(--font-bodoni)", fontSize: "1.15rem", fontWeight: 400 }}
            >
              Fern Hospitality
            </span>
            <span className="eyebrow mt-0.5" style={{ fontSize: "0.5rem", color: "var(--gold)" }}>
              Luxury F&amp;B Optimization
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[var(--ivory)] text-[0.8rem] font-light tracking-widest uppercase transition-all duration-240 relative"
                style={{
                  opacity: pathname === l.href ? 1 : 0.5,
                  letterSpacing: "0.15em",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = pathname === l.href ? "1" : "0.5")}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/contact" className="btn btn-primary">
              Request a Diagnostic
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 flex flex-col gap-1.5 z-50"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            <span
              className="block w-6 h-px bg-[var(--ivory)] transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(3px)" : "" }}
            />
            <span
              className="block w-4 h-px bg-[var(--ivory)] transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-px bg-[var(--ivory)] transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(-3px)" : "" }}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-between px-8 py-10 pt-28 transition-all duration-400"
        style={{
          background: "var(--bg)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[var(--ivory)] transition-all duration-300 hover:text-[var(--gold)]"
              style={{
                fontFamily: "var(--font-bodoni)",
                fontSize: "clamp(2.2rem, 9vw, 3.5rem)",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-4 pb-6">
          <hr className="rule mb-2" />
          <Link href="/contact" className="btn btn-primary self-start">
            Request a Diagnostic
          </Link>
        </div>
      </div>
    </>
  );
}
