import Image from "next/image";
import { IconBuddyCancelIcon } from "@/atoms/icons";

import { useDispatch } from "react-redux";
import { removeFromCart } from "@/store/slices/cartSlice";

const CartItem = ({ movie }) => {
  const { movie_name, poster_img, genre, price, rating } = movie;

  const dispatch = useDispatch();

  const handleRemoveItemFromCart = () => {
    dispatch(removeFromCart(movie));
  };

  return (
    <div>
      <div className="flex items-center justify-between py-2 pr-2">
        <div className="flex items-start">
          <Image
            src={poster_img}
            width={32}
            height={32}
            alt="img"
            className="rounded-t-md h-full object-cover"
          />
          <div className="ml-2">
            <p>{movie_name}</p>
            <p className="text-sm text-gray-500">${price}</p>
          </div>
        </div>
        <div role="button" onClick={handleRemoveItemFromCart}>
          <IconBuddyCancelIcon />
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-700"></div>
    </div>
  );
};

export default CartItem;
