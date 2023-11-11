import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/navbar-logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const isRouteActive = (route) => {
    const isCurrentRoute = location.pathname === route;
    const isFeaturesRoute = location.pathname.startsWith("/features");
  
    if (isCurrentRoute) {
      return "var(--color-green)"; // Set the active route color
    }
  
    if (isFeaturesRoute && route === "/features") {
      return "var(--color-green)";
    }
  
    if (isFeaturesRoute && route === "/features/:id/test" && location.pathname.match(/^\/features\/\w+\/test$/)) {
      return "var(--color-green)";
    }
  
    return "";
  };
  
  const isFontBold = (route) => {
    const isCurrentRoute = location.pathname === route;
    const isFeaturesRoute = location.pathname.startsWith("/features");

    if(isCurrentRoute){
      return "font-black";
    }
  
  
    if (route === "/features" && isFeaturesRoute) {
      return "font-black";
    }
  
    if (route === "/features/:id/test" && location.pathname.match(/^\/features\/\w+\/test$/)) {
      return "font-black";
    }
  
    return "font-light";
  };
  
  
  
  
  return (
    <nav className="mt-5" style={{ backgroundColor: "var(--color-gray)" }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center ml-14" style={{ color: isRouteActive("/") }}>
          <img src={logo} className="md:w-15 md:h-15 w-15 h-10" alt="Flowbite Logo" />
          <span
            className={"self-center md:text-2xl text-base whitespace-nowrap text-white font-black"}
            style={{ fontFamily: "var(--font-alt), sans-serif" }}
          >
            CV Security
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          onClick={handleNav}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={nav ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`w-full md:block md:w-auto ${!nav && "hidden"}`}
          id="navbar-solid-bg"
        >
          <ul
            className="flex flex-col font-light mt-4 mr-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
            style={{ fontFamily: "var(--font-alt), sans-serif" }}
          >
            <li className="menu">
              <Link
                to="/"
                className={`block py-2 pl-3 pr-4 rounded menu-item-hover md:border-0 md:p-0 text-white ${isFontBold("/")}`}
                style={{
                  color: isRouteActive("/"),
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className={`block py-2 pl-3 pr-4 rounded menu-item-hover md:border-0 md:p-0 text-white ${isFontBold("/about")}`}
                style={{
                  color: isRouteActive("/about"),
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <Link
                to="/features"
                className={`block py-2 pl-3 pr-4 rounded menu-item-hover md:border-0 md:p-0 text-white ${isFontBold("/features")}`}
                style={{
                  color: isRouteActive("/features"),
                }}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={`block py-2 pl-3 pr-4 md:mr-12 rounded text-white menu-item-hover md:border-0 md:p-0 ${isFontBold("/profile")}`}
                style={{
                  color: isRouteActive("/profile"),
                }}
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
