import { DEV_API_KEY } from "../../config/config";
import { DEVArticle, GetArticlesOptions } from "../types/DEVArticle";

export const getArticles = async (
  options?: GetArticlesOptions,
): Promise<DEVArticle[]> => {
  const articles: DEVArticle[] = [];
  const pages = options?.pages ?? 1;
  const perPage = options?.perPage ?? 5;

  for (let page = 1; page <= pages; page++) {
    const response = await fetch(
      `https://dev.to/api/articles/me?per_page=${perPage}&page=${page}`,
      {
        method: "GET",
        headers: {
          "api-key": DEV_API_KEY,
          Accept: "application/vnd.forem.api-v1+json",
          "Content-Type": "application/json",
        },
      },
    );
    if (!response.ok) {
      throw new Error(`Error fetching articles: ${response.statusText}`);
    }
    const json: DEVArticle[] = await response.json();
    articles.push(...json);
  }
  return articles;
};
