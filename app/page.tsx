import Link from "next/link";
import Image from "next/image";

const steps = [
  { n: "01", title: "Diagnostic First", body: "A thorough read of your P&L, purchasing data, labor allocation, and operational flow. No assumptions. No templates." },
  { n: "02", title: "Implementation Where the Margin Case Is Clear", body: "We identify the levers with the highest return and move surgically — pricing, beverage cost, purchasing, labor deployment." },
  { n: "03", title: "Upside Participation Follows Results", body: "Our engagement model is aligned with your outcomes. We participate in verified margin improvement." },
];

const focusAreas = [
  "Luxury Hotels",
  "Ownership Groups",
  "Multi-Outlet Properties",
  "Premium Suite Operations",
  "Venue Operators",
];

const impactRows = [
  { metric: "Food Cost",     before: "32%", after: "28%", delta: "~$148k saved / yr" },
  { metric: "Beverage Cost", before: "24%", after: "19%", delta: "~$112k saved / yr" },
  { metric: "Labor Cost",    before: "33%", after: "30%", delta: "~$196k saved / yr" },
  { metric: "Waste",         before: "—",   after: "−18%", delta: "~$79k saved / yr"  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end" style={{ background: "var(--bg)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 65% 40%, rgba(30,64,48,0.6) 0%, transparent 70%)" }}
        />
        <div className="container relative pb-16 pt-40">
          <p className="eyebrow mb-10">New York City · Luxury Hospitality Performance</p>
          <h1
            className="display text-[var(--ivory)] mb-10"
            style={{ fontSize: "clamp(3.5rem, 8.5vw, 8rem)", maxWidth: "14ch" }}
          >
            Luxury service.<br />
            <em>Sharper economics.</em>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <p
              className="font-light leading-relaxed max-w-md"
              style={{ color: "var(--ivory-dim)", fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
            >
              Discreet F&amp;B refinement for hotels, ownership groups,
              and premium venues — without disrupting the experience
              guests already recognize.
            </p>
            <div className="flex flex-wrap gap-4 md:flex-shrink-0">
              <Link href="/contact" className="btn btn-primary">Request a Diagnostic</Link>
              <Link href="/services" className="btn btn-outline">View Services</Link>
            </div>
          </div>
        </div>
        <hr className="rule" />
      </section>

      {/* ── PHILOSOPHY STRIP ── */}
      <section style={{ background: "var(--bg-2)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container py-16 md:py-20 grid md:grid-cols-12 gap-8 md:gap-0 items-center">
          <p className="eyebrow md:col-span-2" style={{ color: "var(--gold)" }}>The Principle</p>
          <p
            className="display text-[var(--ivory)] md:col-span-7 md:col-start-5"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontStyle: "italic", lineHeight: 1.3 }}
          >
            &ldquo;Data-driven refinement for operators who measure what matters.&rdquo;
          </p>
        </div>
      </section>

      {/* ── WHAT CHANGES ── */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div className="flex flex-col gap-6">
              <p className="eyebrow">The Approach</p>
              <h2
                className="display text-[var(--ivory)]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Better economics without changing what guests already recognize.
              </h2>
              <p className="font-light leading-relaxed" style={{ color: "var(--ivory-dim)" }}>
                Most luxury F&amp;B operations carry 8–15 points of recoverable margin hidden inside pricing architecture, purchasing relationships, beverage programming, labor deployment, and inventory management.
              </p>
              <p className="font-light leading-relaxed" style={{ color: "var(--ivory-dim)" }}>
                We locate those points without altering the experience your guests know. No rebranding. No service disruption. No menu overhauls that signal cost-cutting.
              </p>
              <hr className="rule mt-2" />
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 pt-2">
                {["Pricing architecture", "Purchasing & procurement", "Labor deployment", "Beverage programming", "Inventory & par levels", "Portion & packaging"].map(item => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="text-[var(--gold)] text-xs opacity-70">◆</span>
                    <span className="text-sm font-light" style={{ color: "var(--ivory-dim)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Image */}
            <div className="relative h-80 md:h-auto rounded-sm overflow-hidden" style={{ minHeight: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&auto=format&fit=crop&q=90"
                alt="Luxury hotel dining"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,26,17,0.5) 0%, transparent 60%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <p className="eyebrow mb-6">How We Work</p>
              <h2
                className="display text-[var(--ivory)]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", maxWidth: "20ch" }}
              >
                A structured engagement, aligned to your outcomes.
              </h2>
            </div>
            <Link href="/services" className="btn btn-outline md:flex-shrink-0">Full Service Detail</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-0">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="py-10 md:pr-12"
                style={{
                  borderTop: "1px solid var(--rule)",
                  paddingLeft: i > 0 ? "2.5rem" : 0,
                  borderLeft: i > 0 ? "1px solid var(--rule)" : "none",
                }}
              >
                <p className="display mb-6" style={{ fontSize: "3rem", color: "var(--gold)", opacity: 0.35 }}>{s.n}</p>
                <h3 className="text-[var(--ivory)] mb-4" style={{ fontFamily: "var(--font-bodoni)", fontSize: "1.2rem" }}>{s.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--ivory-dim)" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-BLEED IMAGE STRIP ── */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1591727536821-4eb2bd676797?w=1800&auto=format&fit=crop&q=90"
          alt="Grand chandelier and marble columns"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "rgba(13,26,17,0.25)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-12">
            <p className="eyebrow" style={{ color: "var(--gold)" }}>Precision without disruption</p>
          </div>
        </div>
      </div>

      {/* ── IMPACT ── */}
      <section className="section-lg" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-0">
            <div className="md:col-span-5">
              <p className="eyebrow mb-8">Illustrative Impact</p>
              <h2 className="display text-[var(--ivory)] mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                A representative six-month margin story.
              </h2>
              <p className="display text-[var(--gold)]" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", lineHeight: 1 }}>$535k</p>
              <p className="text-sm font-light mt-3" style={{ color: "var(--ivory-dim)" }}>Annual margin impact</p>
              <p className="text-xs font-light mt-6 leading-relaxed" style={{ color: "var(--ivory-faint)" }}>
                Illustrative. Actual results vary by property type, revenue base, and operational complexity.
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--rule)" }}>
                    <th className="text-left pb-4 font-light text-xs tracking-widest uppercase" style={{ color: "var(--ivory-faint)" }}>Metric</th>
                    <th className="text-right pb-4 font-light text-xs tracking-widest uppercase" style={{ color: "var(--ivory-faint)" }}>Before</th>
                    <th className="text-right pb-4 font-light text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>After</th>
                    <th className="text-right pb-4 font-light text-xs tracking-widest uppercase hidden md:table-cell" style={{ color: "var(--ivory-faint)" }}>Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {impactRows.map((r, i) => (
                    <tr key={r.metric} style={{ borderBottom: i < impactRows.length - 1 ? "1px solid var(--rule)" : "none" }}>
                      <td className="py-5 font-light text-[var(--ivory)]">{r.metric}</td>
                      <td className="py-5 text-right font-light" style={{ color: "var(--ivory-faint)" }}>{r.before}</td>
                      <td className="py-5 text-right font-medium" style={{ color: "var(--gold-light)" }}>{r.after}</td>
                      <td className="py-5 text-right text-xs font-light hidden md:table-cell" style={{ color: "var(--ivory-faint)" }}>{r.delta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHERE WE FOCUS ── */}
      <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Image left */}
            <div className="relative h-80 md:h-[520px] rounded-sm overflow-hidden order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1764148716678-40a4b8c5b812?w=900&auto=format&fit=crop&q=90"
                alt="Grand hotel staircase with red carpet"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,26,17,0.55) 0%, transparent 55%)" }} />
            </div>
            {/* Text right */}
            <div className="order-1 md:order-2">
              <p className="eyebrow mb-8">Where We Focus</p>
              <h2
                className="display text-[var(--ivory)] mb-10"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                Built for properties where precision matters.
              </h2>
              {focusAreas.map((a, i) => (
                <div
                  key={a}
                  className="flex items-center justify-between py-5 group"
                  style={{
                    borderBottom: i < focusAreas.length - 1 ? "1px solid var(--rule)" : "none",
                    borderTop: i === 0 ? "1px solid var(--rule)" : "none",
                  }}
                >
                  <span className="font-light" style={{ color: "var(--ivory-dim)" }}>{a}</span>
                  <span className="text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-240 text-xs">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-lg" style={{ background: "var(--bg)" }}>
        <div className="container text-center">
          <p className="eyebrow mb-8">Start Here</p>
          <h2
            className="display text-[var(--ivory)] mx-auto mb-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", maxWidth: "18ch", lineHeight: 1.08 }}
          >
            Ready to find the margin?
          </h2>
          <p className="font-light mb-12 mx-auto" style={{ color: "var(--ivory-dim)", maxWidth: "38ch" }}>
            The conversation is confidential. The first call costs you nothing. The diagnostic begins with your data.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">Request a Diagnostic</Link>
            <Link href="/about" className="btn btn-outline">About the Firm</Link>
          </div>
        </div>
      </section>
    </>
  );
}
