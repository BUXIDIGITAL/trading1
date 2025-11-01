import Link from "next/link";
import type { LearnArticle } from "./articles-data";

export function ArticleContent({ article }: { article: LearnArticle }) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-16 text-white">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-(--cyan)">{article.eyebrow ?? "Learn Resource"}</p>
        <h1 className="font-playfair text-4xl sm:text-5xl">{article.title}</h1>
        <p className="max-w-2xl text-base text-white/70">{article.description}</p>
      </header>

      {article.highlights && article.highlights.length > 0 && (
        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/4 p-6 text-sm sm:grid-cols-3">
          {article.highlights.map((item) => (
            <div key={item.label} className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">{item.label}</p>
              <p className="text-lg font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-8">
        {article.sections.map((section) => (
          <section
            key={section.heading}
            className="rounded-3xl border border-white/8 bg-black/50 p-8 shadow-[0_0_24px_rgba(17,255,138,0.08)]"
          >
            <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
            <p className="mt-4 text-sm text-white/65">{section.body}</p>
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-(--accent)" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {article.resource && (
        <Link
          href={article.resource.href}
          className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-(--cyan) transition hover:border-(--accent)/50 hover:text-(--accent)"
        >
          {article.resource.label} ↗
        </Link>
      )}

      <Link
        href="/learn"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-(--cyan) transition hover:text-(--accent)"
      >
        ← Back to Learn Hub
      </Link>
    </div>
  );
}
