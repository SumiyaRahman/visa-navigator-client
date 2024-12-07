import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const AllVisas = () => {
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    // Fetch visas from the server
    fetch("http://localhost:4000/addVisa")
      .then((res) => res.json())
      .then((data) => setVisas(data));
  }, []);

  return (
    <div>
        <Navbar></Navbar>
        <div className="py-10 px-5 container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">All Visas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visas.map((visa) => (
          <div key={visa._id} className="bg-white shadow-md rounded-lg p-5">
            <img
              src={visa.countryImg}
              alt={visa.countryName}
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{visa.countryName}</h2>
            <p className="text-gray-600 mb-2">Type: {visa.visaType}</p>
            <p className="text-gray-600 mb-4">Fee: ${visa.fee}</p>
            <Link
              to={`/visa-details/${visa._id}`}
              className="btn btn-primary w-full"
            >
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AllVisas;
