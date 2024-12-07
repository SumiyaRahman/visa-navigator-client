import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch user's applications
    fetch(`http://localhost:4000/myApplications?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, [user.email]);

  const handleCancel = (id) => {
    fetch(`http://localhost:4000/myApplications/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setApplications((prev) => prev.filter((app) => app._id !== id));
      });
  };

  return (
    <div>
        <Navbar></Navbar>
        <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-8">My Applications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {applications.map((app) => (
          <div key={app._id} className="bg-white shadow-md rounded-lg p-5">
            <img
              src={app.countryImg}
              alt={app.countryName}
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{app.countryName}</h2>
            <p>Type: {app.visaType}</p>
            <p>Processing Time: {app.processTime}</p>
            <p>Applied Date: {app.appliedDate}</p>
            <p>Fee: ${app.fee}</p>
            <p>Applicant: {`${app.firstName} ${app.lastName}`}</p>
            <button
              className="btn btn-error mt-4 w-full"
              onClick={() => handleCancel(app._id)}
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MyVisaApplications;
