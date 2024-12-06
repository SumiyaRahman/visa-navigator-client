import React from "react";

const Testimonials = () => {
  return (
    <section className="py-10 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="h-20 w-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-center">John Doe</h3>
            <p className="text-center text-gray-500 text-sm">United Kingdom</p>
            <p className="text-gray-700 mt-4 text-center">
              "Visa Navigator made the application process simple and stress-free. Highly recommend!"
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="h-20 w-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-center">Jane Smith</h3>
            <p className="text-center text-gray-500 text-sm">Canada</p>
            <p className="text-gray-700 mt-4 text-center">
              "Thanks to Visa Navigator, I got my student visa for Canada in no time!"
            </p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="h-20 w-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-center">Ahmed Khan</h3>
            <p className="text-center text-gray-500 text-sm">Australia</p>
            <p className="text-gray-700 mt-4 text-center">
              "The step-by-step guidance was super helpful for my work visa to Australia."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
