import React from "react";

const PopularDestinations = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Destination 1 */}
          <div className="bg-white shadow-md rounded-lg p-5">
            <img className="mb-5 rounded-lg" src="https://images.pexels.com/photos/2916828/pexels-photo-2916828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <h3 className="text-xl font-semibold">Canada</h3>
            <p className="text-gray-600 mt-2">
              A perfect place for work and study opportunities.
            </p>
          </div>
          {/* Destination 2 */}
          <div className="bg-white shadow-md rounded-lg p-5">
          <img className="mb-5 rounded-lg" src="https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <h3 className="text-xl font-semibold">United States</h3>
            <p className="text-gray-600 mt-2">
              A land of endless possibilities for travelers and professionals.
            </p>
          </div>
          {/* Destination 3 */}
          <div className="bg-white shadow-md rounded-lg p-5">
          <img className="mb-5 rounded-lg" src="https://images.pexels.com/photos/2845013/pexels-photo-2845013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <h3 className="text-xl font-semibold">Australia</h3>
            <p className="text-gray-600 mt-2">
              An excellent destination for skilled workers and students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
