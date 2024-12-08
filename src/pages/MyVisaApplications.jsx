import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2"; // For user-friendly popups

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]); // State for filtered applications
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.uid) {
      // Fetch applications for the logged-in user
      fetch(`http://localhost:4000/myVisaApplications?uid=${user.uid}`)
        .then((res) => res.json())
        .then((data) => {
          setApplications(data);
          setFilteredApplications(data); // Initially, show all applications
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching applications:", error);
          setLoading(false);
        });
    }
  }, [user?.uid]);

  const handleCancel = async (applicationId) => {
    // Confirm the cancellation action with the user
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "This application will be canceled permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
    });

    if (confirmed.isConfirmed) {
      try {
        const response = await fetch("http://localhost:4000/cancelVisaApplication", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ applicationId }),
        });

        const result = await response.json();

        if (response.ok) {
          Swal.fire("Cancelled!", "Your visa application has been cancelled.", "success");

          // Remove the cancelled application from the state
          setApplications((prevApplications) =>
            prevApplications.filter((app) => app._id !== applicationId)
          );
          setFilteredApplications((prevApplications) =>
            prevApplications.filter((app) => app._id !== applicationId)
          );
        } else {
          Swal.fire("Error", result.error || "Failed to cancel application", "error");
        }
      } catch (error) {
        console.error("Error canceling application:", error);
        Swal.fire("Error", "An error occurred while cancelling the application", "error");
      }
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredApplications(applications); // If search is empty, show all applications
    } else {
      const filtered = applications.filter((application) =>
        application.countryName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredApplications(filtered);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold text-center mb-8">My Visa Applications</h1>

        {/* Search Section */}
        <div className="flex justify-center items-center mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange} // Update search query state
            placeholder="Search by country name"
            className="input input-bordered w-full max-w-md"
          />
          <button
            onClick={handleSearch} // Trigger search
            className="btn btn-primary ml-4"
          >
            Search
          </button>
        </div>
        {/* End of Search Section */}

        {filteredApplications.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredApplications.map((application) => (
              <div key={application._id} className="border p-5 rounded-lg shadow-md">
                {/* Country Name */}
                <h2 className="text-2xl font-bold mb-2">{application.countryName}</h2>
                <img
                  src={application.countryImg}
                  alt={application.countryName}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p>Visa Type: {application.visaType}</p>
                <p>Processing Time: {application.processingTime}</p>
                <p>Fee: ${application.fee}</p>
                <p>Validity: {application.validity}</p>
                <p>Application Method: {application.applicationMethod}</p>
                <p>Applied Date: {application.appliedDate}</p>
                <p>
                  Applicant: {application.firstName} {application.lastName}
                </p>
                <p>Email: {application.email}</p>
                <button
                  onClick={() => handleCancel(application._id)}
                  className="mt-4 py-2 px-4 bg-red-500 text-white font-bold rounded-lg"
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyVisaApplications;
