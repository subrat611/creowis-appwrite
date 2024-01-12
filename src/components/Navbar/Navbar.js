import {
  IconBuddyCartIcon,
  IconBuddyNotificationIcon,
  IconBuddyUserIcon,
  IconBuddyVideoIcon,
} from "@/atoms/icons";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";

const Navbar = () => {
  const { count, items, total } = useSelector((state) => state.cartItems);

  return (
    <header className="bg-gray-900 py-3 px-5 md:px-80 flex justify-between items-center border-b border-b-gray-700">
      <p className="text-xl font-medium flex items-center">
        <IconBuddyVideoIcon />
        <span className="ml-2">CineFlix</span>
      </p>
      <ul className="flex items-center">
        <li className="px-2 cursor-pointer">
          <IconBuddyNotificationIcon />
        </li>
        <button className="relative text-left group/cartbox">
          <li className="px-3 cursor-pointer relative">
            <IconBuddyCartIcon />
            {count > 0 && (
              <span className="absolute -top-2 right-0 bg-yellow-400 rounded-full w-5 h-5 text-center text-sm font-medium text-gray-900 flex items-center justify-center">
                {count}
              </span>
            )}
          </li>

          <div className="absolute invisible -left-64 top-7 bg-gray-800 border border-gray-700 px-5 py-5 w-[300px] rounded-md group-focus/cartbox:visible">
            <div className="mb-2 h-[200px] max-h-64 overflow-scroll overflow-x-hidden custom-scroll">
              {items.length == 0 && (
                <p className="text-center mt-10">No Items</p>
              )}
              {items.length > 0 &&
                items.map((movie, _) => (
                  <CartItem movie={movie} key={movie.$id} />
                ))}
            </div>

            <div className="flex justify-between text-gray-400 mb-2">
              <div>
                <p className="text-sm">Number of movies</p>
                <p className="font-semibold">{count}</p>
              </div>
              <div>
                <p className="text-sm">Total Cost</p>
                <p className="text-gray-50 text-right">${total}</p>
              </div>
            </div>

            <div
              role="button"
              className="font-semibold flex items-center justify-center bg-yellow-400 text-gray-900 p-2 rounded-sm w-full"
            >
              <IconBuddyCartIcon />
              <span className="ml-2">Checkout</span>
            </div>
            <div
              role="button"
              className="mt-2 font-normal text-sm flex items-center justify-center bg-transparent text-white border border-gray-600 p-2 rounded-sm w-full"
            >
              <span className="ml-2">Continue Shopping</span>
            </div>
          </div>
        </button>
        <li className="px-3 cursor-pointer">
          <IconBuddyUserIcon />
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
