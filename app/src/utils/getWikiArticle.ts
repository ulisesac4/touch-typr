type Langs = "en" | "es";
// https://en.wikipedia.org/api/rest_v1/page/random/html
function urlBuilder(lang: string = "en") {
  return `https://${lang}.wikipedia.org/api/rest_v1/page/random/html`;
}

async function wikiArticleResolver(url: string = "") {
  const res = await fetch(url);
  return await res.text();
}

function wikiArticleCleaner(content: string): string {
  const data = content;
  const parser = new DOMParser();
  const htmlDocument = parser.parseFromString(data, "text/html");

  const unwantedElements = [
    "img",
    "table",
    "style",
    "script",
    "noscript",
    "svg",
    "math",
  ];
  unwantedElements.forEach((tagName) => {
    const elements = htmlDocument.getElementsByTagName(tagName);
    for (let i = elements.length - 1; i >= 0; i--) {
      elements[i]?.parentNode?.removeChild(elements[i]);
    }
  });

  const textContent = htmlDocument.body.textContent || "";

  return textContent;
}

async function getWikiArticle(lang: string = "en") {
  const selectedUrl = urlBuilder(lang);
  const rawArticle = await wikiArticleResolver(selectedUrl);
  console.log(rawArticle);
  const cleanArticle = wikiArticleCleaner(rawArticle);
  return cleanArticle;
}

export default getWikiArticle;
