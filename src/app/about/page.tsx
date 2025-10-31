import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about BUXI DIGITAL's mission to build transparent trading automation.",
};

export default function AboutPage() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-start">
      <section className="space-y-6">
        <h1 className="font-playfair text-4xl text-white">Built for accountable traders and educators.</h1>
        <p className="text-lg text-white/70">
          BUXI DIGITAL began as an internal framework for managing automated strategies across multiple venues. We needed systems that kept every stakeholder—analysts, operators, and community members—in sync without drowning in dashboards.
        </p>
        <p className="text-lg text-white/70">
          Today we partner with trading desks, educators, and DAOs who demand the same standards. From compliance-ready reporting to educational playbooks, BUXI balances automation with the human context that keeps strategies sustainable.
        </p>
        <p className="text-lg text-white/70">
          We believe automation should empower thoughtful decision makers. Our tools elevate good judgment rather than replacing it, unlocking more time for scenario planning, relationship building, and innovation.
        </p>
        <blockquote className="rounded-3xl border border-(--accent)/20 bg-white/3 p-6 text-white">
          <p className="font-playfair text-2xl italic text-white">
            “Automation isn’t about shortcuts — it’s about smarter effort.”
          </p>
          <footer className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50">
            BUXI DIGITAL
          </footer>
        </blockquote>
      </section>
      <aside className="space-y-6">
        <div className="card-outline overflow-hidden rounded-4xl border-white/10 bg-black/50">
          <Image
            src="/assets/headshot-placeholder.svg"
            alt="BUXI DIGITAL founder placeholder"
            width={520}
            height={520}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/3 p-6 text-sm text-white/65">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-(--cyan)">
            Core values
          </h2>
          <ul className="space-y-2 text-white/70">
            <li>Transparency first—reporting every execution, win or loss.</li>
            <li>Education equals retention—clients stay when they understand.</li>
            <li>Security as a habit—least privilege from API to community roles.</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
