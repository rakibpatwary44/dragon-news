import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailCard = ({ news }) => {
  console.log(news);
  return (
    <div className=" space-y-10">
      <img
        className="w-full h-[450px] object-fill"
        src={news.image_url}
        alt=""
      />
      <h2 className="font-bold text-2xl">{news.title}</h2>
      <p>{news.details}</p>
      <Link
        to={`/category/${news.category_id}`}
        className="btn bg-secondary text-amber-50 font-semibold"
      >
        <FaArrowLeft />
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailCard;
