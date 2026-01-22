import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, rating, total_view, tags } = news;

  return (
    <div className="card bg-base-100 shadow-xl border">
      {/* Author info */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author?.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <FaRegBookmark />
          <IoMdShare />
        </div>
      </div>

      {/* Thumbnail */}
      <figure>
        <img
          src={image_url}
          alt={title}
          className="w-full max-h-[300px] object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>

        <p className="text-gray-600">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>

        <p className="text-primary cursor-pointer font-medium">Read More</p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(rating?.number)].map((_, i) => (
              <FaStar key={i} className="text-orange-400" />
            ))}
            <span className="ml-2 font-medium">{rating?.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-outline badge-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
