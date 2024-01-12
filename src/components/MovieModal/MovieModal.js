import {
  IconBuddyCancelIcon,
  IconBuddyCartIcon,
  IconBuddyDotIcon,
  IconBuddyStarIcon,
} from "@/atoms/icons";
import Image from "next/image";

const MovieModal = ({
  data,
  setIsModalOpen = () => {},
  handleAddToCart = () => {},
}) => {
  const {
    movie_name,
    poster_img,
    genre,
    price,
    rating,
    description,
    movie_hr,
    movie_date,
  } = data;

  return (
    <div className="fixed top-0 left-0 bg-modal-rgba w-screen h-screen flex justify-center items-center backdrop-blur-sm">
      <div className="h-[500px] w-5/12 bg-gray-800 border border-gray-600 rounded-md shadow-sm flex p-6 relative">
        <div
          className="absolute top-4 right-5 cursor-pointer"
          onClick={() => setIsModalOpen((prev) => !prev)}
        >
          <IconBuddyCancelIcon />
        </div>
        <div className="w-2/5">
          <Image
            src={poster_img}
            width={250}
            height={250}
            alt="img"
            className="h-[38vh] object-cover"
          />
          <button
            className="bg-yellow-400 w-[250px] mt-5 py-3 px-3 rounded-md text-gray-900 text-sm font-medium outline-none flex items-center justify-center"
            onClick={handleAddToCart}
          >
            <IconBuddyCartIcon />
            <span className="ml-1 font-semibold">Add to Cart</span>
          </button>
        </div>
        <div className="w-full ml-7">
          <p className="text-xl">{movie_name}</p>
          <div className="flex items-center my-2 text-gray-400">
            <p>{movie_date}</p>
            <p className="flex items-center ml-2">
              <IconBuddyDotIcon />
              {movie_hr} minutes
            </p>
          </div>
          <div className="flex items-center my-2 text-gray-400">
            <p>{genre}</p>
            <p className="flex items-center ml-2">
              <IconBuddyDotIcon />
              <IconBuddyStarIcon w="14px" h="14px" />
              {rating}
            </p>
            <p className="flex items-center ml-2 text-gray-200">
              <IconBuddyDotIcon />${price}
            </p>
          </div>
          <div className="bg-gray-500 h-[1px] w-full my-5"></div>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
