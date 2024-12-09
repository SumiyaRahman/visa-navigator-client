import React from "react";
import { Fade, Zoom } from "react-awesome-reveal"; // Import animations

const VisaTypesSection = () => {
  const visaTypes = [
    {
      id: 1,
      title: "Tourist Visa",
      description:
        "Visit new places to discover with a Tourist Visa. We deliver your documents with ease.",
      icon: "✈️",
      bgColor: "bg-orange-100",
      textColor: "text-orange-500",
    },
    {
      id: 2,
      title: "Commercial Visa",
      description:
        "Develop your trade and set up new sales channels. Your visa is ready!",
      icon: "📊",
      bgColor: "bg-purple-100",
      textColor: "text-purple-500",
    },
    {
      id: 3,
      title: "Student Visa",
      description:
        "Embark on a journey of higher education in a foreign country.",
      icon: "🎓",
      bgColor: "bg-green-100",
      textColor: "text-green-500",
    },
    {
      id: 4,
      title: "Residence Visa",
      description:
        "Expert guidance for a seamless immigration journey to your dream destination.",
      icon: "🏠",
      bgColor: "bg-blue-100",
      textColor: "text-blue-500",
    },
    {
      id: 5,
      title: "Working Visa",
      description:
        "Get your visa for new business and earning opportunities. We deliver your documents quickly.",
      icon: "💼",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-500",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-6 lg:px-20 mt-20">
        {/* Heading */}
        <Fade direction="up" cascade triggerOnce>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Visa Types and Eligibility Assessment
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Explore various visa options tailored for your needs.
            </p>
          </div>
        </Fade>

        {/* Visa Types Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visaTypes.map((visa) => (
            <Zoom key={visa.id} triggerOnce>
              <div
                className="flex flex-col bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div
                  className={`h-16 w-16 flex items-center justify-center text-3xl font-bold rounded-full ${visa.bgColor} ${visa.textColor}`}
                >
                  {visa.icon}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {visa.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-2">{visa.description}</p>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisaTypesSection;
