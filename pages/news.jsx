import React, { useEffect } from "react";
import Link from "next/link";
import { useNewsContext } from "@/newsContext";
import Layout from "./layout";

const API_NYCKEL = "pub_382400e9b25aa439219602c048f8238f59619";

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

export default function News({ news }) {
  const { state, setNews } = useNewsContext();
  useEffect(() => {
    if (news.length > 0) {
      setNews(news);
    }
  }, [news]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 list-none">
        {state.news.map((article) => (
          <div
            key={article.article_id}
            className="bg-white p-4 max-w-full rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
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
