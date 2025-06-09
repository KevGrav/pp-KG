import React from "react";
import AboutImage from "../assets/aboutme-image.jpg";

const About = () => {
  return (
    <div id="about" className="bg-blue-900 text-white py-1 scroll-mt-44" >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12" >About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="Avitar Me"
            className="w-72 h-110 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a full stack web developer based in East Tennessee. After a career change fueled by a lifelong passion for technology, I graduated from the Persevere Full Stack Web Development Program in November 2024.
I specialize in building dynamic and responsive web applications using modern JavaScript frameworks and tools. Whether it’s creating seamless front-end experiences or architecting scalable backend systems, I enjoy solving real-world problems through clean, efficient code.
I’m currently open to remote and freelance opportunities, and I’m excited to collaborate on projects that make an impact.

            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML5, CSS3 & ES6+
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-cyan-600 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Node JS & React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-cyan-600 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  MongoDB & Express
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-cyan-600 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center px-10 py-5">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-cyan-600">
                        Frontend
                    </h3>
                    <p>HTML5, CSS3, JS, TS, React.js </p>
                    <p>Tailwind Css, Material UI </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-cyan-600">
                        Backend
                    </h3>
                    <p>Node.js, Express.js</p>
                    <p>MongoDB, Compass</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-cyan-600">
                        Tools
                    </h3>
                    <p>GitHub, Postman, NPM</p>
                    <p>API's, JSON, JWT, MERN</p>
                </div>                
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;