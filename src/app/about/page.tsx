import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about BUXI DIGITAL's mission to build transparent trading automation.",
};

export default function AboutPage() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
      <section className="space-y-6">
        <h1 className="font-playfair text-4xl text-white sm:text-5xl">Automation for people, not hype.</h1>
        <p className="text-lg text-white/70">
          BUXI DIGITAL started with late nights reverse-engineering trading bots and automation tools from scratch. Every win came from persistence, patience, and a refusal to treat automation like a black box.
        </p>
        <p className="text-lg text-white/70">
          That learning curve shaped our mission: make financial automation understandable, safe, and beneficial for anyone willing to put in honest work. We build guides and systems that explain the why behind every move so traders and communities stay confident.
        </p>
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/4 p-6 text-sm text-white/70">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-(--cyan)">Vision</h2>
            <p className="mt-2 text-white/70">
              Build systems that make automation and opportunity accessible to more people—led by transparency, community, and trust.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-(--cyan)">Mission</h2>
            <p className="mt-2 text-white/70">
              Bridge the gap between technology and people with simple workflows, patient education, and tools that reward honesty, persistence, and good work.
            </p>
          </div>
        </div>
        <blockquote className="rounded-3xl border border-(--accent)/20 bg-white/5 p-6 text-white">
          <p className="font-playfair text-2xl italic text-white">
            “Success isn’t a shortcut—it’s doing the work and helping others win too.”
          </p>
          <footer className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50">Founder, BUXI DIGITAL</footer>
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
        <div className="rounded-3xl border border-white/10 bg-white/4 p-6 text-sm text-white/70">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-(--cyan)">What guides our work</h2>
          <ul className="space-y-2">
            <li>Keep automation observable—if you can’t explain it, you shouldn’t run it.</li>
            <li>Teach as you build—education keeps clients and communities aligned.</li>
            <li>Lead with integrity—document results, disclose risks, and share credit.</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
