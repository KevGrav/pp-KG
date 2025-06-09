import React from "react";

// Import your project images
import P1 from "../assets/tempConverter.png";
import P2 from "../assets/vending.png";
import P3 from "../assets/clonedleMain.png";

const projects = [
  {
    id: 1,
    name: "Temperature Converter",
    technologies: "Front End",
    description:
      "Simple App to convert temperatures between Fahrenheit, and Celsius using a responsive interface.",
    image: P1,
    github: "https://kevgrav.github.io/temperatureConverter/",
  },
  {
    id: 2,
    name: "Virtual Vending Machine",
    technologies: "Front End",
    description:
      "A simulated vending machine that lets users select items and see them dispense.",
    image: P2,
    github: "https://kevgrav.github.io/Virtual_Vending_Machine/",
  },
  {
    id: 3,
    name: "Clondle",
    technologies: "MERN Stack",
    description:
      "A Wordle-style clone with backend authentication and custom puzzles.",
    image: P3,
    github: "https://kevgrav.github.io/clonedle/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-blue-900 text-white py-20 scroll-mt-24" >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 min-h-[400px] flex flex-col justify-between"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-100 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-1">{project.technologies}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-400 to-cyan-600 text-white px-4 py-2 rounded-full"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
