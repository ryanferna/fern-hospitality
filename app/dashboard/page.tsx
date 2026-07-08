"use client";

import { useState } from "react";

const weeklyRevenue = [
  { day: "Mon", revenue: 3200, covers: 88, target: 3500 },
  { day: "Tue", revenue: 2800, covers: 72, target: 3000 },
  { day: "Wed", revenue: 3600, covers: 96, target: 3500 },
  { day: "Thu", revenue: 4100, covers: 112, target: 4000 },
  { day: "Fri", revenue: 5800, covers: 148, target: 5500 },
  { day: "Sat", revenue: 7200, covers: 184, target: 7000 },
  { day: "Sun", revenue: 4320, covers: 118, target: 4500 },
];

const categoryRevenue = [
  { name: "Food", amount: 22800, pct: 68 },
  { name: "Drinks", amount: 7200, pct: 21 },
  { name: "Events", amount: 2800, pct: 8 },
  { name: "Other", amount: 1000, pct: 3 },
];

const topItems = [
  { name: "28-Day Aged Ribeye", sold: 62, revenue: 2356 },
  { name: "Pan-Roasted Cod", sold: 54, revenue: 1404 },
  { name: "Seared Scallops", sold: 48, revenue: 888 },
  { name: "Chocolate Fondant", sold: 76, revenue: 722 },
  { name: "Fern Spritz", sold: 94, revenue: 940 },
];

const kpis = [
  { label: "Revenue this week", value: "£31,020", change: "+8.4%", up: true },
  { label: "Total covers", value: "818", change: "+6.1%", up: true },
  { label: "Avg revenue / cover", value: "£37.92", change: "+2.1%", up: true },
  { label: "Labour cost %", value: "28.4%", change: "-1.2%", up: false },
];

const maxRevenue = Math.max(...weeklyRevenue.map((d) => d.revenue));

export default function DashboardPage() {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[var(--fern-dark)]">Revenue Dashboard</h1>
          <p className="text-[var(--muted)] mt-1">Week of 19 May 2026 · Live data</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-[var(--muted)]">Live</span>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white border border-[var(--fern-light)] rounded-xl p-5">
            <p className="text-xs text-[var(--muted)] mb-1">{k.label}</p>
            <p className="text-2xl font-bold text-[var(--fern-dark)]">{k.value}</p>
            <p className={`text-xs font-medium mt-1 ${k.up ? "text-green-600" : "text-red-500"}`}>
              {k.change} vs last week
            </p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {/* Bar chart */}
        <div className="md:col-span-2 bg-white border border-[var(--fern-light)] rounded-2xl p-6">
          <h2 className="font-semibold text-[var(--fern-dark)] mb-1">Daily Revenue vs Target</h2>
          <p className="text-xs text-[var(--muted)] mb-6">This week</p>
          <div className="flex items-end gap-3 h-48">
            {weeklyRevenue.map((d, i) => {
              const barH = Math.round((d.revenue / maxRevenue) * 100);
              const targetH = Math.round((d.target / maxRevenue) * 100);
              const isHovered = hoveredDay === i;
              return (
                <div
                  key={d.day}
                  className="flex-1 flex flex-col items-center gap-1 relative"
                  onMouseEnter={() => setHoveredDay(i)}
                  onMouseLeave={() => setHoveredDay(null)}
                >
                  {isHovered && (
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[var(--fern-dark)] text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap z-10 shadow-lg">
                      <p className="font-semibold">£{d.revenue.toLocaleString()}</p>
                      <p className="text-green-200">{d.covers} covers</p>
                    </div>
                  )}
                  <div className="w-full flex items-end gap-0.5 h-44">
                    {/* Target line marker */}
                    <div className="flex-1 flex flex-col justify-end relative">
                      <div
                        className="w-full rounded-t-md transition-all duration-200"
                        style={{
                          height: `${barH}%`,
                          backgroundColor: d.revenue >= d.target ? "var(--fern)" : "var(--gold)",
                        }}
                      />
                      {/* target marker */}
                      <div
                        className="absolute w-full border-t-2 border-dashed border-red-400 opacity-60"
                        style={{ bottom: `${targetH}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-[var(--muted)]">{d.day}</span>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-4 text-xs text-[var(--muted)]">
            <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm bg-[var(--fern)]" /> Met target</span>
            <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm bg-[var(--gold)]" /> Below target</span>
            <span className="flex items-center gap-1"><span className="inline-block w-4 border-t-2 border-dashed border-red-400" /> Target</span>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="bg-white border border-[var(--fern-light)] rounded-2xl p-6">
          <h2 className="font-semibold text-[var(--fern-dark)] mb-1">Revenue by Category</h2>
          <p className="text-xs text-[var(--muted)] mb-6">This week</p>
          <div className="space-y-4">
            {categoryRevenue.map((c) => (
              <div key={c.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-[var(--foreground)]">{c.name}</span>
                  <span className="text-[var(--muted)]">£{c.amount.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-[var(--fern-light)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--fern)] rounded-full transition-all"
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
                <p className="text-xs text-[var(--muted)] mt-0.5 text-right">{c.pct}%</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-[var(--fern-light)]">
            <div className="flex justify-between text-sm font-semibold text-[var(--fern-dark)]">
              <span>Total</span>
              <span>£{categoryRevenue.reduce((a, c) => a + c.amount, 0).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top-selling items */}
      <div className="bg-white border border-[var(--fern-light)] rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--fern-light)]">
          <h2 className="font-semibold text-[var(--fern-dark)]">Top Performing Items</h2>
          <p className="text-xs text-[var(--muted)] mt-0.5">By revenue this week</p>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-[var(--fern-light)] text-[var(--fern-dark)]">
            <tr>
              <th className="text-left px-6 py-3 font-semibold">#</th>
              <th className="text-left px-4 py-3 font-semibold">Item</th>
              <th className="text-right px-4 py-3 font-semibold">Units sold</th>
              <th className="text-right px-6 py-3 font-semibold">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {topItems.map((item, i) => (
              <tr key={item.name} className={`border-t border-[var(--fern-light)] ${i % 2 === 1 ? "bg-[var(--background)]" : "bg-white"}`}>
                <td className="px-6 py-3 font-bold text-[var(--muted)]">{i + 1}</td>
                <td className="px-4 py-3 font-medium text-[var(--foreground)]">{item.name}</td>
                <td className="px-4 py-3 text-right text-[var(--muted)]">{item.sold}</td>
                <td className="px-6 py-3 text-right font-semibold text-[var(--fern-dark)]">£{item.revenue.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fixed cost callout */}
      <div className="mt-6 bg-[var(--gold-light)] border border-[var(--gold)] rounded-xl px-6 py-4 flex items-start gap-4">
        <span className="text-2xl">💡</span>
        <div>
          <p className="font-semibold text-[var(--fern-dark)]">Cost insight</p>
          <p className="text-sm text-[var(--muted)] mt-0.5">
            Labour cost is <strong>28.4%</strong> of revenue this week — down 1.2% from last week. Industry benchmark for full-service restaurants is 28–35%.
            Your current staffing mix is within range. Friday and Saturday remain your highest-margin days.
          </p>
        </div>
      </div>
    </div>
  );
}
