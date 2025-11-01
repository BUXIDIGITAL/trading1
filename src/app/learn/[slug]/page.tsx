import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleContent } from "../article-content";
import { articles, articleMap } from "../articles-data";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = false;

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

  return <ArticleContent article={article} />;
}
