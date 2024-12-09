import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2"; // For user-friendly popups
import Footer from "../components/Footer";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]); // All applications
  const [filteredApplications, setFilteredApplications] = useState([]); // Filtered applications
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch user applications on component mount
  useEffect(() => {
    if (user?.uid) {
      fetch(`https://visa-navigator-project.vercel.app/myVisaApplications?uid=${user.uid}`)
        .then((res) => res.json())
        .then((data) => {
          setApplications(data);
          setFilteredApplications(data); // Initialize filtered list
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching applications:", error);
          setLoading(false);
        });
    }
  }, [user?.uid]);

  // Cancel application functionality
  const handleCancel = async (applicationId) => {
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
        const response = await fetch("https://visa-navigator-project.vercel.app/cancelVisaApplication", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ applicationId }),
        });

        const result = await response.json();

        if (response.ok) {
          Swal.fire("Cancelled!", "Your visa application has been cancelled.", "success");

          // Update state after cancellation
          setApplications((prev) => prev.filter((app) => app._id !== applicationId));
          setFilteredApplications((prev) => prev.filter((app) => app._id !== applicationId));
        } else {
          Swal.fire("Error", result.error || "Failed to cancel application", "error");
        }
      } catch (error) {
        console.error("Error cancelling application:", error);
        Swal.fire("Error", "An error occurred while cancelling the application", "error");
      }
    }
  };

  // Update search query state
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter applications based on search query
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredApplications(applications); // Show all if search is empty
    } else {
      const filtered = applications.filter((application) =>
        application.countryName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredApplications(filtered);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
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
            onChange={handleSearchChange}
            placeholder="Search by country name"
            className="input input-bordered w-full max-w-md"
          />
          <button
            onClick={handleSearch}
            className="btn btn-primary ml-4"
          >
            Search
          </button>
        </div>

        {filteredApplications.length === 0 ? (
          <p className="text-center">No applications found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredApplications.map((application) => (
              <div key={application._id} className="border p-5 rounded-lg shadow-md">
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
      <Footer></Footer>
    </div>
  );
};

export default MyVisaApplications;
