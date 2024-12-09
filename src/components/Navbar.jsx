import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { BsSunFill, BsMoonFill } from "react-icons/bs"; // Icons for theme toggle
import { AuthContext } from "../provider/AuthProvider";
import { useTheme } from "../provider/ThemeProvider";
import Lottie from "lottie-react"; // Correct import
import logoAnimation from "../assets/Images/Animation.json"; // Import the Lottie animation

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();

  const activeLinkStyle = "text-[#0F172A] font-semibold";
  const defaultLinkStyle = "text-[#787B84] font-semibold";

  return (
    <div
      className={`navbar bg-base-100 px-5 py-5 md:px-8 container mx-auto ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLinkStyle : defaultLinkStyle
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allVisas"
                className={({ isActive }) =>
                  isActive ? activeLinkStyle : defaultLinkStyle
                }
              >
                All Visas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addVisa"
                className={({ isActive }) =>
                  isActive ? activeLinkStyle : defaultLinkStyle
                }
              >
                Add Visa
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myAddedVisas"
                className={({ isActive }) =>
                  isActive ? activeLinkStyle : defaultLinkStyle
                }
              >
                My Added Visas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myVisaApplications"
                className={({ isActive }) =>
                  isActive ? activeLinkStyle : defaultLinkStyle
                }
              >
                My Visa Applications
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Logo with Lottie Animation */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="w-12 h-12 lg:w-16 lg:h-16">
            <Lottie animationData={logoAnimation} loop autoplay />
          </div>
          <p className="text-lg lg:text-3xl">
            <span
              className={theme === "dark" ? "text-gray-400" : "text-[#787B84]"}
            >
              Visa
            </span>
            <span
              className={theme === "dark" ? "text-white" : "text-[#0F172A]"}
            >
              Hub
            </span>
          </p>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : defaultLinkStyle
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allVisas"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : defaultLinkStyle
              }
            >
              All Visas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addVisa"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : defaultLinkStyle
              }
            >
              Add Visa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myAddedVisas"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : defaultLinkStyle
              }
            >
              My Added Visas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myVisaApplications"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : defaultLinkStyle
              }
            >
              My Visa Applications
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-4">
  {/* Theme Toggle */}
  <button
    onClick={toggleTheme}
    className="text-lg lg:text-2xl flex items-center text-[#00CC99] hover:text-[#0F172A] focus:outline-none"
  >
    {theme === "light" ? <BsMoonFill /> : <BsSunFill />}
  </button>

  {/* User Auth */}
  {user && user?.email ? (
    <div className="flex items-center gap-3">
      <div
        className="tooltip tooltip-bottom"
        data-tip={user?.displayName}
      >
        <img
          className="h-12 w-12 rounded-full cursor-pointer"
          src={user?.photoURL}
          alt="User Avatar"
        />
      </div>
      <button
        onClick={logOut}
        className="btn bg-[#00CC99] text-white flex items-center"
      >
        <span className="hidden lg:inline">Log Out</span>
        <IoMdLogOut className="lg:hidden text-x" />
      </button>
    </div>
  ) : (
    <div className="flex gap-1 lg:gap-3">
      <Link
        to="/auth/login"
        className="btn bg-[#00CC99] text-white flex items-center"
      >
        <IoMdLogIn />
        <span className="hidden lg:inline">Login</span>
      </Link>
      <Link
        to="/auth/register"
        className="btn bg-[#FFFFFF] text-[#0F172A] flex items-center"
      >
        <FaUserPlus />
        <span className="hidden lg:inline">Register</span>
      </Link>
    </div>
  )}
</div>

    </div>
  );
};

export default Navbar;
