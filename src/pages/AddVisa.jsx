import React, { useContext } from "react";
import Navbar from "../components/Navbar";
// import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import Footer from "../components/Footer";

const AddVisa = () => {
  const { user } = useContext(AuthContext);
  const handleAddVisa = async (e) => {
    e.preventDefault();
    // Access the currently logged-in user's uid
    
    const uid = user?.uid;

    const form = e.target;
    if (!uid) {
      Swal.fire({
        icon: "error",
        title: "Not Authorized",
        text: "You must be logged in to add a visa.",
      });
      return;
    }

    // Collect all form data
    const visaData = {
      countryImg: form.countryImg.value,
      countryName: form.countryName.value,
      visaType: form.visaType.value,
      processTime: form.processTime.value,
      requiredDocuments: Array.from(
        form.querySelectorAll("input[type='checkbox']:checked")
      ).map((checkbox) => checkbox.value),
      description: form.description.value,
      age: form.age.value,
      fee: form.fee.value,
      validity: form.validity.value,
      appMethod: form.appMethod.value,
      uid, // Add the user's uid to the data being sent
    };

    

    // Send the data to the backend API
    try {
      const response = await fetch("https://visa-navigator-project.vercel.app/addVisa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(visaData),
      });

      const result = await response.json();

      if (result?.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Visa added successfully!",
        });
        form.reset(); // Clear the form
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Failed to add visa. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error adding visa:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. Please check the console for details.",
      });
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 py-10 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-4xl">
          <h1 className="text-4xl font-extrabold mb-8 text-center text-[#00CC99]">
            Add a New Visa
          </h1>
          <form onSubmit={handleAddVisa}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Country Image */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Country Image URL
                </label>
                <input
                  type="text"
                  name="countryImg"
                  className="input input-bordered w-full px-4 py-3 rounded-lg shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter image URL (e.g., imgbb link)"
                />
              </div>

              {/* Country Name */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Country Name
                </label>
                <input
                  type="text"
                  name="countryName"
                  className="input input-bordered w-full px-4 py-3 rounded-lg shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter country name"
                />
              </div>

              {/* Visa Type */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Visa Type
                </label>
                <select
                  name="visaType"
                  className="select select-bordered w-full px-4 py-3 rounded-lg shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                >
                  <option value="Tourist visa">Tourist visa</option>
                  <option value="Student visa">Student visa</option>
                  <option value="Official visa">Official visa</option>
                </select>
              </div>

              {/* Processing Time */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Processing Time
                </label>
                <input
                  type="text"
                  name="processTime"
                  className="input input-bordered w-full px-4 py-3 rounded-lg shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter processing time (e.g., 7-10 days)"
                />
              </div>

              {/* Required Documents */}
              <div className="md:col-span-2">
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Required Documents
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="Valid passport"
                      className="checkbox checkbox-primary"
                    />
                    <span className="text-gray-600">Valid passport</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="Visa application form"
                      className="checkbox checkbox-primary"
                    />
                    <span className="text-gray-600">Visa application form</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value="Recent passport-sized photograph"
                      className="checkbox checkbox-primary"
                    />
                    <span className="text-gray-600">
                      Recent passport-sized photograph
                    </span>
                  </label>
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered w-full px-4 py-3 rounded-lg shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter visa description"
                ></textarea>
              </div>

              {/* Age Restriction */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Age Restriction
                </label>
                <input
                  type="number"
                  name="age"
                  className="input input-bordered w-full px-4 py-3 rounded-lg shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter age restriction (if any)"
                />
              </div>

              {/* Fee */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Fee
                </label>
                <input
                  type="number"
                  name="fee"
                  className="input input-bordered w-full px-4 py-3 rounded-lg shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter visa fee"
                />
              </div>

              {/* Validity */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Validity
                </label>
                <input
                  type="text"
                  name="validity"
                  className="input input-bordered w-full px-4 py-3 rounded-lg shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter validity period (e.g., 6 months)"
                />
              </div>

              {/* Application Method */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Application Method
                </label>
                <input
                  type="text"
                  name="appMethod"
                  className="input input-bordered w-full px-4 py-3 rounded-lg shadow-sm border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter application method (e.g., online, in-person)"
                />
              </div>
            </div>

            {/* Add Visa Button */}
            <button
              type="submit"
              className="btn w-full py-3 mt-8 bg-[#00CC99] text-white font-bold text-lg rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              Add Visa
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddVisa;
