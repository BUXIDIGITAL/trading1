import type { Metadata } from "next";
import Image from "next/image";
import { SignupForm } from "@/components/signup-form";

export const metadata: Metadata = {
  title: "Trading Assistant",
  description:
    "Explore the BUXI DIGITAL support kit—daily briefs, onboarding checklists, and community-ready updates for responsible automation.",
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
            Package automation insight into ready-to-use client updates.
          </h1>
          <p className="text-lg text-white/70">
            The Trading Assistant isn&apos;t a secret dashboard—it&apos;s a support kit. Use it to brief communities, track automation changes, and answer the same questions once instead of a hundred times.
          </p>
          <ul className="space-y-4 text-sm text-white/65">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-(--accent)" />
              <span>Daily or weekly bulletins that cover macro context, order-flow notes, and the bots you&apos;re monitoring.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-(--accent)" />
              <span>Onboarding scripts that explain allocation tiers, risk controls, and when to pause copy trading.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-(--accent)" />
              <span>Ready-to-share updates for affiliates so everyone sees performance and payouts the same way.</span>
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
        {["Brief", "Onboard", "Report"].map((mode) => (
          <div key={mode} className="glow-hover flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/3 p-6">
            <h2 className="text-xl font-semibold text-white">{mode}</h2>
            <p className="text-sm text-white/60">
              {mode === "Brief"
                ? "Send macro notes, trade adjustments, and affiliate promos in one consistent format."
                : mode === "Onboard"
                ? "Deliver checklists for exchange APIs, 2FA, and risk agreements before anyone copies a trade."
                : "Log weekly performance, payouts, and reminders so compliance and community stay in sync."}
            </p>
          </div>
        ))}
      </section>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-xs text-white/60">
        <strong className="text-white">Reminder:</strong> The Trading Assistant shares educational content only. It does not execute trades or offer financial advice. Always assess your own risk and consult a licensed professional where required.
      </div>
    </div>
  );
}
