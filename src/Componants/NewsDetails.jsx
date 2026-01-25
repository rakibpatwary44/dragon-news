import React, { useEffect, useState } from "react";
import Header from "../Pages/Header";
import RightSide from "./MainLayout/RightSide";
import NewsDetailCard from "../Pages/NewsDetailCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState([]);
  console.log(data, id, news);
  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [id, data]);

  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <main className="w-11/12 mx-auto my-3 gap-5 grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h1 className="font-bold">News details</h1>
          <NewsDetailCard news={news}></NewsDetailCard>
        </section>
        <aside className="col-span-3">
          <RightSide></RightSide>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
