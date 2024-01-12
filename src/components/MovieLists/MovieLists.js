"use client";
import { useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useDispatch, useSelector } from "react-redux";

// store
import { getMovies } from "@/store/slices/movieListSlice";

const MovieLists = () => {
  const dispatch = useDispatch();
  const { data: movieList, status } = useSelector((state) => state.movieList);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <section className="px-5 md:px-80 mt-10 mb-5 flex flex-col items-center">
      <section className="flex items-center justify-center md:justify-start flex-wrap">
        {movieList?.map((movie, _) => (
          <MovieCard key={`${movie.$id}`} movie={movie} />
        ))}
      </section>

      <button className="mt-2 font-normal text-sm flex items-center justify-center bg-transparent text-white border border-gray-600 p-2 rounded-sm">
        <span className="ml-2">
          {status !== "loading" ? " Load more movies" : "Loading movies"}
        </span>
      </button>
    </section>
  );
};

export default MovieLists;
