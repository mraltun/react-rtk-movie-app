import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import user from "../../assets/user.png";

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>React RTK Movie App</div>
      </Link>
      <div className='user-image'>
        <img src={user} alt='user' />
      </div>
    </div>
  );
};

export default Header;
