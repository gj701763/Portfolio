import React from "react";

// Inline experience data — replace `img` with your actual image path/import
const experiences = [
  {
    id: 1,
    role: "Full Stack Developer (React & Java)",
    company: "Gavkari Agro Producer Company Limited",
    date: "Mar 2023 – Present",
    location: "Pune, Maharashtra",
    img: "/gavkari-logo.png", // ← swap with your real logo path
    desc: "Building and maintaining end-to-end web features using React on the frontend and Java Spring Boot on the backend. Delivered admin dashboards, microservices, and CI/CD pipelines that gave operations teams direct control and significantly improved system reliability.",
    skills: [
      "React",
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "MySQL",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Jenkins",
      "REST APIs",
      "Git",
      "Agile",
    ],
    bullets: [
      {
        label: "Full Stack Development",
        detail:
          "Built and maintained end-to-end web features using React and Java Spring Boot, cutting page load and server response times through targeted code and architecture improvements.",
      },
      {
        label: "Frontend Development",
        detail:
          "Designed a library of reusable React components and form abstractions that reduced duplication and made UI updates faster to ship.",
      },
      {
        label: "Backend & APIs",
        detail:
          "Developed RESTful APIs and Spring Cloud microservices handling business-critical workflows with emphasis on security, clear contracts, and low latency.",
      },
      {
        label: "Admin Dashboards",
        detail:
          "Delivered full-featured dashboards covering user management, role configuration, and reporting — giving ops teams direct control without developer involvement.",
      },
      {
        label: "Database Optimization",
        detail:
          "Resolved slow query bottlenecks in MySQL and PostgreSQL through index tuning, query rewrites, and schema adjustments.",
      },
      {
        label: "Security",
        detail:
          "Secured application access using JWT-based token authentication and fine-grained role-based access control.",
      },
      {
        label: "DevOps",
        detail:
          "Set up Jenkins-based CI/CD pipelines with Docker containerization, enabling reliable, repeatable deployments.",
      },
      {
        label: "Collaboration",
        detail:
          "Worked within an Agile team using Git and GitHub for version control and collaborative development.",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2">
      {/* Section Title */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 mx-auto mt-4 bg-purple-500"></div>
        <p className="mt-4 text-lg font-semibold text-gray-400">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 w-1 h-full transform -translate-x-1/2 bg-white sm:left-1/2 sm:-translate-x-0"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}>
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="object-cover w-full h-full rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-3xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}>
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="flex-shrink-0 w-16 h-16 overflow-hidden bg-white rounded-md">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Role, Company Name, Date, Location */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {experience.role}
                    </h3>
                    <h4 className="text-gray-300 text-md sm:text-sm">
                      {experience.company}
                    </h4>
                    {experience.location && (
                      <p className="text-xs text-purple-400 mt-0.5">
                        📍 {experience.location}
                      </p>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Summary description */}
              <p className="mt-4 text-gray-400">{experience.desc}</p>

              {/* Bullet points */}
              {experience.bullets && experience.bullets.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {experience.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="flex-shrink-0 w-2 h-2 mt-1 bg-purple-500 rounded-full"></span>
                      <span>
                        <span className="font-semibold text-gray-200">
                          {bullet.label}:{" "}
                        </span>
                        {bullet.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
