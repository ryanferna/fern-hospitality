import Link from "next/link";

const principles = [
  {
    title: "Performance-Aligned",
    body: "We do not charge for hours or deliverables. We participate in the margin improvement we identify and help implement. If the recovery is not there, neither are we.",
  },
  {
    title: "Data-Driven",
    body: "Every recommendation is grounded in your actual operating data — purchasing records, P&L history, labor reports, waste logs. We do not benchmark against averages.",
  },
  {
    title: "Discreet",
    body: "Engagements are confidential. We work alongside existing teams without disruption, and we never communicate findings beyond authorized stakeholders.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-48 pb-24" style={{ background: "var(--bg)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(30,64,48,0.45) 0%, transparent 70%)" }}
        />
        <div className="container relative">
          <p className="eyebrow mb-10">About the Firm</p>
          <h1
            className="display text-[var(--ivory)]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)", maxWidth: "18ch", lineHeight: 1.05 }}
          >
            Operators and finance-minded partners,{" "}
            <em>not deck-driven consultants.</em>
          </h1>
        </div>
        <hr className="rule mt-24" />
      </section>

      {/* The Firm */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 md:gap-32">
            <div>
              <p className="eyebrow mb-8">Why Outside Optimization Works</p>
              <h2
                className="display text-[var(--ivory)]"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", lineHeight: 1.15 }}
              >
                The best operators in luxury hospitality do not always have the cleanest P&amp;Ls.
              </h2>
            </div>
            <div className="flex flex-col gap-5 md:pt-12">
              <p className="font-light leading-relaxed" style={{ color: "var(--ivory-dim)" }}>
                In luxury F&amp;B, margin erosion happens quietly. A purchasing relationship that made sense three years ago. A beverage list that grew past its cost-effective range. A labor model that was right for a higher-volume period. These things normalize into the P&amp;L and become invisible to the people closest to them.
              </p>
              <p className="font-light leading-relaxed" style={{ color: "var(--ivory-dim)" }}>
                We come in from the outside — with financial discipline and operational fluency — to see what internal teams often cannot. We do not disrupt what works. We find and close the gaps that are quietly compressing returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <p className="eyebrow mb-16">Leadership</p>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              {/* Portrait placeholder */}
              <div
                className="w-full aspect-[3/4] rounded-sm flex items-end p-6"
                style={{
                  background: "linear-gradient(160deg, var(--bg-3) 0%, var(--green) 100%)",
                  border: "1px solid var(--rule)",
                }}
              >
                <div>
                  <p
                    className="text-[var(--ivory)] mb-1"
                    style={{ fontFamily: "var(--font-bodoni)", fontSize: "1.3rem" }}
                  >
                    Ryan Fernandes
                  </p>
                  <p className="eyebrow" style={{ fontSize: "0.5rem" }}>Founder</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
              <h2
                className="display text-[var(--ivory)] mb-2"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                Ryan Fernandes
              </h2>
              <p className="eyebrow mb-10" style={{ color: "var(--gold)" }}>Founder</p>

              <div className="flex flex-col gap-5 mb-10">
                <p className="font-light leading-relaxed" style={{ color: "var(--ivory-dim)" }}>
                  Ryan Fernandes founded Fern Hospitality after a career that moved between institutional finance and operational hospitality — two disciplines that rarely share the same room, and that produce significant value when they do.
                </p>
                <p className="font-light leading-relaxed" style={{ color: "var(--ivory-dim)" }}>
                  His background includes structured finance work at JP Morgan and direct operational exposure across luxury hotel and venue F&amp;B environments. The combination gave him an unusual vantage point: the ability to read a P&amp;L with financial precision and understand, in operational terms, exactly what is driving each line.
                </p>
                <p className="font-light leading-relaxed" style={{ color: "var(--ivory-dim)" }}>
                  He established Fern Hospitality to make that combination available to ownership groups, hotel operators, and venue managers who know their margins should be better — but have not been able to locate exactly why they are not.
                </p>
              </div>

              <hr className="rule mb-8" />

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="eyebrow mb-2" style={{ fontSize: "0.52rem", color: "var(--ivory-faint)" }}>Background</p>
                  <p className="text-sm font-light" style={{ color: "var(--ivory-dim)" }}>Finance — JP Morgan<br />Luxury hospitality operations</p>
                </div>
                <div>
                  <p className="eyebrow mb-2" style={{ fontSize: "0.52rem", color: "var(--ivory-faint)" }}>Philosophy</p>
                  <p className="text-sm font-light" style={{ color: "var(--ivory-dim)" }}>F&amp;B as an operating asset,<br />not just a service environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <p className="eyebrow mb-6">Our Approach</p>
              <h2
                className="display text-[var(--ivory)]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", maxWidth: "22ch" }}
              >
                Three principles. Applied consistently.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-0">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="py-10 md:pr-12"
                style={{
                  borderTop: "1px solid var(--rule)",
                  paddingLeft: i > 0 ? "2.5rem" : 0,
                  borderLeft: i > 0 ? "1px solid var(--rule)" : "none",
                }}
              >
                <h3
                  className="text-[var(--ivory)] mb-4"
                  style={{ fontFamily: "var(--font-bodoni)", fontSize: "1.2rem" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--ivory-dim)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--rule)" }}>
        <div className="container py-24 md:py-32 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h2
            className="display text-[var(--ivory)]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", maxWidth: "22ch" }}
          >
            Ready to start with a diagnostic?
          </h2>
          <Link href="/contact" className="btn btn-primary md:flex-shrink-0">
            Request a Diagnostic
          </Link>
        </div>
      </section>
    </>
  );
}
