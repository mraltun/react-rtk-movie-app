import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import user from "../../assets/user.png";
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter search term!");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  };

  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>React RTK Movie App</Link>
      </div>
      <div className='search-bar'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={term}
            placeholder='Search movies or shows'
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type='submit'>
            <i className='fa fa-search'></i>{" "}
          </button>
        </form>
      </div>
      <div className='user-image'>
        <img src={user} alt='user' />
      </div>
    </div>
  );
};

export default Header;
