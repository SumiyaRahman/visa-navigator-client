import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LatestVisas = () => {
  const [visas, setVisas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all visas
    fetch("https://visa-navigator-project.vercel.app/addVisa")
      .then((response) => response.json())
      .then((data) => {
        // Sort by latest and take only the first 6 visas
        const latestVisas = data.sort((a, b) => b._id.localeCompare(a._id)).slice(0, 6);
        setVisas(latestVisas);
      })
      .catch((error) => console.error("Failed to fetch visas:", error));
  }, []);

  return (
    <div className="latest-visas container mx-auto mt-20">
      <h2 className="text-4xl font-bold mb-4 text-center">Latest Visas</h2>
      <div className="visa-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {visas.map((visa) => (
          <div key={visa._id} className="visa-card border p-4 rounded shadow">
            <img src={visa.countryImg} alt={visa.countryName} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-lg font-semibold">{visa.countryName}</h3>
            <p><strong>Visa Type:</strong> {visa.visaType}</p>
            <p><strong>Processing Time:</strong> {visa.processTime} days</p>
            <p><strong>Fee:</strong> ${visa.fee}</p>
            <p><strong>Validity:</strong> {visa.validity} months</p>
            <p><strong>Application Method:</strong> {visa.appMethod}</p>
            <button
              className="mt-4 bg-[#00CC99] text-white px-4 py-2 rounded"
              onClick={() => navigate(`/visa-details/${visa._id}`)}
            >
              See Details
            </button>
          </div>
        ))}
      </div>
      <button
        className="mt-6 bg-white text-[#00CC99] px-10 py-5 rounded block mx-auto text-lg font-bold shadow-xl hover:bg-[#00CC99] hover:text-white"
        onClick={() => navigate("/allVisas")}
      >
        See All Visas
      </button>
    </div>
  );
};

export default LatestVisas;
