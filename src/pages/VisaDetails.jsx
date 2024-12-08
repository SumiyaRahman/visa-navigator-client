import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const VisaDetails = () => {
  const { id } = useParams();
  const [visa, setVisa] = useState(null);

  useEffect(() => {
    // Fetch visa details by ID
    fetch(`http://localhost:4000/addVisa/${id}`)
      .then((res) => res.json())
      .then((data) => setVisa(data))
      .catch((error) => console.error("Error fetching visa details:", error));
  }, [id]);

  if (!visa) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold text-center mb-8">
          {visa.countryName}
        </h1>
        <div className="border p-5 rounded-lg">
          <img
            src={visa.countryImg}
            alt={visa.countryName}
            className="w-full max-h-96 object-cover rounded-lg mb-6"
          />
          <p className="text-lg">{visa.countryName}</p>
          <p className="text-lg mb-4">Type: {visa.visaType}</p>
          <p className="text-lg mb-4">Fee: ${visa.fee}</p>
          <p className="text-lg">{visa.validity}</p>
          <button className="btn mt-5 bg-[#00CC99] text-white">
            Apply for the visa
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
