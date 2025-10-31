import type { Metadata } from "next";
import Image from "next/image";
import { SignupForm } from "@/components/signup-form";

export const metadata: Metadata = {
  title: "Trading Assistant",
  description:
    "Meet the BUXI Trading Assistant—your educational AI for insights, accountability, and responsible automation onboarding.",
};

export default function TradingAssistantPage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-white/55">
            BUXI Trading Assistant
          </p>
          <h1 className="font-playfair text-4xl text-white sm:text-5xl">
            Your educational AI for market insights.
          </h1>
          <p className="text-lg text-white/70">
            The BUXI Assistant demystifies trade ideas, risk parameters, and automation flows in plain language. Whether you are onboarding a cohort or running a private desk, it keeps everyone aligned with real-time context.
          </p>
          <ul className="space-y-4 text-sm text-white/65">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-(--accent)" />
              <span>
                Daily market briefs with macro, on-chain, and microstructure highlights tailored to your watchlist.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-(--accent)" />
              <span>
                Signal breakdowns that show trigger logic, risk buffers, and suggested allocation tiers before you deploy.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-(--accent)" />
              <span>
                Compliance-safe transcripts you can share with clients or communities to maintain full transparency.
              </span>
            </li>
          </ul>
          <SignupForm />
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 -z-10 blur-3xl bg-(--cyan)/20" aria-hidden />
          <div className="card-outline relative overflow-hidden rounded-4xl border-white/10 bg-black/50">
            <div className="absolute inset-0 bg-linear-to-br from-(--cyan)/20 via-transparent to-(--accent)/20" />
            <Image
              src="/assets/hologram-grid.svg"
              alt="Holographic trading assistant"
              width={820}
              height={620}
              className="relative h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        {["Coach Mode", "Insights Mode", "Compliance Mode"].map((mode) => (
          <div
            key={mode}
            className="glow-hover flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/3 p-6"
          >
            <h2 className="text-xl font-semibold text-white">{mode}</h2>
            <p className="text-sm text-white/60">
              {mode === "Coach Mode"
                ? "Step-by-step guidance for new traders, from account setup checklists to first automation go-lives."
                : mode === "Insights Mode"
                ? "Summarizes macro drivers, order-flow skews, and sentiment curves so you can adjust systems faster."
                : "Automatically logs Q&A, distributes disclosures, and archives conversations for audits."}
            </p>
          </div>
        ))}
      </section>

      <div className="sticky-disclaimer fixed bottom-6 left-1/2 z-30 w-[calc(100%-3rem)] max-w-3xl -translate-x-1/2 rounded-2xl px-6 py-5 text-xs text-white/60">
  <strong className="text-white">Disclaimer:</strong> The BUXI Trading Assistant provides educational
        content only. It does not execute trades or offer financial advice. Always assess your own risk and consult a licensed professional where required.
      </div>
    </div>
  );
}
