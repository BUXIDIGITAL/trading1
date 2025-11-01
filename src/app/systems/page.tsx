import type { Metadata } from "next";
import Link from "next/link";

const platformDetails = [
  {
    name: "Mizar",
    focus: "Performance-based copy trading",
    bullets: [
      "Pay only when strategies deliver profit; fees scale 5%–50% of follower gains.",
      "Marketplace stats show profit %, drawdown, and risk tiers before you mirror trades.",
      "STAR referral programme pays up to 45% of trading commissions for the life of each invite.",
    ],
    learnLink: "/learn/intro-to-bots",
    external: "https://mizar.com/?via=buxi",
  },
  {
    name: "3Commas",
    focus: "Automation suite & strategy marketplace",
    bullets: [
      "Run DCA, grid, or TradingView signal bots with granular take-profit and stop controls.",
      "Copy marketplace leaders across 15+ exchanges; review win rate and drawdown history.",
      "Earn 25%–40% recurring commission on subscriptions through the affiliate dashboard.",
    ],
    learnLink: "/learn/intro-to-bots",
    external: "https://3commas.io/?c=buxidigital",
  },
  {
    name: "Pionex",
    focus: "Exchange-native bots",
    bullets: [
      "16 built-in bots (grid, DCA, arbitrage) with 0.05% trading fees and guided setup wizards.",
      "No API juggling—verify KYC, deposit funds, and launch strategies straight from the exchange.",
      "Referral rebates pay 20% on spot and 15% on futures trades for every community member you invite.",
    ],
    learnLink: "/learn/intro-to-bots",
    external: "https://www.pionex.com/en-US/sign/ref/buxi",
  },
];

export const metadata: Metadata = {
  title: "Platforms",
  description: "Compare the copy-trading and automation platforms we recommend before you invest time or capital.",
};

export default function SystemsPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-white/55">Platform Breakdown</p>
        <h1 className="font-playfair text-4xl text-white sm:text-5xl">Start with proven automation platforms.</h1>
        <p className="max-w-3xl text-sm text-white/65">
          We only highlight services we actively use. Compare fee models, referral upside, and risk controls so you can pick the stack that fits your goals.
        </p>
      </header>
      <div className="space-y-8">
        {platformDetails.map((platform) => (
          <article key={platform.name} className="rounded-3xl border border-white/10 bg-black/50 p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-(--cyan)/80">{platform.focus}</p>
                <h2 className="text-3xl font-playfair text-white">{platform.name}</h2>
              </div>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-white/60">
                <Link
                  href={platform.learnLink}
                  className="rounded-full border border-white/15 px-4 py-2 transition hover:border-(--accent) hover:text-(--accent)"
                >
                  Read setup guide ↗
                </Link>
                <Link
                  href={platform.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 transition hover:border-(--accent) hover:text-(--accent)"
                >
                  Visit platform ↗
                </Link>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {platform.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-(--accent)" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-white/70">
        <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-(--cyan)">Next steps</h2>
        <p className="mt-3">
          Run paper accounts on each service, log results in a simple spreadsheet, and once you are comfortable, invite your community using the affiliate links above. Pair your rollout with the resources in the <Link href="/learn" className="text-(--accent) transition hover:text-(--cyan)">Learn hub</Link> and share the <Link href="/tools/compounding-calculator" className="text-(--accent) transition hover:text-(--cyan)">compounding calculator</Link> to set expectations.
        </p>
      </section>
    </div>
  );
}
