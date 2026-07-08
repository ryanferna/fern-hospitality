"use client";

import { useState } from "react";

const upcomingTopics = [
  "The hidden 400 basis points in luxury beverage programming",
  "What your food cost percentage is not telling you",
  "Labor model misalignment in hotel F&B: a structural view",
  "Suite economics: why margin control matters more, not less",
  "When purchasing relationships stop paying for themselves",
];

export default function InsightsPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-48 pb-24" style={{ background: "var(--bg)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(30,64,48,0.4) 0%, transparent 70%)" }}
        />
        <div className="container relative">
          <p className="eyebrow mb-10">Thought Leadership</p>
          <h1
            className="display text-[var(--ivory)]"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)", maxWidth: "16ch", lineHeight: 1.05 }}
          >
            Thoughts on luxury F&amp;B operations.
          </h1>
        </div>
        <hr className="rule mt-24" />
      </section>

      {/* Coming soon body */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 md:gap-32">
            {/* Left */}
            <div>
              <p className="eyebrow mb-8">Coming Soon</p>
              <h2
                className="display text-[var(--ivory)] mb-8"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", lineHeight: 1.15 }}
              >
                Practical perspectives on margin, operations, and luxury hospitality.
              </h2>
              <p className="font-light leading-relaxed mb-6" style={{ color: "var(--ivory-dim)" }}>
                We are preparing a series of concise, data-informed pieces on the F&amp;B mechanics that most directly affect returns in luxury hotel and venue environments.
              </p>
              <p className="font-light leading-relaxed mb-14" style={{ color: "var(--ivory-dim)" }}>
                No thought-leadership filler. Each piece will be grounded in operational data and written for people who own or manage the P&L.
              </p>

              <p className="eyebrow mb-6" style={{ fontSize: "0.55rem", color: "var(--ivory-faint)" }}>Upcoming Topics</p>
              <div>
                {upcomingTopics.map((topic, i) => (
                  <div
                    key={topic}
                    className="flex items-start gap-4 py-5"
                    style={{
                      borderTop: "1px solid var(--rule)",
                      borderBottom: i === upcomingTopics.length - 1 ? "1px solid var(--rule)" : "none",
                    }}
                  >
                    <span className="text-[var(--gold)] text-xs mt-0.5 flex-shrink-0 opacity-50">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm font-light leading-relaxed" style={{ color: "var(--ivory-dim)" }}>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — signup + quote */}
            <div className="flex flex-col gap-12">
              {/* Signup card */}
              <div
                className="p-8 md:p-10"
                style={{ background: "var(--bg-2)", border: "1px solid var(--rule)" }}
              >
                {subscribed ? (
                  <div className="py-6">
                    <h3 className="display text-[var(--ivory)] mb-3" style={{ fontSize: "1.8rem" }}>
                      You&apos;re on the list.
                    </h3>
                    <p className="text-sm font-light leading-relaxed" style={{ color: "var(--ivory-dim)" }}>
                      We&apos;ll notify you when the first piece is published. No frequency commitments. Unsubscribe at any time.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="display text-[var(--ivory)] mb-2" style={{ fontSize: "1.5rem" }}>
                      Be notified when we publish.
                    </h3>
                    <p className="text-sm font-light leading-relaxed mb-8" style={{ color: "var(--ivory-dim)" }}>
                      Occasional, substantive. No marketing. Sent directly to your inbox when a new piece is ready.
                    </p>
                    <form onSubmit={e => { e.preventDefault(); setSubscribed(true); }} className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="eyebrow" style={{ fontSize: "0.52rem", color: "var(--ivory-faint)" }}>Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="you@company.com"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className="px-4 py-3.5 text-sm font-light outline-none transition-all duration-240"
                          style={{ background: "var(--bg)", border: "1px solid var(--rule)", color: "var(--ivory)", borderRadius: "2px" }}
                          onFocus={e => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                          onBlur={e => { e.currentTarget.style.borderColor = "var(--rule)"; }}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">Notify Me</button>
                    </form>
                    <p className="text-xs font-light mt-4" style={{ color: "var(--ivory-faint)" }}>
                      No spam. Unsubscribe at any time.
                    </p>
                  </>
                )}
              </div>

              {/* Pull quote */}
              <div className="pl-6" style={{ borderLeft: "2px solid var(--gold)" }}>
                <p
                  className="display text-[var(--ivory)] mb-4 leading-relaxed"
                  style={{ fontStyle: "italic", fontSize: "1.15rem" }}
                >
                  &ldquo;F&amp;B margin is not a hospitality problem. It is an operating discipline problem — and it is solvable.&rdquo;
                </p>
                <p className="eyebrow" style={{ fontSize: "0.5rem", color: "var(--ivory-faint)" }}>
                  Ryan Fernandes · Founder, Fern Hospitality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
