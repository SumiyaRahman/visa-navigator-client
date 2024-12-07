import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar";

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const [visas, setVisas] = useState([]);
  const [selectedVisa, setSelectedVisa] = useState(null);

  useEffect(() => {
    // Fetch visas added by the logged-in user
    fetch(`http://localhost:4000/myAddedVisas?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setVisas(data));
  }, [user.email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/myAddedVisas/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setVisas((prev) => prev.filter((visa) => visa._id !== id));
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedVisa = {
      countryImg: form.countryImg.value,
      countryName: form.countryName.value,
      visaType: form.visaType.value,
      processTime: form.processTime.value,
      fee: form.fee.value,
      validity: form.validity.value,
      appMethod: form.appMethod.value,
    };

    fetch(`http://localhost:4000/myAddedVisas/${selectedVisa._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedVisa),
    })
      .then((res) => res.json())
      .then(() => {
        // Update the state
        setVisas((prev) =>
          prev.map((visa) =>
            visa._id === selectedVisa._id ? { ...visa, ...updatedVisa } : visa
          )
        );
        setSelectedVisa(null); // Close the modal
      });
  };

  return (
    <div>
        <Navbar></Navbar>
        <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-8">My Added Visas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div key={visa._id} className="bg-white shadow-md rounded-lg p-5">
            <img
              src={visa.countryImg}
              alt={visa.countryName}
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold">{visa.countryName}</h2>
            <p>Type: {visa.visaType}</p>
            <p>Processing Time: {visa.processTime}</p>
            <p>Fee: ${visa.fee}</p>
            <p>Validity: {visa.validity}</p>
            <p>Application Method: {visa.appMethod}</p>
            <div className="flex justify-between mt-4">
              <button
                className="btn btn-secondary"
                onClick={() => setSelectedVisa(visa)}
              >
                Update
              </button>
              <button
                className="btn btn-error"
                onClick={() => handleDelete(visa._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {selectedVisa && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Update Visa</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label>Country Image URL</label>
                <input
                  type="text"
                  name="countryImg"
                  defaultValue={selectedVisa.countryImg}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label>Country Name</label>
                <input
                  type="text"
                  name="countryName"
                  defaultValue={selectedVisa.countryName}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label>Visa Type</label>
                <input
                  type="text"
                  name="visaType"
                  defaultValue={selectedVisa.visaType}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label>Processing Time</label>
                <input
                  type="text"
                  name="processTime"
                  defaultValue={selectedVisa.processTime}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label>Fee</label>
                <input
                  type="number"
                  name="fee"
                  defaultValue={selectedVisa.fee}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label>Validity</label>
                <input
                  type="text"
                  name="validity"
                  defaultValue={selectedVisa.validity}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label>Application Method</label>
                <input
                  type="text"
                  name="appMethod"
                  defaultValue={selectedVisa.appMethod}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Update
              </button>
            </form>
            <button
              className="btn btn-error w-full mt-4"
              onClick={() => setSelectedVisa(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default MyAddedVisas;
