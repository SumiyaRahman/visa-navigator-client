import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";
import logo from '../assets/Images/logo.png'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const activeLinkStyle = "text-[#0F172A] font-semibold border rounded";
  const defaultLinkStyle = "text-[#787B84] font-semibold border rounded";

  return (
    <div className="navbar px-5 py-5 md:px-8 container mx-auto">
      {/* Logo and Website Name */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
        <div className="flex items-center gap-2">
        <img className="w-10 h-10" src={logo} />
        <p className="text-4xl"><span className="text-[#787B84]">Visa</span><span className="text-[#0F172A]">Hub</span></p>
        {/*  */}
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
        {/* Replace with authentication logic */}
        {user && user?.email ? (
          <div className="flex gap-3 items-center">
            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
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
              <span>
                <IoMdLogIn></IoMdLogIn>
              </span>{" "}
              Login
            </Link>
            <Link to="/auth/register" className="btn text-[#0F172A]">
              <span>
                {" "}
                <FaUserPlus></FaUserPlus>{" "}
              </span>
              Register
            </Link>
          </div>
        )}

        {/* Logged-in state example */}
        {/* <div className="avatar">
          <div className="w-8 rounded-full">
            <img src="USER_PHOTO_URL" alt="User Avatar" />
          </div>
          <div className="tooltip tooltip-bottom" data-tip="USER_NAME">
            <span className="ml-2">Logout</span>
          </div>
        </div> */}
      </div>

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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
            {/* Replace with conditional buttons */}
            <li className="hidden md:flex items-center space-x-4">
              {/* Replace with authentication logic */}
              {user && user?.email ? (
                <div className="flex gap-3 items-center">
                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
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
                    <span>
                      <IoMdLogIn></IoMdLogIn>
                    </span>{" "}
                    Login
                  </Link>
                  <Link to="/auth/register" className="btn bg-[#FFFFFF] text-[#0F172A]">
                    <span>
                      {" "}
                      <FaUserPlus></FaUserPlus>{" "}
                    </span>
                    Register
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
