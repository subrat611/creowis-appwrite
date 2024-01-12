import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  IconBuddyCartIcon,
  IconBuddyDotIcon,
  IconBuddyStarIcon,
} from "@/atoms/icons";
import Image from "next/image";

import MovieModal from "../MovieModal/MovieModal";

// redux
import { addToCart } from "@/store/slices/cartSlice";

const MovieCard = ({ movie }) => {
  const { movie_name, poster_img, genre, price, rating } = movie;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleModalVisibility = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(movie));
  };

  return (
    <>
      <div
        className="w-[290px] h-[350px] mb-44 group/card hover:cursor-pointer md:mx-3"
        onClick={handleModalVisibility}
      >
        <Image
          src={poster_img}
          width={350}
          height={350}
          alt="img"
          className="rounded-t-md h-full object-cover"
        />
        <div className="bg-gray-800 px-3 py-4 rounded-b-md group-hover/card:bg-gray-700/80">
          <p>{movie_name}</p>
          <div className="flex items-center my-2 text-gray-400">
            <p>{genre}</p>
            <p className="flex items-center ml-2">
              <IconBuddyDotIcon />
              <IconBuddyStarIcon w="14px" h="14px" />
              {rating}
            </p>
            <p className="flex items-center ml-2">
              <IconBuddyDotIcon />${price}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-yellow-400 w-[130px] py-3 px-3 rounded-md text-gray-900 text-sm font-medium outline-none flex items-center justify-center"
              onClick={handleAddToCart}
            >
              <IconBuddyCartIcon />
              <span className="ml-1">Add</span>
            </button>
            <button className="bg-transparent w-[130px] py-3 px-3 rounded-md text-white text-sm border border-gray-600 outline-none">
              View details
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <MovieModal
          data={movie}
          setIsModalOpen={setIsModalOpen}
          handleAddToCart={handleAddToCart}
        />
      )}
    </>
  );
};

export default MovieCard;
