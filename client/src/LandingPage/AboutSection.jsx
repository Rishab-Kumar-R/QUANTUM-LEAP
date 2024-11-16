import React from "react";
import { useTheme } from "../Components/ThemeContext"; // Import ThemeContext for theme access
import { FaLinkedin, FaGithub } from "react-icons/fa";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";

const teamMembers = [
  {
    name: "Rishab Kumar",
    position: "Java Developer",
    bio: "Java developer with a passion for building efficient, scalable backend systems and crafting clean, maintainable code.",
    img: "https://via.placeholder.com/150",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/rishab-kumar-2229b7246/",
      github: "https://github.com/Rishab-Kumar-R",
    },
  },
  {
    name: "Sai Kiran Reddy",
    position: "AI Engineer",
    bio: "Passionate about building scalable AI applications, with a focus on machine learning, deep learning, and NLP.",
    img: "https://via.placeholder.com/150",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/sai-kiran-b85ba1252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/kiran1223",
    },
  },
  {
    name: "Ranjan Verma",
    position: "React Developer",
    bio: "A skilled React developer focused on building intuitive, high-performance interfaces and writing maintainable, scalable code.",
    img: "https://via.placeholder.com/150",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ranjan-kumar-verma-5aa805271",
      github: "https://github.com/Ranjan-33",
    },
  },
  {
    name: "Sharath Kumar S R",
    position: "React Developer",
    bio: "Self-proclaimed ‘React wizard’ who spends more time picking the perfect dark mode theme for VS Code than actually writing code.",
    img: "https://via.placeholder.com/150",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sharath-kumar-s-r-53381b251/",
      github: "https://github.com/sharath018",
    },
  },
];

export default function AboutSection() {
  const { theme } = useTheme(); // Access theme from context

  return (
    <>
      <NavBar />
      <div
        className={`min-h-screen flex flex-col items-center justify-center ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        {/* About Our Company Section */}
        <section className="flex flex-col items-start md:flex-row md:items-center my-8 max-w-5xl">
          <div className="w-full md:w-1/2 p-4">
            <img
              src="https://i.imgur.com/WbQnbas.png"
              alt="Company illustration"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-left p-4">
            <h2 className="text-sm font-semibold mb-2">ABOUT US</h2>
            <h1 className="text-4xl font-bold mb-4">
              About <span className="text-indigo-600">Our Company</span>
            </h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatem.
            </p>
          </div>
        </section>

        {/* Hero Section */}
        <section className="text-center my-8">
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-lg">
            A group of passionate professionals dedicated to delivering
            excellence.
          </p>
        </section>

        {/* Team Profiles */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`shadow-lg rounded-lg p-6 flex flex-col items-center text-center ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm mb-4">{member.position}</p>
              <p className="mb-4">{member.bio}</p>
              <div className="flex space-x-4">
                <a
                  href={member.socialLinks.linkedin}
                  className="hover:text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href={member.socialLinks.github}
                  className="hover:text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
      <FooterSection />
    </>
  );
}
