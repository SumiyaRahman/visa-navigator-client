import React from "react";
import logoAnimation from "../assets/Images/Animation.json";
import Lottie from "lottie-react";

const Footer = () => {
  return (
    <footer className="bg-[#E6EBED] bg-opacity-12 text-[#00CC99] py-8 px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Website Name / Logo */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-semibold flex items-center gap-4"><div className="w-12 h-12 lg:w-16 lg:h-16">
            <Lottie animationData={logoAnimation} loop autoplay />
          </div><span>VisaHub</span></h1>
          <p className="text-sm mt-2">Your trusted visa application partner</p>
        </div>

        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Email: contact@visanavigator.com</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="text-[#00CC99] hover:text-gray-400">
            <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="text-[#00CC99] hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-[#00CC99] hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-[#00CC99] hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Visa Navigator. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
