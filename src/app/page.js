"use client";

import { Provider } from "react-redux";

// component
import Navbar from "@/components/Navbar/Navbar";
import MovieLists from "@/components/MovieLists/MovieLists";

// store
import store from "@/store/store";

// config

export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <MovieLists />
      </main>
    </Provider>
  );
}
