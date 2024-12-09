import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import Footer from "../components/Footer";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { createNewUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password)) {
      return "Password must include at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must include at least one lowercase letter.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return "";
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate name
    if (name.length < 5) {
      setError("Name must be more than 5 characters long");
      toast.error("Name must be more than 5 characters long");
      return;
    }

    // Validate password
    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      toast.error(passwordValidationError);
      return;
    }

    try {
      // Create user with email and password
      const result = await createNewUser(email, password);
      const user = result.user;

      // Update user profile with name and photoURL
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      toast.success("User registered successfully!");
      navigate("/"); // Redirect to home page

      const createAt = result?.user?.metadata?.creationTime;
      const uid = user.uid; // Extract the uid from the user object

      const newUser = { uid, name, email, password, photoURL, createAt };

      // Save new user info to the database
      fetch("https://visa-navigator-project.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("User Registration Successful!");
            
          }
        });
    } catch (err) {
      console.error("Registration Error:", err.message);
      setError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="min-h-screen flex items-center justify-center py-24">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleRegister}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

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

            {/* Photo URL Field */}
            <div className="mb-4">
              <label className="block text-gray-700">Photo URL</label>
              <input
                type="url"
                name="photo"
                className="input input-bordered w-full"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Enter your photo URL"
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
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(""); // Reset password error when user types
                }}
                placeholder="Enter your password"
                required
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>

            {/* Register Button */}
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </form>
          <p className="text-xs md:text-sm font-medium text-center text-[#403F3F] mt-7">
            Already Have An Account?{" "}
            <Link to="/auth/login" className="text-[#DE2910] font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
