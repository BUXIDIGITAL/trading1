import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "Choose a platform",
    description:
      "Pick between Mizar, 3Commas, or Pionex based on fees, automation style, and referral upside.",
  },
  {
    title: "Learn the safeguards",
    description:
      "Use our quick guides to set risk caps, run paper trades, and document drawdown triggers before you ever deploy cash.",
  },
  {
    title: "Share and scale",
    description:
      "Publish results, invite referrals, and use the compounding calculator to plan sustainable growth.",
  },
];

const platforms = [
  {
    name: "Mizar",
    focus: "Copy trading marketplace",
    summary:
      "Performance-based fees, AI smart bots, and STAR referrals paying up to 45% of commissions.",
    link: "https://mizar.com/?via=buxi",
  },
  {
    name: "3Commas",
    focus: "Bot automations",
    summary:
      "DCA, grid, and signal bots with a 1M+ user marketplace and lifetime affiliate revenue share.",
    link: "https://3commas.io/?c=buxidigital",
  },
  {
    name: "Pionex",
    focus: "Exchange-native bots",
    summary:
      "16 built-in bots, 0.05% fees, and rebate links paying 20% on spot and 15% on futures volume.",
    link: "https://www.pionex.com/en-US/sign/ref/buxi",
  },
];

const learnCards = [
  {
    slug: "intro-to-bots",
    title: "Intro to Bots",
    copy: "Compare Mizar, 3Commas, and Pionex with setup checklists and compounding scenarios.",
  },
  {
    slug: "safe-copy-trading",
    title: "Safe Copy-Trading",
    copy: "Run due diligence, structure payouts, and capture tax deductions as a lean operator.",
  },
  {
    slug: "ai-in-finance",
    title: "AI in Finance",
    copy: "See how BuXiAi assistants handle intake, email loops, and affiliate reporting for you.",
  },
];

const benefits = [
  "Work remotely with nothing more than a laptop and secure exchange APIs.",
  "Keep overhead low—no inventory, no support tickets, only systems that scale.",
  "Claim deductions on home office, connectivity, travel, and tooling in Canada or the U.S.",
  "Layer trading returns with lifetime affiliate commissions to smooth income swings.",
];

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-28">
      <section className="relative overflow-hidden rounded-4xl border border-white/10 bg-black/70 px-6 py-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/hero-grid.svg"
            alt="Futuristic trading grid"
            fill
            priority
            className="object-cover opacity-80"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#39FF14/20%,transparent_60%)]" aria-hidden />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,10,16,0.82),rgba(3,3,6,0.94))]" aria-hidden />
        </div>
        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/60">
              Bot Trading · Automation Systems · Education
            </span>
            <h1 className="font-playfair text-4xl leading-tight text-white text-balance max-w-2xl sm:text-5xl lg:text-6xl">
              Your Trusted Bot Trading Playbook
            </h1>
            <p className="max-w-xl text-base text-white/70">
              BUXI DIGITAL keeps bot trading simple: curated platforms, plain-language checklists, and calculators that show exactly how recurring automation and referral income can stack up.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/systems"
                className="button-glow rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-black shadow-[0_0_34px_rgba(57,255,20,0.35)] transition hover:bg-(--accent)/90"
              >
                Compare Platforms
              </Link>
              <Link
                href="/tools/compounding-calculator"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-(--cyan) hover:text-white"
              >
                Use the Calculator
              </Link>
            </div>
            <div className="card-outline mt-8 grid gap-6 rounded-3xl bg-black/35 p-6 sm:grid-cols-3">
              {[
                { label: "Return Range", value: "2%–10% monthly" },
                { label: "Affiliate Share", value: "Up to 45%" },
                { label: "Time to Launch", value: "< 1 hour" },
              ].map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">{metric.label}</p>
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_top,#39FF14/14%,transparent_70%)] blur-3xl opacity-60" aria-hidden />
            <div className="relative overflow-hidden rounded-[2.8rem] border border-white/15 bg-black/65 p-4">
              <div className="absolute inset-0 bg-linear-to-br from-(--cyan)/15 via-transparent to-(--accent)/18" aria-hidden />
              <Image
                src="/assets/assistant-interface.svg"
                alt="Trading resources"
                width={720}
                height={540}
                className="relative h-full w-full rounded-3xl object-cover shadow-[0_0_55px_rgba(17,255,138,0.18)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 rounded-4xl border border-white/10 bg-white/4 p-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="flex flex-col gap-3 rounded-3xl border border-white/5 bg-black/40 p-6">
            <span className="text-[11px] uppercase tracking-[0.35em] text-(--cyan)">Step {String(index + 1).padStart(2, "0")}</span>
            <h2 className="text-lg font-semibold text-white">{step.title}</h2>
            <p className="text-sm text-white/65">{step.description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/50">Featured Platforms</p>
            <h2 className="font-playfair text-3xl text-white sm:text-4xl">Start with tools that already work.</h2>
            <p className="max-w-2xl text-sm text-white/65">
              No new dashboards, just proven services. Launch a bot, follow a leader, or build an affiliate funnel with the checks we use daily.
            </p>
          </div>
          <Link
            href="/systems"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-(--cyan) transition hover:text-(--accent)"
          >
            View platform breakdown ↗
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {platforms.map((platform) => (
            <Link
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-black/50 p-6 transition hover:border-(--accent)/60 hover:shadow-[0_0_28px_rgba(57,255,20,0.35)]"
            >
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.35em] text-(--cyan)/80">{platform.focus}</span>
                <h3 className="text-xl font-semibold text-white transition group-hover:text-(--accent)">{platform.name}</h3>
              </div>
              <p className="text-sm text-white/65">{platform.summary}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/60 transition group-hover:text-(--accent)">
                Open platform ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-10 rounded-4xl border border-white/10 bg-white/4 p-8 md:grid-cols-[1.15fr_0.85fr] md:p-12">
        <div className="space-y-5">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/50">Why this model works</p>
          <h2 className="font-playfair text-3xl text-white sm:text-4xl">Lean business. Real upside.</h2>
          <p className="text-sm text-white/65">
            Running an affiliate-first trading operation means flexible hours, remote work, and generous tax write-offs. The payoff: stacked income streams without managing customer support.
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-(--accent)" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-6">
          <div className="absolute inset-0 bg-linear-to-tr from-(--accent)/20 via-transparent to-(--cyan)/20" aria-hidden />
          <Image
            src="/assets/network-glow.svg"
            alt="Lifestyle and tax advantages"
            width={720}
            height={520}
            className="relative h-full w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="rounded-4xl border border-white/10 bg-black/55 p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/55">Plan returns</p>
            <h2 className="font-playfair text-3xl text-white sm:text-4xl">Model compounding in minutes.</h2>
            <p className="text-sm text-white/65">
              Use our calculator to project growth from conservative (~3% monthly) to aggressive (~8% monthly) bot returns. Adjust capital, monthly gains, and contributions to see where you can land.
            </p>
            <Link
              href="/tools/compounding-calculator"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-(--cyan) transition hover:text-(--accent)"
            >
              Launch compounding calculator ↗
            </Link>
          </div>
          <div className="card-outline rounded-3xl border-white/10 bg-black/40 p-6">
            <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">Scenario</p>
                <p className="text-lg font-semibold text-white">$10K starting · 3% monthly</p>
                <p className="mt-1 text-white/60">≈ $14.3K after 12 months (+43% return)</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">Scenario</p>
                <p className="text-lg font-semibold text-white">$10K starting · 8% monthly</p>
                <p className="mt-1 text-white/60">≈ $25K after 12 months (+150% return)</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">Reminder</p>
                <p className="mt-1 text-white/60">
                  These examples assume profits are reinvested with no drawdowns. Always adjust for real-world risk and your own safeguards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/50">Learn with BUXI</p>
            <h2 className="font-playfair text-3xl text-white sm:text-4xl">Guides to keep your desk aligned.</h2>
            <p className="max-w-2xl text-sm text-white/65">
              Dive deeper into platform setup, copy-trading safety, and automation workflows. Each article includes PDF downloads if you want the full notes.
            </p>
          </div>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-(--cyan) transition hover:text-(--accent)"
          >
            Visit the Learn hub ↗
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {learnCards.map((card) => (
            <Link
              key={card.slug}
              href={`/learn/${card.slug}`}
              className="group flex h-full flex-col justify-between gap-4 rounded-3xl border border-white/10 bg-white/4 p-6 transition hover:border-(--accent)/60 hover:shadow-[0_0_28px_rgba(57,255,20,0.35)]"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white transition group-hover:text-(--accent)">{card.title}</h3>
                <p className="text-sm text-white/65">{card.copy}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/60 transition group-hover:text-(--accent)">
                Read guide ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="font-playfair text-4xl text-white">Keep automation honest and human.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60">
          Use the resources, share the calculators, and invite people into strategies that you can explain end-to-end. That’s how trust—and revenue—compound.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/trading-assistant"
            className="button-glow rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-black transition hover:bg-(--accent)/90"
          >
            See support options
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-(--cyan) hover:text-white"
          >
            Read our story
          </Link>
        </div>
      </section>
    </div>
  );
}
