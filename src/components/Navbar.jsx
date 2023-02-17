// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../img/logo.png";

// const Navbar = () => {
// const userDataString = localStorage.getItem("userData");
// let userData = null;


// if (userDataString) {
// userData = JSON.parse(userDataString);
// }

// const handleLogout = () => {
// localStorage.removeItem("userData");
// window.location.reload();
// };

// return (
// <div className="navbar">
// <div className="container">
// <div className="logo">
// <Link to="/">
// <img src={Logo} alt="" />
// </Link>
// </div>
// <div className="links">
// {userData && userData.username && (
// <h1>Welcome, {userData ? userData.firstname : 'Guest'}</h1>)}
// {userData ? (
// <span onClick={handleLogout}>Logout</span>
// ) : (
// <Link className="link" to="/login">
// Login
// </Link>
// )}
// <span className="write">
// <Link className="link" to="/profile">
// Profile
// </Link>
// </span>
// </div>
// </div>
// </div>
// );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Navbar = () => {
  const userDataString = localStorage.getItem("userData");
  let userData = null;

  if (userDataString) {
    userData = JSON.parse(userDataString);
  }

  const handleLogout = () => {
    localStorage.removeItem("userData");
    window.location.reload();
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
          {userData && userData.username && (
            <h1>Welcome, {userData ? userData.firstname : "Guest"}</h1>
          )}
          {userData ? (
            <span onClick={handleLogout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          {userData ? (
            <span className="write">
              <Link className="link" to="/profile">
                Profile
              </Link>
            </span>
          ) : (
            <span className="write">
              <Link className="link" to="/register">
                Register
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
