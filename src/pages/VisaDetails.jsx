import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";

const VisaDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [visa, setVisa] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: user?.email || "",
    uid: user?.uid || "", // Include the UID of the logged-in user
    firstName: "",
    lastName: "",
    appliedDate: new Date().toISOString().split("T")[0], // Current date
    fee: "",
  });

  // Fetch visa details by ID
  useEffect(() => {
    fetch(`http://localhost:4000/addVisa/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVisa(data);
        setFormData((prevFormData) => ({
          ...prevFormData,
          fee: data.fee,
        }));
      })
      .catch((error) => console.error("Error fetching visa details:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/applyVisa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, visaId: id }),
      });

      const result = await response.json();
      if (response.ok) {
        Swal.fire(
          "Success",
          "Your visa application has been submitted!",
          "success"
        );
        setIsModalOpen(false);
      } else {
        Swal.fire("Error", result.error || "Failed to apply for visa", "error");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      Swal.fire(
        "Error",
        "An error occurred while submitting your application",
        "error"
      );
    }
  };

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
          <button
            className="btn mt-5 bg-[#00CC99] text-white"
            onClick={() => setIsModalOpen(true)}
          >
            Apply for the visa
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-bold mb-4">Apply for the Visa</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Applied Date</label>
                <input
                  type="text"
                  name="appliedDate"
                  value={formData.appliedDate}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Fee</label>
                <input
                  type="number"
                  name="fee"
                  value={formData.fee}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-2 px-4 bg-[#00CC99] text-white font-bold rounded-lg"
                >
                  Apply
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="py-2 px-4 bg-red-500 text-white font-bold rounded-lg ml-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
