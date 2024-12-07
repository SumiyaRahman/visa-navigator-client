import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const VisaDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [visa, setVisa] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch visa details by ID
    fetch(`http://localhost:4000/addVisa/${id}`)
      .then((res) => res.json())
      .then((data) => setVisa(data));
  }, [id]);

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;

    const application = {
      visaId: id,
      email: user.email,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      appliedDate: new Date().toLocaleDateString(),
      fee: visa.fee,
      countryName: visa.countryName,
      countryImg: visa.countryImg,
      visaType: visa.visaType,
      processTime: visa.processTime,
      validity: visa.validity,
      appMethod: visa.appMethod,
    };

    // Save application to the server
    fetch("http://localhost:4000/applyVisa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(application),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Application submitted successfully!");
          setShowModal(false);
        }
      });
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <img
          src={visa.countryImg}
          alt={visa.countryName}
          className="h-60 w-full object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{visa.countryName}</h1>
        <p>Type: {visa.visaType}</p>
        <p>Processing Time: {visa.processTime}</p>
        <p>Fee: ${visa.fee}</p>
        <p>Validity: {visa.validity}</p>
        <p>Application Method: {visa.appMethod}</p>
        <p>Description: {visa.description}</p>

        <button
          className="btn btn-primary mt-6 w-full"
          onClick={() => setShowModal(true)}
        >
          Apply for Visa
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Apply for Visa</h2>
            <form onSubmit={handleApply}>
              <div className="mb-4">
                <label>Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  defaultValue={user.email}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label>Applied Date</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  defaultValue={new Date().toLocaleDateString()}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label>Fee</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  defaultValue={visa.fee}
                  readOnly
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Apply
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
