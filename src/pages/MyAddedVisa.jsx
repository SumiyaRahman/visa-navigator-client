import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider"; // Import your AuthContext
import Swal from "sweetalert2";

const MyAddedVisa = () => {
  const [visas, setVisas] = useState([]); // State to store user's visas
  const [loading, setLoading] = useState(true); // Loading state
  const { user } = useContext(AuthContext); // Get the user context
  const uid = user?.uid;

  // Fetch user's added visas
  useEffect(() => {
    if (!uid) return; // If there's no user, don't fetch data

    const fetchVisas = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/myAddedVisa/${uid}` // Corrected to match the API route
        );
        const result = await response.json();

        if (response.ok) {
          setVisas(result); // Set visas if successful
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: result.error || "Failed to fetch visas.",
          });
        }
      } catch (error) {
        console.error("Error fetching user's visas:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while fetching visas.",
        });
      } finally {
        setLoading(false); // Stop loading when done
      }
    };

    fetchVisas();
  }, [uid]);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p>Loading your added visas...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#00CC99]">
          My Added Visas
        </h1>
        {visas.length === 0 ? (
          <p className="text-center text-xl text-gray-600">
            You haven't added any visas yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visas.map((visa) => (
              <div key={visa._id} className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={visa.countryImg}
                  alt={visa.countryName}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold text-[#00CC99]">
                  {visa.countryName}
                </h2>
                <p className="text-gray-700">Visa Type: {visa.visaType}</p>
                <p className="text-gray-600">
                  Processing Time: {visa.processTime}
                </p>
                <p className="text-gray-600">Age: {visa.age}</p>
                <p className="text-gray-600">Fee: ${visa.fee}</p>
                <p className="text-gray-600">Validity: {visa.validity}</p>
                <button
                  className="mt-4 w-full py-2 bg-[#00CC99] text-white font-bold rounded-lg"
                  onClick={() =>
                    alert(`More details about ${visa.countryName}`)
                  } // Handle the click event
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAddedVisa;
