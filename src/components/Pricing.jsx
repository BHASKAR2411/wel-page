

import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section id="price" className="bg-gray-800/50 text-white mt-25 py-16 px-6">
      <div className="max-w-7xl mt-7 mx-auto">
        {/* Basic Plans */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Basic Plans</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <PricingCard
            duration="Free Trial"
            oldPrice="Rs.0"
            newPrice="Rs.0"
            features={["Free trail for 15 days"]}
          />
          <PricingCard
            duration="1 Months"
            oldPrice="Rs.599"
            newPrice="Rs.199"
            features={["All feature for 1 Month"]}
          />
          <PricingCard
            duration="6 Months"
            oldPrice="Rs.4999"
            newPrice="Rs.999"
            features={["All feature for 6 Months"]}
          />
          <PricingCard
            duration="1 Year"
            oldPrice="Rs.9999"
            newPrice="Rs.1650"
            features={["All feature for 1 year"]}
          />
        </div>

        {/* Classic Plans */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mt-24 mb-12">Classic Plans</h2>
        <div className="flex justify-center">
          <p className="text-xl sm:text-2xl text-center text-gray-300">Coming soon.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
