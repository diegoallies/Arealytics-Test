import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Logo from "../img/logo.png";

const Navbar = () => {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT_USER" });
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          {userData.username && (
            <span>{userData.username}</span>
          )}
          {userData.username ? (
            <span onClick={handleLogout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
