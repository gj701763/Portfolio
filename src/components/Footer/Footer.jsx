import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Gajanan Jadhav</h2>
        <span className="text-xl font-medium text-purple-600">+918767737898</span>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center mt-4 space-x-4 sm:space-x-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="my-1 text-sm hover:text-purple-500 sm:text-base"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center mt-6 space-x-4">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=100055789510390" },
            { icon: <FaTwitter />, link: "https://x.com/Gajanan70650580" },
            { icon: <FaLinkedin />, link: "#" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/gaju_raje96k/" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/@gajananraje8742" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition-transform transform hover:text-purple-500 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="mt-6 text-sm text-gray-400">
          © 2025 Gajanan Jadhav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
