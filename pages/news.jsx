import React, { useEffect } from "react";
import Link from "next/link";
import { useNewsContext } from "@/newsContext";

const API_NYCKEL = "pub_38240d6d8069b34a52954aac12b5d340fb55e";

export async function getStaticProps() {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${API_NYCKEL}&q=pizza`
  );
  const data = await res.json();

  return {
    props: {
      news: data.results,
    },
  };
}

export default function News({ news: initialNews }) {
  const { state, setNews } = useNewsContext();
  useEffect(() => {
    if (initialNews.length > 0) {
      setNews(initialNews);
    }
  }, [initialNews]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 list-none">
        {state.news.map((article) => (
          <div
            key={article.article_id}
            className="bg-white p-4 rounded-md shadow-xl max-w-full"
          >
            <Link href={`/article/${article.article_id}`}>
              <h2 className="text-xl font-bold mb-2 ">{article.title}</h2>
            </Link>
            <img src={article.image_url} alt={article.title} />
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
