import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

const articles = [
  {
    slug: "intro-to-bots",
    title: "Intro to Bots",
    description:
      "Understand core automation vocabulary, where bots thrive, and how to set expectations before going live.",
    bullets: [
      "Glossary of core automation concepts and BUXI terminology.",
      "Checklists for sandbox testing before funds touch the system.",
      "Community prompts we use to kick off training sessions.",
    ],
  },
  {
    slug: "safe-copy-trading",
    title: "Safe Copy-Trading",
    description:
      "Evaluate signal providers, size your exposure, and design drawdown rules that protect community capital.",
    bullets: [
      "Due-diligence questionnaire for every partner signal.",
      "Position sizing matrix mapped to risk comfort levels.",
      "Escalation playbook for pausing or rotating providers.",
    ],
  },
  {
    slug: "ai-in-finance",
    title: "AI in Finance",
    description:
      "See how BUXI combines AI with human review to deliver explainable insights without opaque black-box risk.",
    bullets: [
      "Our standards for pairing human oversight with AI scoring.",
      "Case study outline on explainable automation rollouts.",
      "Checklist for compliance alignment when AI touches PnL.",
    ],
  },
];

const articleMap = new Map(articles.map((article) => [article.slug, article]));

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articleMap.get(params.slug);
  if (!article) {
    return {};
  }
  return {
    title: `Learn · ${article.title}`,
    description: article.description,
  };
}

export default function LearnArticlePage({ params }: { params: { slug: string } }) {
  const article = articleMap.get(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16 text-white">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-(--cyan)">Learn Resource</p>
        <h1 className="font-playfair text-4xl">{article.title}</h1>
        <p className="text-base text-white/70">{article.description}</p>
      </header>
      <div className="rounded-3xl border border-white/10 bg-white/4 p-8 text-sm text-white/65">
        <p className="mb-5">
          Full content is coming soon. Until then, use the highlights below as a directional outline for the playbook we are preparing.
        </p>
        <ul className="space-y-3">
          {article.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-(--accent)" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="/learn"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-(--cyan) transition hover:text-(--accent)"
      >
        ← Back to Learn Hub
      </Link>
    </div>
  );
}
