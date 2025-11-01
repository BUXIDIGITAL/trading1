import type { Metadata } from "next";
import { ArticleContent } from "../article-content";
import { getArticle } from "../articles-data";

const article = (() => {
  const result = getArticle("safe-copy-trading");
  if (!result) {
    throw new Error("Safe Copy-Trading article data is missing");
  }
  return result;
})();

export const metadata: Metadata = {
  title: `Learn · ${article.title}`,
  description: article.description,
};

export default function SafeCopyTradingPage() {
  return <ArticleContent article={article} />;
}
