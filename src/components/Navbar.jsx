
import React from "react";
import logo from "../assets/sae.png";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 shadow-md z-50 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 gap-4 sm:gap-0">
      {/* Logo */}
      <div className="cursor-pointer" onClick={scrollToTop}>
        <img src={logo} alt="Logo" className="h-12 sm:h-7 w-auto" />
      </div>

      {/* Button */}
      <a
        href="#price"
        className="bg-blue-600 text-white px-5 py-2 text-sm sm:text-base rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all"
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
      >
        View Pricing
      </a>
    </nav>
  );
};

export default Navbar;
