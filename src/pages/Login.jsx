import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../provider/AuthProvider";
import google from '../assets/Images/google.png'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, setUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Handle Google Sign-In
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log("Google Login Successful:", user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Google Login Error:", error.message);
        setError(error.message);
      });
  };

  // Handle Email/Password Login
  const handleLogin = (e) => {
    e.preventDefault();
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log("Email/Password Login Successful:", user);
        navigate("/");
      })
      .catch((err) => {
        console.error("Login Error:", err.message);
        setError("Invalid email or password");
      });
  };

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="mb-4 text-right">
              <a href="#" className="text-blue-500 hover:underline text-sm">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn bg-white border-2 border-[#FFDE00] mt-4 rounded shadow-none text-sm md:text-lg font-medium w-full flex items-center justify-center gap-2"
          >
            <img src={google} className="h-4 w-4" />
            <span className="bg-gradient-to-r from-[#DE2910] to-[#FFDE00] bg-clip-text text-transparent">
              Login with Google
            </span>
          </button>

          <p className="text-xs md:text-sm font-medium text-center text-[#403F3F] mt-7">
            Don’t Have An Account?{" "}
            <Link to="/auth/register" className="text-[#DE2910] font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
