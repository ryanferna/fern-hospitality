import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import Header from "@/app/components/Header";
import Link from "next/link";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fern Hospitality | Precision F&B optimization for luxury hospitality",
  description: "Discreet, data-driven F&B optimization for luxury hotels, ownership groups, and premium venue operators.",
};

const footerNav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${jost.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>

        <footer style={{ background: "var(--bg-2)", borderTop: "1px solid var(--rule)" }}>
          <div className="container py-20 md:py-24">
            <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-20">
              {/* Brand col */}
              <div className="md:col-span-5">
                <Link href="/" className="inline-flex flex-col mb-6">
                  <span
                    className="text-[var(--ivory)]"
                    style={{ fontFamily: "var(--font-bodoni)", fontSize: "1.4rem" }}
                  >
                    Fern Hospitality
                  </span>
                  <span className="eyebrow mt-1" style={{ fontSize: "0.5rem" }}>
                    Luxury F&amp;B Optimization
                  </span>
                </Link>
                <p className="text-sm font-light leading-relaxed max-w-xs" style={{ color: "var(--ivory-dim)" }}>
                  Discreet F&amp;B refinement for luxury hotels, ownership groups, and premium venue operators.
                </p>
                <p className="text-xs mt-4 font-light" style={{ color: "var(--ivory-faint)", letterSpacing: "0.1em" }}>
                  New York City
                </p>
              </div>

              {/* Nav cols */}
              <div className="md:col-span-3 md:col-start-8">
                <p className="eyebrow mb-6" style={{ fontSize: "0.55rem" }}>Pages</p>
                <nav className="flex flex-col gap-3">
                  {footerNav.map(l => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-sm font-light w-fit opacity-50 hover:opacity-100 transition-opacity duration-240 text-[var(--ivory)]"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="md:col-span-3 md:col-start-11">
                <p className="eyebrow mb-6" style={{ fontSize: "0.55rem" }}>Contact</p>
                <div className="flex flex-col gap-3 text-sm font-light">
                  <a href="mailto:hello@fernhospitality.com" className="text-[var(--ivory)] opacity-50 hover:opacity-100 transition-opacity duration-240 w-fit">
                    hello@fernhospitality.com
                  </a>
                </div>
                <Link href="/contact" className="btn btn-outline mt-8 text-[0.6rem]">
                  Request a Diagnostic
                </Link>
              </div>
            </div>

            <hr className="rule mb-8" />

            <div className="flex flex-col md:flex-row justify-between gap-3 text-xs font-light" style={{ color: "var(--ivory-faint)" }}>
              <p>© {new Date().getFullYear()} Fern Hospitality LLC. All rights reserved.</p>
              <p>New York City · Luxury Hospitality Performance</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
