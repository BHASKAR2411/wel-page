
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white/10 text-black py-8 px-4 mt-16">
      <hr className="border-gray-300 mb-6" />

      <div className="max-w-7xl mx-auto  sm:flex-row justify-between items-center text-center gap-4 sm:gap-0">
        {/* Copyright */}
        <p className="text-sm sm:text-lg text-gray-700">
          © 2025 Iota Design and SAE Today. All rights reserved.
        </p>

        {/* Optional: Social icons (future use) */}
        {/* <div className="flex space-x-4">
          {[
            FaFacebookF,
            FaTwitter,
            FaYoutube,
            FaInstagram,
            FaLinkedinIn
          ].map((Icon, i) => (
            <a key={i} href="#" className="text-gray-600 hover:text-gray-900 transition">
              <Icon size={20} />
            </a>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

