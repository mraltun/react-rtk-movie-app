import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
import "./Home.scss";

const Home = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchMovies = async () => {};
  //   fetchMovies();
  // }, [dispatch]);

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  );
};

export default Home;
