const { combineReducers } = require("@reduxjs/toolkit");

import movieListReducer from "./slices/movieListSlice";
import cartItemsReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
  movieList: movieListReducer,
  cartItems: cartItemsReducer,
});

export default rootReducer;
