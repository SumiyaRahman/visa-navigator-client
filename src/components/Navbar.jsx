import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { BsSunFill, BsMoonFill } from "react-icons/bs"; // Icons for theme toggle
import { AuthContext } from "../provider/AuthProvider";
import logo from "../assets/Images/logo.png";
import { useTheme } from "../provider/ThemeProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();

  const activeLinkStyle = "text-[#0F172A] font-semibold border rounded";
  const defaultLinkStyle = "text-[#787B84] font-semibold border rounded";

  return (
    <div
      className={`navbar px-5 py-5 md:px-8 container mx-auto ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Logo and Website Name */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          <div className="flex items-center gap-2">
            <img className="w-10 h-10" src={logo} alt="Logo" />
            <p className="text-4xl">
              <span
                className={
                  theme === "dark" ? "text-gray-400" : "text-[#787B84]"
                }
              >
                Visa
              </span>
              <span
                className={theme === "dark" ? "text-white" : "text-[#0F172A]"}
              >
                Hub
              </span>
            </p>
          </div>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <ul className="menu menu-horizontal px-1 space-x-4">
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

      {/* Conditional Buttons */}
      <div className="hidden md:flex items-center space-x-4 ml-4">
        {user && user?.email ? (
          <div className="flex gap-3 items-center">
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
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              to="/auth/login"
              className="btn bg-[#00CC99] text-white flex items-center"
            >
              <IoMdLogIn />
              Login
            </Link>
            <Link
              to="/auth/register"
              className="btn bg-[#FFFFFF] text-[#0F172A]"
            >
              <FaUserPlus />
              Register
            </Link>
          </div>
        )}
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="text-2xl flex items-center text-[#00CC99] hover:text-[#0F172A] focus:outline-none ml-3"
      >
        {theme === "light" ? <BsMoonFill /> : <BsSunFill />}
      </button>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${
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
      </div>
    </div>
  );
};

export default Navbar;
