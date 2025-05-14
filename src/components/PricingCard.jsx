
import React from "react";

const PricingCard = ({ duration, oldPrice, newPrice, features }) => (
  <div className="bg-[#2a2a2a] text-white border border-gray-700 rounded-2xl mx-3 p-6 sm:p-8 shadow-md flex flex-col min-w-[260px] max-w-[300px] min-h-[400px] sm:min-h-[420px] flex-shrink-0">
    {/* Duration */}
    <h3 className="text-xl sm:text-2xl font-semibold mb-2">{duration}</h3>

    {/* Prices */}
    <p className="text-sm sm:text-base text-gray-400 line-through">{oldPrice}</p>
    <p className="text-2xl sm:text-3xl font-bold text-blue-500 mb-4">{newPrice}</p>

    {/* Features */}
    <ul className="text-sm sm:text-base mb-6 flex-grow space-y-2">
      {features.map((feature, index) => (
        <li key={index}>• {feature}</li>
      ))}
    </ul>

    {/* Button */}
    <a
      href="#"
      className="block text-center bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
    >
      Select Plan
    </a>
  </div>
);

export default PricingCard;
