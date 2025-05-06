// src/components/Skills/Skills.jsx
import React from "react";
import { Certificationinfo } from "../../constants";

const Certification = () => (
  <section
    id="desc"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        Certification
      </h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="mt-4 text-lg font-semibold text-gray-400">
        Certifications earned through practical experience and projects,
        demonstrating proficiency in key technical skills
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap justify-between gap-1 py-10 lg:gap-5">
      {Certificationinfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-4 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="mb-4 text-2xl font-semibold text-center text-gray-400 sm:text-3xl">
            {category.title}
          </h3>

          <div className="mt-4 text-gray-400 ">{category.desc}</div>
          <div className="flex items-center justify-center w-full">
                <a
                  href={category.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-2 mt-5 text-base font-bold text-white transition duration-300 transform rounded-full hover:scale-105"
                  style={{
                    background: "linear-gradient(90deg, #8245ec, #a855f7)",
                    
                  }}
                >
                  {category.name} 
                </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Certification;
