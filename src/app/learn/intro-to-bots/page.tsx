import type { Metadata } from "next";
import { ArticleContent } from "../article-content";
import { getArticle } from "../articles-data";

const article = (() => {
  const result = getArticle("intro-to-bots");
  if (!result) {
    throw new Error("Intro to Bots article data is missing");
  }
  return result;
})();

export const metadata: Metadata = {
  title: `Learn · ${article.title}`,
  description: article.description,
};

export default function IntroToBotsPage() {
  return <ArticleContent article={article} />;
}
