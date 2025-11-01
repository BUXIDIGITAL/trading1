import type { Metadata } from "next";
import Link from "next/link";

const posts = [
  {
    slug: "intro-to-bots",
    eyebrow: "Automation Playbooks",
    title: "Intro to Bots",
    excerpt:
      "How we onboard traders to Mizar, 3Commas, and Pionex with no-drama setup steps, performance fees, and compounding examples.",
  },
  {
    slug: "safe-copy-trading",
    eyebrow: "Risk & Compliance",
    title: "Safe Copy-Trading",
    excerpt:
      "Structure a copy desk that balances community trust, provider diligence, and the tax advantages available to lean operators.",
  },
  {
    slug: "ai-in-finance",
    eyebrow: "Automation Systems",
    title: "AI in Finance",
    excerpt:
      "See how BuXiAi chat, voice, affiliate, and email loops snap together around a conversion-focused web stack.",
  },
];

export const metadata: Metadata = {
  title: "Learn",
  description: "Dive into BUXI DIGITAL's educational resources on automation, risk and AI.",
};

export default function LearnPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4 text-center">
  <h1 className="font-playfair text-4xl text-white">Learn with BUXI</h1>
        <p className="mx-auto max-w-2xl text-base text-white/65">
          A growing knowledge base for responsible automation. Subscribe to stay informed as we release long-form breakdowns, video walkthroughs, and community AMAs.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.title}
            href={`/learn/${post.slug}`}
            className="group relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/3 p-6 transition hover:border-(--accent)/60 hover:shadow-[0_0_28px_rgba(57,255,20,0.35)]"
          >
            <div className="space-y-3">
              {post.eyebrow && (
                <p className="text-[11px] uppercase tracking-[0.35em] text-(--cyan)/80">{post.eyebrow}</p>
              )}
              <h2 className="text-xl font-semibold text-white transition group-hover:text-(--accent)">
                {post.title}
              </h2>
              <p className="text-sm text-white/60">{post.excerpt}</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-(--cyan) transition group-hover:text-(--accent)">
              Read Preview
              <span aria-hidden>↗</span>
            </span>
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-(--accent)/10 opacity-0 transition group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </div>
  );
}
