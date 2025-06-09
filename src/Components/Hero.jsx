import React from 'react'
import HeroImage from '../assets/hero-image.jpg'

const Hero = () => {
  return (
    <section className="bg-blue-900 text-white py-24 px-6 md:px-16" id="home">
      {/* Row: Image + top-right text */}
      <div className="flex flex-col md:flex-row items-center pt-40 pb-20 justify-between max-w-6xl mx-auto">
        {/* Headshot (Left) */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={HeroImage}
            alt="KG Headshot"
            className="w-80 h-80 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text block (Right of image) */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2">Let's build something great together.</h2>
          <p className="text-md text-gray-300">
            Create with purpose, work with integrity, and grow with every experience. I believe in the power of continuous learning, collaboration, and staying curious. Each challenge is an opportunity to innovate, and each project is a chance to leave a lasting impact through thoughtful, effective solutions.
          </p>
        </div>
      </div>

      {/* Below: Main intro + buttons */}
      <div className="mt-12 text-center">
        <h1 className="text-4xl font-bold">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Kevin Gravell
          </span>
          , Full-Stack Web Developer
        </h1>

        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          I specialize in building modern and responsive web applications.
        </p>

        <div className="mt-8 space-x-4">
          {/* Contact Button */}
          <button
            className="bg-gradient-to-r from-green-400 to-cyan-600 w-30 text-white border-2
                       transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=kevcode4u@gmail.com&su=Hiring%20Inquiry&body=Hi%20Kevin,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.",
                "_blank"
              )
            }
          >
            Contact Me
          </button>

          {/* Resume Button */}
          <button
            className="bg-gradient-to-r from-cyan-600 to-green-400 w-30 text-white border-2
                       transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
            onClick={() => window.open("/resume_kevin_gravell.pdf")}
          >
            Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;