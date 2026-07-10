import Link from "next/link";
import Image from "next/image";

const services = [
  {
    n: "01",
    title: "Hotel F&B Optimization",
    sub: "Existing outlets, sharper economics",
    body: "We work inside your existing restaurant, bar, and banqueting operations — not around them. The focus is margin improvement through pricing discipline, purchasing consolidation, beverage cost control, and labor calibration. Guests experience nothing different. The P&L does.",
    items: ["Menu engineering & pricing architecture", "Beverage program cost analysis", "Purchasing & vendor consolidation", "Labor model review & redeployment", "Inventory control & par-level reset"],
    img: "/hotel-fb.jpg",
    imgAlt: "Luxury hotel restaurant with marble service station and crystal glassware",
  },
  {
    n: "02",
    title: "Arena & Venue Suite Optimization",
    sub: "Premium suites, tighter margin control",
    body: "Premium suite and venue F&B operations carry some of the highest margins in hospitality — and some of the highest waste. We audit the full cost structure, from per-event purchasing to staffing ratios to menu design, and identify where recovery is immediate.",
    items: ["Per-event cost modeling", "Suite menu architecture", "Staffing ratio analysis", "Waste and over-ordering reduction", "Vendor negotiation support"],
    img: "/arena-suite.jpg",
    imgAlt: "Luxury arena suite with stadium view, green velvet seating and curated food spread",
  },
  {
    n: "03",
    title: "Ownership-Facing Diagnostics",
    sub: "A discreet read on what the P&L has normalized",
    body: "For ownership groups and investors, we provide an independent diagnostic of F&B operations across single or multi-property portfolios. We translate operational data into financial clarity — identifying where normalized inefficiency is suppressing returns.",
    items: ["Independent P&L analysis", "Cross-property benchmarking", "Operational risk identification", "Recovery opportunity quantification", "Implementation roadmap"],
    img: "/ownership.jpg",
    imgAlt: "Private library lounge with dark walnut shelving, brass lamp and green velvet chair",
  },
];

const phases = [
  { n: "01", label: "Diagnostic", desc: "Full operational and financial review. No assumptions." },
  { n: "02", label: "Analysis", desc: "Quantified opportunity set, prioritized by impact and implementation speed." },
  { n: "03", label: "Implementation", desc: "Surgical changes to pricing, purchasing, labor, and programming." },
  { n: "04", label: "Monitoring", desc: "Ongoing verification of realized improvement against baseline." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-48 pb-24" style={{ background: "var(--bg)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 30% 60%, rgba(30,64,48,0.5) 0%, transparent 70%)" }}
        />
        <div className="container relative">
          <p className="eyebrow mb-10">Our Services</p>
          <h1
            className="display text-[var(--ivory)]"
            style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)", maxWidth: "16ch", lineHeight: 1.05 }}
          >
            Tailored optimization across your F&amp;B operations.
          </h1>
        </div>
        <hr className="rule mt-24" />
      </section>

      {/* Services list */}
      <section style={{ background: "var(--bg)" }}>
        <div className="container">
          {services.map((s) => (
            <div key={s.n} style={{ borderBottom: "1px solid var(--rule)" }}>
              {/* Text row */}
              <div className="grid md:grid-cols-12 gap-12 py-20 md:py-24">
                <div className="md:col-span-1">
                  <p className="display" style={{ fontSize: "1rem", color: "var(--gold)", opacity: 0.5 }}>{s.n}</p>
                </div>
                <div className="md:col-span-4">
                  <h2
                    className="display text-[var(--ivory)] mb-3"
                    style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
                  >
                    {s.title}
                  </h2>
                  <p className="eyebrow" style={{ fontSize: "0.55rem", color: "var(--gold)" }}>{s.sub}</p>
                </div>
                <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6">
                  <p className="font-light leading-relaxed" style={{ color: "var(--ivory-dim)" }}>{s.body}</p>
                  <hr className="rule" />
                  <ul className="space-y-3">
                    {s.items.map(item => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-[var(--gold)] text-xs mt-1.5 flex-shrink-0">◆</span>
                        <span className="text-sm font-light" style={{ color: "var(--ivory-dim)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Photo strip */}
              <div className="relative h-64 md:h-[420px] overflow-hidden" style={{ marginLeft: "-2rem", marginRight: "-2rem" }}>
                <Image
                  src={s.img}
                  alt={s.imgAlt}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, rgba(13,26,17,0.35) 0%, rgba(13,26,17,0.15) 50%, rgba(13,26,17,0.55) 100%)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement phases */}
      <section className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <p className="eyebrow mb-6">Engagement Model</p>
              <h2
                className="display text-[var(--ivory)]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", maxWidth: "24ch" }}
              >
                Four phases. One alignment: your margin.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-0">
            {phases.map((p, i) => (
              <div
                key={p.n}
                className="py-10 md:pr-10"
                style={{
                  borderTop: "1px solid var(--rule)",
                  paddingLeft: i > 0 ? "2rem" : 0,
                  borderLeft: i > 0 ? "1px solid var(--rule)" : "none",
                }}
              >
                <p className="eyebrow mb-4" style={{ color: "var(--gold)", fontSize: "0.55rem" }}>{p.n}</p>
                <h3 className="text-[var(--ivory)] mb-3" style={{ fontFamily: "var(--font-bodoni)", fontSize: "1.1rem" }}>{p.label}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--ivory-dim)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-lg" style={{ background: "var(--bg)" }}>
        <div className="container text-center">
          <p className="eyebrow mb-8">Get Started</p>
          <h2
            className="display text-[var(--ivory)] mx-auto mb-10"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", maxWidth: "22ch" }}
          >
            Performance-aligned. Not fee-dependent.
          </h2>
          <p className="font-light mb-12 mx-auto" style={{ color: "var(--ivory-dim)", maxWidth: "40ch" }}>
            We structure engagements to reflect results, not process. Our upside follows yours.
          </p>
          <Link href="/contact" className="btn btn-primary">Discuss Your Property</Link>
        </div>
      </section>
    </>
  );
}
