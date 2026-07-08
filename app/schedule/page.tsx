"use client";

import { useState } from "react";

type ShiftTime = "Morning (7–15)" | "Afternoon (12–20)" | "Evening (17–23)" | "Off";

type StaffMember = {
  id: number;
  name: string;
  role: string;
  shifts: ShiftTime[];
  hoursPerWeek: number;
  hourlyRate: number;
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const shiftOptions: ShiftTime[] = ["Morning (7–15)", "Afternoon (12–20)", "Evening (17–23)", "Off"];
const shiftColors: Record<ShiftTime, string> = {
  "Morning (7–15)": "bg-amber-100 text-amber-800",
  "Afternoon (12–20)": "bg-blue-100 text-blue-800",
  "Evening (17–23)": "bg-purple-100 text-purple-800",
  "Off": "bg-gray-100 text-gray-400",
};

const shiftHours: Record<ShiftTime, number> = {
  "Morning (7–15)": 8,
  "Afternoon (12–20)": 8,
  "Evening (17–23)": 6,
  "Off": 0,
};

const initialStaff: StaffMember[] = [
  { id: 1, name: "Anya Patel", role: "Head Chef", hourlyRate: 22, hoursPerWeek: 0, shifts: ["Morning (7–15)", "Morning (7–15)", "Off", "Morning (7–15)", "Morning (7–15)", "Morning (7–15)", "Off"] },
  { id: 2, name: "James Okafor", role: "Sous Chef", hourlyRate: 18, hoursPerWeek: 0, shifts: ["Afternoon (12–20)", "Afternoon (12–20)", "Afternoon (12–20)", "Off", "Evening (17–23)", "Afternoon (12–20)", "Afternoon (12–20)"] },
  { id: 3, name: "Sofia Reyes", role: "Front of House", hourlyRate: 13.5, hoursPerWeek: 0, shifts: ["Evening (17–23)", "Evening (17–23)", "Evening (17–23)", "Evening (17–23)", "Off", "Evening (17–23)", "Evening (17–23)"] },
  { id: 4, name: "Tom Nguyen", role: "Bartender", hourlyRate: 14, hoursPerWeek: 0, shifts: ["Off", "Evening (17–23)", "Evening (17–23)", "Evening (17–23)", "Evening (17–23)", "Evening (17–23)", "Evening (17–23)"] },
  { id: 5, name: "Priya Singh", role: "Server", hourlyRate: 12, hoursPerWeek: 0, shifts: ["Afternoon (12–20)", "Off", "Afternoon (12–20)", "Afternoon (12–20)", "Afternoon (12–20)", "Evening (17–23)", "Afternoon (12–20)"] },
  { id: 6, name: "Chris Lee", role: "Server", hourlyRate: 12, hoursPerWeek: 0, shifts: ["Morning (7–15)", "Morning (7–15)", "Morning (7–15)", "Off", "Morning (7–15)", "Afternoon (12–20)", "Off"] },
  { id: 7, name: "Emma Walsh", role: "Events Coordinator", hourlyRate: 16, hoursPerWeek: 0, shifts: ["Morning (7–15)", "Morning (7–15)", "Afternoon (12–20)", "Morning (7–15)", "Morning (7–15)", "Off", "Off"] },
];

function calcHours(shifts: ShiftTime[]) {
  return shifts.reduce((acc, s) => acc + shiftHours[s], 0);
}

export default function SchedulePage() {
  const [staff, setStaff] = useState<StaffMember[]>(
    initialStaff.map((s) => ({ ...s, hoursPerWeek: calcHours(s.shifts) }))
  );
  const [editingCell, setEditingCell] = useState<{ staffId: number; dayIdx: number } | null>(null);

  function updateShift(staffId: number, dayIdx: number, shift: ShiftTime) {
    setStaff((prev) =>
      prev.map((s) => {
        if (s.id !== staffId) return s;
        const newShifts = [...s.shifts];
        newShifts[dayIdx] = shift;
        return { ...s, shifts: newShifts, hoursPerWeek: calcHours(newShifts) };
      })
    );
    setEditingCell(null);
  }

  const totalWeeklyCost = staff.reduce((acc, s) => acc + s.hoursPerWeek * s.hourlyRate, 0);
  const staffOnToday = staff.filter((s) => s.shifts[0] !== "Off").length;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[var(--fern-dark)]">Staff Schedule</h1>
          <p className="text-[var(--muted)] mt-1">Week of 19 May 2026</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-[var(--fern-light)] text-sm font-medium rounded-lg hover:bg-[var(--fern-light)] transition text-[var(--fern-dark)]">
            Export Rota
          </button>
          <button className="px-4 py-2 bg-[var(--fern)] text-white text-sm font-medium rounded-lg hover:bg-[var(--fern-dark)] transition">
            Publish
          </button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total staff", value: staff.length.toString(), icon: "👥" },
          { label: "On shift today", value: staffOnToday.toString(), icon: "✅" },
          { label: "Weekly hours", value: staff.reduce((a, s) => a + s.hoursPerWeek, 0).toString(), icon: "⏱️" },
          { label: "Weekly labour cost", value: `£${totalWeeklyCost.toFixed(0)}`, icon: "💷" },
        ].map((c) => (
          <div key={c.label} className="bg-white border border-[var(--fern-light)] rounded-xl p-4 flex items-center gap-3">
            <span className="text-2xl">{c.icon}</span>
            <div>
              <p className="text-xl font-bold text-[var(--fern-dark)]">{c.value}</p>
              <p className="text-xs text-[var(--muted)]">{c.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-3 mb-4 flex-wrap">
        {shiftOptions.map((s) => (
          <span key={s} className={`text-xs px-2.5 py-1 rounded-full font-medium ${shiftColors[s]}`}>{s}</span>
        ))}
      </div>

      {/* Schedule grid */}
      <div className="bg-white rounded-2xl border border-[var(--fern-light)] overflow-x-auto">
        <table className="w-full text-sm min-w-[700px]">
          <thead className="bg-[var(--fern-light)] text-[var(--fern-dark)]">
            <tr>
              <th className="text-left px-5 py-3 font-semibold w-44">Staff Member</th>
              <th className="text-left px-3 py-3 font-semibold w-28 hidden md:table-cell">Role</th>
              {days.map((d) => (
                <th key={d} className="text-center px-2 py-3 font-semibold">{d}</th>
              ))}
              <th className="text-center px-3 py-3 font-semibold hidden md:table-cell">Hrs</th>
              <th className="text-center px-3 py-3 font-semibold hidden md:table-cell">Cost</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((member, rowIdx) => (
              <tr key={member.id} className={`border-t border-[var(--fern-light)] ${rowIdx % 2 === 1 ? "bg-[var(--background)]" : "bg-white"}`}>
                <td className="px-5 py-3 font-medium text-[var(--foreground)]">{member.name}</td>
                <td className="px-3 py-3 text-xs text-[var(--muted)] hidden md:table-cell">{member.role}</td>
                {member.shifts.map((shift, dayIdx) => (
                  <td key={dayIdx} className="px-1 py-2 text-center relative">
                    {editingCell?.staffId === member.id && editingCell?.dayIdx === dayIdx ? (
                      <select
                        autoFocus
                        className="text-xs border border-[var(--fern)] rounded px-1 py-0.5 bg-white w-full"
                        value={shift}
                        onChange={(e) => updateShift(member.id, dayIdx, e.target.value as ShiftTime)}
                        onBlur={() => setEditingCell(null)}
                      >
                        {shiftOptions.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    ) : (
                      <button
                        onClick={() => setEditingCell({ staffId: member.id, dayIdx })}
                        className={`text-xs px-1.5 py-0.5 rounded-full font-medium w-full truncate max-w-[90px] ${shiftColors[shift]}`}
                        title={shift}
                      >
                        {shift === "Off" ? "Off" : shift.split(" ")[0]}
                      </button>
                    )}
                  </td>
                ))}
                <td className="px-3 py-3 text-center font-medium hidden md:table-cell">{member.hoursPerWeek}</td>
                <td className="px-3 py-3 text-center text-[var(--muted)] hidden md:table-cell">£{(member.hoursPerWeek * member.hourlyRate).toFixed(0)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border-t-2 border-[var(--fern-light)] bg-[var(--fern-light)]">
            <tr>
              <td className="px-5 py-3 font-semibold text-[var(--fern-dark)]" colSpan={2}>Totals</td>
              <td colSpan={7} />
              <td className="px-3 py-3 text-center font-semibold text-[var(--fern-dark)] hidden md:table-cell">{staff.reduce((a, s) => a + s.hoursPerWeek, 0)}</td>
              <td className="px-3 py-3 text-center font-semibold text-[var(--fern-dark)] hidden md:table-cell">£{totalWeeklyCost.toFixed(0)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="text-xs text-[var(--muted)] mt-3">Click any shift cell to change it.</p>
    </div>
  );
}
