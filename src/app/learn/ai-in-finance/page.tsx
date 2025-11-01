import type { Metadata } from "next";
import { ArticleContent } from "../article-content";
import { getArticle } from "../articles-data";

const article = (() => {
  const result = getArticle("ai-in-finance");
  if (!result) {
    throw new Error("AI in Finance article data is missing");
  }
  return result;
})();

export const metadata: Metadata = {
  title: `Learn · ${article.title}`,
  description: article.description,
};

export default function AiInFinancePage() {
  return <ArticleContent article={article} />;
}
