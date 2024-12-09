import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider"; // Import your AuthContext
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyAddedVisa = () => {
  const [visas, setVisas] = useState([]); // State to store user's visas
  const [loading, setLoading] = useState(true); // Loading state
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [currentVisa, setCurrentVisa] = useState(null); // State for selected visa
  const [formData, setFormData] = useState({
    countryName: "",
    countryImg: "",
    visaType: "",
    processTime: "",
    fee: "",
    validity: "",
    applicationMethod: "",
  }); // Form data state
  const { user } = useContext(AuthContext); // Get the user context
  const uid = user?.uid;

  // Fetch user's added visas
  useEffect(() => {
    if (!uid) return; // If there's no user, don't fetch data

    const fetchVisas = async () => {
      try {
        const response = await fetch(
          `https://visa-navigator-project.vercel.app/myAddedVisa/${uid}` // Corrected to match the API route
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

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Open the modal and set the form data with the visa to be updated
  const handleUpdate = (visaId) => {
    const selectedVisa = visas.find((visa) => visa._id === visaId);
    setCurrentVisa(selectedVisa); // Set the selected visa
    setFormData({
      countryName: selectedVisa.countryName,
      countryImg: selectedVisa.countryImg,
      visaType: selectedVisa.visaType,
      processTime: selectedVisa.processTime,
      fee: selectedVisa.fee,
      validity: selectedVisa.validity,
      applicationMethod: selectedVisa.applicationMethod,
    });
    setIsModalOpen(true); // Open the modal
  };

  // Submit the updated visa data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentVisa?._id) {
      Swal.fire("Error", "Visa information is missing.", "error");
      return;
    }

    // Add the uid to the formData object
    const updatedFormData = {
      ...formData,
      uid, // Add the uid here
    };

    try {
      const response = await fetch(
        `https://visa-navigator-project.vercel.app/addVisa/${currentVisa._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData), // Send the updatedFormData
        }
      );

      const result = await response.json();

      if (response.ok) {
        Swal.fire("Success", "Visa updated successfully", "success");
        setIsModalOpen(false); // Close the modal
        setVisas(
          visas.map((visa) =>
            visa._id === currentVisa._id
              ? { ...visa, ...updatedFormData }
              : visa
          )
        );
      } else {
        Swal.fire("Error", result.error || "Failed to update visa", "error");
      }
    } catch (error) {
      console.error("Error updating visa:", error);
      Swal.fire("Error", "An error occurred while updating visa", "error");
    }
  };

  const handleDelete = async (visaId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `https://visa-navigator-project.vercel.app/deleteVisa/${visaId}`,
            {
              method: "DELETE",
            }
          );

          const result = await response.json();

          if (response.ok) {
            Swal.fire("Deleted!", "Visa has been deleted.", "success");
            setVisas(visas.filter((visa) => visa._id !== visaId)); // Update the state
          } else {
            Swal.fire(
              "Error",
              result.error || "Failed to delete visa",
              "error"
            );
          }
        } catch (error) {
          console.error("Error deleting visa:", error);
          Swal.fire("Error", "An error occurred while deleting visa", "error");
        }
      }
    });
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        <p>Loading your added visas...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-10 px-4">
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
                <div
                  key={visa._id}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
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
                  <p className="text-gray-600">Fee: ${visa.fee}</p>
                  <p className="text-gray-600">Validity: {visa.validity}</p>
                  <div className="flex justify-between mt-5">
                    <button
                      className="py-2 px-4 bg-[#00CC99] text-white font-bold rounded-lg"
                      onClick={() => handleUpdate(visa._id)}
                    >
                      Update
                    </button>
                    <button
                      className="py-2 px-4 bg-red-500 text-white font-bold rounded-lg"
                      onClick={() => handleDelete(visa._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>

      {isModalOpen && (
  <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative">
      {/* Close Button at Top-Right */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
      >
        &times;
      </button>

      <h2 className="text-2xl font-bold mb-4">Update Visa</h2>
      {/* Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Country Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Country Name</label>
          <input
            type="text"
            name="countryName"
            value={formData.countryName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Country Image URL */}
        <div className="mb-4">
          <label className="block text-gray-700">Country Image URL</label>
          <input
            type="text"
            name="countryImg"
            value={formData.countryImg}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Visa Type */}
        <div className="mb-4">
          <label className="block text-gray-700">Visa Type</label>
          <input
            type="text"
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Processing Time */}
        <div className="mb-4">
          <label className="block text-gray-700">Processing Time</label>
          <input
            type="text"
            name="processTime"
            value={formData.processTime}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Fee */}
        <div className="mb-4">
          <label className="block text-gray-700">Fee</label>
          <input
            type="number"
            name="fee"
            value={formData.fee}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Validity */}
        <div className="mb-4">
          <label className="block text-gray-700">Validity</label>
          <input
            type="text"
            name="validity"
            value={formData.validity}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Application Method */}
        <div className="mb-4 col-span-1 md:col-span-2">
          <label className="block text-gray-700">Application Method</label>
          <input
            type="text"
            name="applicationMethod"
            value={formData.applicationMethod}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Buttons */}
        <div className="flex justify-end col-span-1 md:col-span-2">
          <button
            type="submit"
            className="py-2 px-4 bg-[#00CC99] text-white font-bold rounded-lg mr-2"
          >
            Update Visa
          </button>
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="py-2 px-4 bg-red-500 text-white font-bold rounded-lg"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default MyAddedVisa;
