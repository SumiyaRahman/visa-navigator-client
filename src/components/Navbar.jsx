import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar px-5 py-5 md:px-8 container mx-auto">
      {/* Logo and Website Name */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          Visa Navigator
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-visas">All Visas</Link>
          </li>
          <li>
            <Link to="/add-visa">Add Visa</Link>
          </li>
          <li>
            <Link to="/my-added-visas">My Added Visas</Link>
          </li>
          <li>
            <Link to="/my-visa-applications">My Visa Applications</Link>
          </li>
        </ul>
      </div>

      {/* Conditional Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Replace with authentication logic */}
        {user && user?.email ? (
          <button
            onClick={logOut}
            className="btn btn-primary flex items-center"
          >
            Log Out
          </button>
        ) : (
          <div className="flex gap-3">
            <Link
              to="/auth/login"
              className="btn btn-primary flex items-center"
            >
              <span>
                <IoMdLogIn></IoMdLogIn>
              </span>{" "}
              Login
            </Link>
            <Link to="/auth/register" className="btn btn-secondary">
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-visas">All Visas</Link>
            </li>
            <li>
              <Link to="/add-visa">Add Visa</Link>
            </li>
            <li>
              <Link to="/my-added-visas">My Added Visas</Link>
            </li>
            <li>
              <Link to="/my-visa-applications">My Visa Applications</Link>
            </li>
            {/* Replace with conditional buttons */}
            <li className="hidden md:flex items-center space-x-4">
              {/* Replace with authentication logic */}
              {user && user?.email ? (
                <button
                  onClick={logOut}
                  className="btn btn-primary flex items-center"
                >
                  Log Out
                </button>
              ) : (
                <div className="flex gap-3">
                  <Link
                    to="/auth/login"
                    className="btn btn-primary flex items-center"
                  >
                    <span>
                      <IoMdLogIn></IoMdLogIn>
                    </span>{" "}
                    Login
                  </Link>
                  <Link to="/auth/register" className="btn btn-secondary">
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
