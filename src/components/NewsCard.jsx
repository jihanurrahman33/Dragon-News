import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, rating, total_view, thumbnail_url, details } =
    news;

  const publishedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 rounded-xl shadow-sm hover:shadow-md transition duration-300">
      {/* Top Author Section */}
      <div className="flex bg-base-300 rounded-t-xl items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="text-gray-500 hover:text-primary">
            <FaRegBookmark />
          </button>
          <button className="text-gray-500 hover:text-primary">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h2 className="font-bold text-lg text-gray-800 leading-snug">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-md w-full object-cover max-h-56"
        />
      </figure>

      {/* Description */}
      <div className="p-4">
        <p className="text-sm text-gray-600">{details.slice(0, 180)}...</p>
        <Link
          to={`/news-details/${id}`}
          className="text-orange-500 text-sm font-semibold mt-2 inline-block hover:underline"
        >
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 text-sm">
        <div className="flex items-center text-orange-500 gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar className="text-gray-300" />
          <span className="ml-2 text-gray-700 font-medium">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
