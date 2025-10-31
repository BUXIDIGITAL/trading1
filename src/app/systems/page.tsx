import type { Metadata } from "next";
import Link from "next/link";

const systems = [
  {
    title: "Signal Architecture",
    description:
      "Layered volatility filters, liquidity weighting, and dynamic risk throttles translate market chaos into actionable automation. Every module is observable, so you can track trigger logic in real time.",
    href: "/learn",
  },
  {
    title: "Execution Orchestration",
    description:
      "From delta-neutral hedging to momentum swings, BUXI orchestration scripts balance latency and fees. Fail-safes revert to manual control, keeping your capital protected even when venues wobble.",
    href: "/learn",
  },
  {
    title: "Lifecycle Reporting",
    description:
      "Intuitive dashboards break down trade health, slippage, and drawdown recovery. Share exports with communities or stakeholders and keep automation compliant with emerging disclosure standards.",
    href: "/learn",
  },
];

export const metadata: Metadata = {
  title: "Systems",
  description: "Dive into BUXI DIGITAL's modular trading automation systems.",
};

export default function SystemsPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">
          Systems
        </p>
        <h1 className="font-playfair text-4xl text-white">Modular automation designed for resilience.</h1>
        <p className="max-w-3xl text-lg text-white/65">
          Each BUXI system is built with a compliance-first mindset. Combine our blocks to launch new revenue streams for your guild, hedge desk, or community—without sacrificing transparency.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-3">
        {systems.map((system, index) => (
          <article
            key={system.title}
            className="glow-hover relative flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/3 p-6 transition"
          >
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-(--cyan)">
                Block {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl font-semibold text-white">{system.title}</h2>
              <p className="text-sm text-white/60">{system.description}</p>
            </div>
            <Link
              href={system.href}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:text-(--accent)"
            >
              Learn More
              <span aria-hidden>→</span>
            </Link>
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-(--accent)/10" />
          </article>
        ))}
      </div>
    </div>
  );
}
