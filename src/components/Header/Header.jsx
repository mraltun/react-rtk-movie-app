import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import user from "../../assets/user.png";

const Header = () => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
