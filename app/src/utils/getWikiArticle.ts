type Langs = "en" | "es";
// https://en.wikipedia.org/api/rest_v1/page/random/html
function urlBuilder(lang: Langs = "en") {
  return `https://${lang}.wikipedia.org/api/rest_v1/page/random/html`;
}

async function wikiArticleResolver(url: string = "") {
  const res = await fetch(url);
  return await res.text();
}

function wikiArticleCleaner(content: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");

  const unwantedSelectors = ["table", "img", "div", "span", "sup", "a"];
  unwantedSelectors.forEach((selector) => {
    const elements = doc.querySelectorAll(selector);
    elements.forEach((el) => el.remove());
  });

  let textContent = "";
  const mainContent = doc.getElementById("content");
  if (mainContent) {
    textContent = mainContent?.textContent?.trim() || "";
  }

  return textContent;
}

async function getWikiArticle(lang: Langs = "en") {
  const selectedUrl = urlBuilder(lang);
  const rawArticle = await wikiArticleResolver(selectedUrl);
  const cleanArticle = wikiArticleCleaner(rawArticle);
  return cleanArticle;
}

export default getWikiArticle;
