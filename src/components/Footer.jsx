import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#00CC99] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Website Name / Logo */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-semibold">VisaHub</h1>
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
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
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
