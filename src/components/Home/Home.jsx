import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi, { apiKey } from "../../common/apis/movieApi";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const movieText = "Marvel";
      const response = await movieApi
        .get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
        .catch((error) => {
          console.log(error);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  );
};

export default Home;
