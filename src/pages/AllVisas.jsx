import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const AllVisas = () => {
  const [visas, setVisas] = useState([]); // State to hold all visas
  const [filteredVisas, setFilteredVisas] = useState([]); // State to hold filtered visas
  const [selectedVisaType, setSelectedVisaType] = useState(""); // State for the selected visa type

  useEffect(() => {
    // Fetch visas from the server
    fetch("http://localhost:4000/addVisa")
      .then((res) => res.json())
      .then((data) => {
        setVisas(data);
        setFilteredVisas(data); // Set initial data for filtered visas
      });
  }, []);

  // Function to handle visa type filtering
  const handleFilterChange = (e) => {
    const selectedType = e.target.value;
    setSelectedVisaType(selectedType);

    if (selectedType === "") {
      // If no filter is selected, show all visas
      setFilteredVisas(visas);
    } else {
      // Filter visas based on selected type
      const filtered = visas.filter((visa) => visa.visaType === selectedType);
      setFilteredVisas(filtered);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="py-10 px-5 container mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center mb-8">All Visas</h1>

        {/* Dropdown Menu for Filter */}
        <div className="flex justify-center mb-6">
          {/* Dropdown to select visa type */}
          <select
            value={selectedVisaType}
            onChange={handleFilterChange} // Event listener for dropdown changes
            className="select select-bordered w-full max-w-xs"
          >
            <option value="">All Visa Types</option>
            <option value="Tourist visa">Tourist Visa</option>
            <option value="Student visa">Student Visa</option>
            <option value="Official visa">Official Visa</option>
          </select>
        </div>

        {/* Visa Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVisas.map((visa) => (
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
                className="btn bg-[#00CC99] text-white w-full"
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
