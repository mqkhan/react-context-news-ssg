import { useNewsContext } from "@/newsContext";
import Link from "next/link";

const API_NYCKEL = "pub_38240d6d8069b34a52954aac12b5d340fb55e";

export async function getStaticPaths() {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${API_NYCKEL}&q=pizza`
  );
  const data = await res.json();

  const articles = data.results;

  const paths = articles.map((article) => ({
    params: { id: article.article_id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${API_NYCKEL}&q=pizza`
  );
  const data = await res.json();

  const articles = data.results;

  const article = articles.find((article) => article.article_id == params.id);

  return {
    props: {
      article,
      otherArticles: articles.filter(
        (a) => a.article_id !== article.article_id
      ),
    },
  };
}

export default function Article({ article, otherArticles }) {
  // const { state } = useNewsContext();
  return (
    <div className="flex mt-4">
      <div className="w-2/3 pr-4">
        {article && (
          <div
            className="bg-white
              p-4
              rounded-md
              shadow-xl
              max-w-full"
          >
            <h2>{article.title}</h2>
            <img src={article.image_url} alt={article.title} />
            <p>{article.description}</p>
          </div>
        )}
      </div>
      <div className="w-1/3">
        <h3>Other News</h3>
        <ul className="grid grid-cols-1 gap-4">
          {(otherArticles || []).map((otherArticle) => (
            <div
              key={otherArticle.article_id}
              className="bg-white
              p-4
              rounded-md
              shadow-xl
              max-w-full 
              "
            >
              <Link href={`/article/${otherArticle.article_id}`}>
                {otherArticle.title}
              </Link>
              <img src={otherArticle.image_url} alt="" />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
