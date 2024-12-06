import React from "react";

const LatestVisas = () => {
  return (
    <section className="py-10 px-5 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Visas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Visa Card 1 */}
        <div className="card bg-base-100 shadow-xl border border-gray-200">
          <figure>
            <img
              src="https://example.com/images/usa.png"
              alt="United States"
              className="h-40 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="text-xl font-semibold">United States</h3>
            <p>
              <span className="font-bold">Visa Type:</span> Tourist Visa
            </p>
            <p>
              <span className="font-bold">Processing Time:</span> 10-15 Business
              Days
            </p>
            <p>
              <span className="font-bold">Fee:</span> $160
            </p>
            <p>
              <span className="font-bold">Validity:</span> 6 Months
            </p>
            <p>
              <span className="font-bold">Application Method:</span> Online
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-primary w-full">See Details</button>
            </div>
          </div>
        </div>

        {/* Visa Card 2 */}
        <div className="card bg-base-100 shadow-xl border border-gray-200">
          <figure>
            <img
              src="https://example.com/images/canada.png"
              alt="Canada"
              className="h-40 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="text-xl font-semibold">Canada</h3>
            <p>
              <span className="font-bold">Visa Type:</span> Student Visa
            </p>
            <p>
              <span className="font-bold">Processing Time:</span> 20-30 Business
              Days
            </p>
            <p>
              <span className="font-bold">Fee:</span> $150
            </p>
            <p>
              <span className="font-bold">Validity:</span> Duration of Study
              Program
            </p>
            <p>
              <span className="font-bold">Application Method:</span> Online
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-primary w-full">See Details</button>
            </div>
          </div>
        </div>

        {/* Visa Card 3 */}
        <div className="card bg-base-100 shadow-xl border border-gray-200">
          <figure>
            <img
              src="https://example.com/images/uk.png"
              alt="United Kingdom"
              className="h-40 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="text-xl font-semibold">United Kingdom</h3>
            <p>
              <span className="font-bold">Visa Type:</span> Work Visa
            </p>
            <p>
              <span className="font-bold">Processing Time:</span> 15-20 Business
              Days
            </p>
            <p>
              <span className="font-bold">Fee:</span> $700
            </p>
            <p>
              <span className="font-bold">Validity:</span> 3 Years
            </p>
            <p>
              <span className="font-bold">Application Method:</span> Online
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-primary w-full">See Details</button>
            </div>
          </div>
        </div>
      </div>

      {/* "See All Visas" Button */}
      <div className="text-center mt-8">
        <button className="btn btn-secondary">See All Visas</button>
      </div>
    </section>
  );
};

export default LatestVisas;
