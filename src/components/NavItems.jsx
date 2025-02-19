import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo/logo.png";
import { AuthContext } from "../context/AuthProvider";
import { signOut } from "firebase/auth";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(user.auth)
      .then(() => { })
      .catch(() => { });
  };

  //addEventListener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });


  return (
    <header
      className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""
        }  `}
    >
      {/* header top start */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="signUp" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="login" className="">
              Log In
            </Link>
          </div>
        </div>
      </div>
      {/* header bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item position-relative">
                    <Link to="/cart-page" className="nav-link position-relative d-flex align-items-center">
                      <i className="icofont-cart fs-3 text-dark"></i>
                      {cartItems?.length > 0 && (
                        <span className="top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {cartItems.length}
                        </span>
                      )}
                    </Link>
                  </li>
                </ul>
              </div>
              {/* sign in & login in */}
              <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                Create Account
              </Link>
              {/* <Link to="/login" className="d-none d-md-block">
                Log In
              </Link> */}
              {user?.uid ? (
                <>
                  <Link to="/" onClick={handleSignOut}>
                    SignOut
                  </Link>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}

              {/* menu togglar */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/* social-togglar */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
