"use client";

import { useMemo, useState } from "react";

const presets = [
  { label: "Conservative", monthlyReturn: 3 },
  { label: "Balanced", monthlyReturn: 5 },
  { label: "Aggressive", monthlyReturn: 8 },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function CompoundingCalculator() {
  const [startingCapital, setStartingCapital] = useState(10000);
  const [monthlyReturn, setMonthlyReturn] = useState(3);
  const [months, setMonths] = useState(12);
  const [monthlyContribution, setMonthlyContribution] = useState(0);

  const projection = useMemo(() => {
    const history: Array<{ month: number; balance: number; contribution: number; profit: number }> = [];
    let balance = startingCapital;

    for (let month = 1; month <= months; month += 1) {
      const profit = balance * (monthlyReturn / 100);
      balance += profit + monthlyContribution;
      history.push({ month, balance, contribution: monthlyContribution, profit });
    }

    return history;
  }, [startingCapital, monthlyReturn, monthlyContribution, months]);

  const finalBalance = projection.at(-1)?.balance ?? startingCapital;
  const totalContributions = monthlyContribution * months;
  const totalProfit = finalBalance - startingCapital - totalContributions;

  return (
    <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/4 p-6 md:grid-cols-[1fr_1.1fr] md:p-10">
      <form className="space-y-6 text-sm text-white/70">
        <div className="space-y-2">
          <label className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/50" htmlFor="startingCapital">
            Starting Capital
          </label>
          <input
            id="startingCapital"
            type="number"
            min={0}
            value={startingCapital}
            onChange={(event) => setStartingCapital(Number(event.target.value) || 0)}
            className="w-full rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-white outline-none ring-emerald-300/0 transition focus:ring-2"
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/50" htmlFor="monthlyReturn">
            Monthly Return (%)
          </label>
          <input
            id="monthlyReturn"
            type="number"
            min={0}
            step={0.1}
            value={monthlyReturn}
            onChange={(event) => setMonthlyReturn(Number(event.target.value) || 0)}
            className="w-full rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-white outline-none ring-emerald-300/0 transition focus:ring-2"
          />
          <div className="flex flex-wrap gap-3">
            {presets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => setMonthlyReturn(preset.monthlyReturn)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${monthlyReturn === preset.monthlyReturn ? "border-(--accent) bg-(--accent)/20 text-(--accent)" : "border-white/15 text-white/70 hover:border-(--accent) hover:text-(--accent)"}`}
              >
                {preset.label} · {preset.monthlyReturn}%
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/50" htmlFor="months">
            Months
          </label>
          <input
            id="months"
            type="number"
            min={1}
            max={60}
            value={months}
            onChange={(event) => setMonths(Number(event.target.value) || 1)}
            className="w-full rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-white outline-none ring-emerald-300/0 transition focus:ring-2"
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/50" htmlFor="monthlyContribution">
            Monthly Contribution
          </label>
          <input
            id="monthlyContribution"
            type="number"
            min={0}
            value={monthlyContribution}
            onChange={(event) => setMonthlyContribution(Number(event.target.value) || 0)}
            className="w-full rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-white outline-none ring-emerald-300/0 transition focus:ring-2"
          />
        </div>
      </form>

      <div className="space-y-6">
        <div className="grid gap-4 rounded-2xl border border-white/10 bg-black/50 p-6 text-sm text-white/70 sm:grid-cols-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">Final balance</p>
            <p className="mt-1 text-xl font-semibold text-white">{formatCurrency(finalBalance)}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">Total contributions</p>
            <p className="mt-1 text-xl font-semibold text-white">{formatCurrency(totalContributions)}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">Estimated profit</p>
            <p className="mt-1 text-xl font-semibold text-white">{formatCurrency(totalProfit)}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-(--cyan)">Month-by-month view</h2>
          <ul className="mt-4 max-h-72 space-y-3 overflow-y-auto pr-1 text-sm text-white/70">
            {projection.map((row) => (
              <li key={row.month} className="flex items-center justify-between gap-4 rounded-xl bg-white/5 px-4 py-3">
                <span className="text-xs uppercase tracking-[0.35em] text-white/45">M{row.month}</span>
                <span className="text-white/65">{formatCurrency(row.balance)}</span>
                <span className="text-white/50">profit {formatCurrency(row.profit)}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="rounded-2xl border border-white/10 bg-white/5 p-5 text-xs text-white/60">
          Reminder: projections assume profits are reinvested and no drawdowns occur. Continue to run paper trades, monitor risk, and consult a professional if you need regulated advice.
        </p>
      </div>
    </section>
  );
}
