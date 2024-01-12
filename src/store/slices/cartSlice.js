import appwriteService from "@/appwrite/service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
  total: 0,
  status: "idle", // loading | success | failed
};

const cartItems = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemExit = state.items.find(
        (item) => item.$id == action.payload.$id
      );

      if (isItemExit) return;

      state.items = [...state.items, action.payload];
      state.count = state.items.length;

      let totalPrice = 0;
      state.items.forEach((item) => {
        totalPrice += item.price;
      });
      state.total = totalPrice;
    },
    removeFromCart: (state, action) => {
      let filteredItems = state.items.filter(
        (item) => item.$id !== action.payload.$id
      );
      state.total = state.total - action.payload.price;
      state.items = filteredItems ? filteredItems : [];
      state.count = state.items.length;
    },
  },
});

export const { addToCart, removeFromCart } = cartItems.actions;
export default cartItems.reducer;
