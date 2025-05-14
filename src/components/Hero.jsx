

import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen pt-32 sm:pt-24 px-4 sm:px-6">
      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 max-w-3xl mx-auto">
        A to Z solution for <br/> <span className="text-blue-600">Restaurant Order Management</span>
      </h1>

      {/* Subheading */}
      <p className="text-base sm:text-lg text-zinc-800 max-w-xl mx-auto">
        Discover our plans including free trial that are tailored to suit your needs.
      </p>

      {/* Button */}
      <a
        href="#price"
        onClick={(e) => {
          e.preventDefault();
          const offset = 100;
          const element = document.getElementById("price");
          if (element) {
            window.scrollTo({
              top: element.offsetTop - offset,
              behavior: "smooth",
            });
          }
        }}
        className="mt-8 inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white text-sm sm:text-base rounded-full hover:bg-blue-700 transition-all"
      >
        Get Started
      </a>
    </div>
  );
};

export default Hero;
