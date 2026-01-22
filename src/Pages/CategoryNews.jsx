import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Componants/MainLayout/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  //   console.log(data);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true,
      );
      setCategoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      console.log(filterNews);
      setCategoryNews(filterNews);
    }
  }, [data, id]);
  //   console.log(obj);
  return (
    <div>
      {" "}
      <h2 className="font-bold mt-3">
        Total <span className="text-secondary">{categoryNews.length} </span>{" "}
        News Found
      </h2>
      <div className="grid grid-cols-1 gap-3 ">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
