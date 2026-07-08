"use client";

import { useState } from "react";

const propertyTypes = ["Luxury Hotel", "Ownership Group / Investor", "Multi-Outlet Property", "Premium Suite / Venue", "Other"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", propertyType: "", message: "" });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-48 pb-24" style={{ background: "var(--bg)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(30,64,48,0.45) 0%, transparent 70%)" }}
        />
        <div className="container relative">
          <p className="eyebrow mb-10">Get in Touch</p>
          <h1
            className="display text-[var(--ivory)]"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)", maxWidth: "16ch", lineHeight: 1.05 }}
          >
            Let&apos;s talk about your F&amp;B performance.
          </h1>
        </div>
        <hr className="rule mt-24" />
      </section>

      {/* Form section */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className="grid md:grid-cols-12 gap-16 md:gap-8">
            {/* Info */}
            <div className="md:col-span-4">
              <div className="flex flex-col gap-10">
                <div>
                  <p className="eyebrow mb-4" style={{ fontSize: "0.55rem", color: "var(--ivory-faint)" }}>Email</p>
                  <a href="mailto:hello@fernhospitality.com" className="font-light transition-colors duration-240 hover:text-[var(--gold)]" style={{ color: "var(--ivory-dim)" }}>
                    hello@fernhospitality.com
                  </a>
                </div>
                <div>
                  <p className="eyebrow mb-4" style={{ fontSize: "0.55rem", color: "var(--ivory-faint)" }}>Location</p>
                  <p className="font-light" style={{ color: "var(--ivory-dim)" }}>New York City</p>
                </div>

                <hr className="rule" />

                <div className="flex flex-col gap-4">
                  {["Initial call is confidential and without obligation", "We respond within one business day", "Diagnostic scope discussed and agreed before any engagement"].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-[var(--gold)] text-xs mt-1 flex-shrink-0">◆</span>
                      <span className="text-sm font-light leading-relaxed" style={{ color: "var(--ivory-dim)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-7 md:col-start-6">
              {submitted ? (
                <div className="py-16">
                  <h2 className="display text-[var(--ivory)] mb-4" style={{ fontSize: "2.5rem" }}>Thank you.</h2>
                  <p className="font-light leading-relaxed" style={{ color: "var(--ivory-dim)", maxWidth: "40ch" }}>
                    We&apos;ve received your inquiry and will be in touch within one business day. All conversations are held in strict confidence.
                  </p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-7">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { label: "Full Name", key: "name", type: "text", placeholder: "Your name", required: true },
                      { label: "Email", key: "email", type: "email", placeholder: "you@company.com", required: true },
                      { label: "Company / Property", key: "company", type: "text", placeholder: "Property or company name", required: false },
                    ].map(f => (
                      <div key={f.key} className={`flex flex-col gap-2 ${f.key === "company" ? "md:col-span-2" : ""}`}>
                        <label className="eyebrow" style={{ fontSize: "0.52rem", color: "var(--ivory-faint)" }}>
                          {f.label}{f.required && <span className="text-[var(--gold)] ml-1">*</span>}
                        </label>
                        <input
                          required={f.required}
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.key as keyof typeof form]}
                          onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                          className="px-4 py-3.5 text-sm font-light outline-none transition-all duration-240"
                          style={{
                            background: "var(--bg-2)",
                            border: "1px solid var(--rule)",
                            color: "var(--ivory)",
                            borderRadius: "2px",
                          }}
                          onFocus={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(169,132,77,0.08)"; }}
                          onBlur={e => { e.currentTarget.style.borderColor = "var(--rule)"; e.currentTarget.style.boxShadow = "none"; }}
                        />
                      </div>
                    ))}

                    <div className="flex flex-col gap-2">
                      <label className="eyebrow" style={{ fontSize: "0.52rem", color: "var(--ivory-faint)" }}>Property Type</label>
                      <select
                        value={form.propertyType}
                        onChange={e => setForm({ ...form, propertyType: e.target.value })}
                        className="px-4 py-3.5 text-sm font-light outline-none transition-all duration-240 appearance-none"
                        style={{ background: "var(--bg-2)", border: "1px solid var(--rule)", color: form.propertyType ? "var(--ivory)" : "var(--ivory-faint)", borderRadius: "2px" }}
                      >
                        <option value="">Select type</option>
                        {propertyTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="eyebrow" style={{ fontSize: "0.52rem", color: "var(--ivory-faint)" }}>
                      Message <span className="text-[var(--gold)]">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Tell us about your property and what you'd like to explore..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="px-4 py-3.5 text-sm font-light outline-none transition-all duration-240 resize-none"
                      style={{ background: "var(--bg-2)", border: "1px solid var(--rule)", color: "var(--ivory)", borderRadius: "2px" }}
                      onFocus={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(169,132,77,0.08)"; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "var(--rule)"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                  </div>

                  <div>
                    <button type="submit" className="btn btn-primary">Submit Inquiry</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
