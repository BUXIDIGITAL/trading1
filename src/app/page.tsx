import Image from "next/image";
import Link from "next/link";

const affiliatePlatforms = [
  {
    name: "Mizar",
    tagline: "Social Copy-Trading",
    description: "Mirror pro desks with programmable risk caps and granular logs.",
    href: "https://mizar.com/?via=buxi",
  },
  {
    name: "3Commas",
    tagline: "Bot Automations",
    description: "Stack grid, DCA, and smart trailing bots with BUXI guardrails.",
    href: "https://3commas.io/?c=buxidigital",
  },
  {
    name: "Pionex",
    tagline: "Exchange Native",
    description: "Deploy exchange-native bots with institutional liquidity routing.",
    href: "https://www.pionex.com/en-US/sign/ref/buxi",
  },
];

const highlightSections = [
  {
    title: "Signal Studio",
    copy: "Visualize volatility filters and trigger trees in a single pane.",
    stat: "< 45s",
    statLabel: "to sanity check a new signal",
    image: "/assets/systems-dashboard.svg",
  },
  {
    title: "Execution Relay",
    copy: "Route orders across venues with latency-aware throttles.",
    stat: "9 venues",
    statLabel: "reviewed for uptime and slippage",
    image: "/assets/network-glow.svg",
  },
  {
    title: "Clarity Reports",
    copy: "Share win-rate, drawdown, and commentary in one tap.",
    stat: "30+",
    statLabel: "pre-built reporting templates",
    image: "/assets/assistant-interface.svg",
  },
];

const marqueeItems = [
  "MIZAR",
  "3COMMAS",
  "PIONEX",
  "BULLETIN FEEDS",
  "SYSTEMS LAB",
  "RISK DESK",
];

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-28">
      <section className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-8 sm:p-10 lg:p-14">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 -z-10 opacity-70 lg:block"
          aria-hidden
        >
          <Image
            src="/assets/network-glow.svg"
            alt="Neon network visualization"
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
        </div>
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/60">
              Smarter Systems · Honest Automation
            </span>
            <h1 className="font-playfair text-4xl leading-tight text-white text-balance max-w-xl sm:text-5xl lg:text-6xl lg:max-w-2xl">
              Automation that feels human, performs like code.
            </h1>
            <p className="max-w-xl text-base text-white/70">
              BUXI DIGITAL fuses transparent automation with rapid-fire education. Traders see the why behind every move—and teams scale trust along with performance.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/trading-assistant"
                className="button-glow rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-black shadow-[0_0_34px_rgba(57,255,20,0.35)] transition hover:bg-(--accent)/90"
              >
                Launch Assistant Demo
              </Link>
              <Link
                href="/systems"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-(--cyan) hover:text-white"
              >
                Review Systems
              </Link>
            </div>
            <div className="card-outline mt-8 grid gap-6 rounded-3xl bg-black/40 p-6 sm:grid-cols-3">
              {[
                { label: "Signals Shipped", value: "12.7K" },
                { label: "Avg. Win Rate", value: "68%" },
                { label: "Automation Hours Saved", value: "4.6M" },
              ].map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                    {metric.label}
                  </p>
                  <p className="text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative -mx-2 rounded-4xl border border-white/10 bg-black/50 p-4 sm:-mx-4">
            <div className="absolute inset-0 bg-linear-to-br from-(--cyan)/15 via-transparent to-(--accent)/20" aria-hidden />
            <Image
              src="/assets/assistant-interface.svg"
              alt="BUXI assistant dashboard"
              width={720}
              height={540}
              className="relative h-full w-full rounded-3xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        {highlightSections.map((item) => (
          <article
            key={item.title}
            className="glow-hover flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-black/50 p-6"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/5">
              <Image
                src={item.image}
                alt={item.title}
                width={480}
                height={320}
                className="h-44 w-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-(--cyan)">
                {item.stat}
              </p>
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="text-sm text-white/60">{item.copy}</p>
            </div>
            <span className="mt-auto text-[11px] uppercase tracking-[0.35em] text-white/35">
              {item.statLabel}
            </span>
          </article>
        ))}
      </section>

      <section className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 py-6">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((label, index) => (
            <span key={`${label}-${index}`} className="text-sm">
              {label}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-white/50">
            Ecosystem Partners
          </span>
          <h2 className="font-playfair text-3xl text-white sm:text-4xl">
            Bring your favorite platforms. We add accountability.
          </h2>
          <p className="max-w-xl text-sm text-white/65">
            Each partner is screened for custody policies, execution quality, and API resilience. Pair their strengths with BUXI guardrails to keep every move audit-ready.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {affiliatePlatforms.map((platform) => (
              <Link
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-outline flex h-full flex-col gap-3 rounded-2xl bg-white/5 p-4"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-(--cyan)">
                  {platform.tagline}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {platform.name}
                </h3>
                <p className="text-sm text-white/60">{platform.description}</p>
                <span className="mt-auto text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                  Open Platform ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-black/60 p-6">
          <div className="absolute inset-0 bg-linear-to-tr from-(--accent)/20 via-transparent to-(--cyan)/20" aria-hidden />
          <Image
            src="/assets/systems-dashboard.svg"
            alt="BUXI systems dashboard"
            width={820}
            height={600}
            className="relative h-full w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="grid gap-10 rounded-4xl border border-white/10 bg-white/5 p-8 md:grid-cols-[1fr_0.9fr] md:p-12">
        <div className="space-y-5">
          <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-white/50">
            Learn Faster
          </span>
          <h2 className="font-playfair text-3xl text-white">
            Content drops that keep the desk aligned.
          </h2>
          <p className="text-sm text-white/65">
            Tap into quick-hit explainers before automation goes live. BUXI blends AI summaries with human sign-off so every member grasps the narrative behind the signal.
          </p>
          <div className="grid gap-3">
            {[
              "Daily pulse with macro + on-chain context",
              "Automation playbooks with risk tiers",
              "Community-ready slides and exports",
            ].map((bullet) => (
              <div key={bullet} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-(--accent)" />
                <span className="text-sm text-white/60">{bullet}</span>
              </div>
            ))}
          </div>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-(--cyan) transition hover:text-(--accent)"
          >
            Browse the Learn hub ↗
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60">
          <Image
            src="/assets/network-glow.svg"
            alt="Neon data layers"
            width={720}
            height={520}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="text-center">
        <h2 className="font-playfair text-4xl text-white">Ready to brief your community like a pro desk?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60">
          Spin up the BUXI Trading Assistant, connect your preferred venue, and start sharing automation playbooks that inspire confidence.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/trading-assistant"
            className="button-glow rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-black transition hover:bg-(--accent)/90"
          >
            Join the Assistant
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-(--cyan) hover:text-white"
          >
            Meet BUXI DIGITAL
          </Link>
        </div>
      </section>
    </div>
  );
}
