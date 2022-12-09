import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi, { apiKey } from "../../common/apis/movieApi";
import "./Home.scss";

const Home = () => {
  useEffect(() => {
    const fetchMovies = async () => {
      const movieText = "Marvel";
      const response = await movieApi
        .get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
        .catch((error) => {
          console.log(error);
        });
      console.log(response.data);
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
