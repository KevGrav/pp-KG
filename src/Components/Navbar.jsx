import React from 'react'
import KGLogo from "../assets/images/KG-Logo.png"

const Navbar = () => {
  return (
    <nav className='w-[95%] bg-blue-900 text-white px-8 md:px-16 lg:px-20 fixed top-0'>
        <div className='container py-10 flex justify-center items-center md:justify-between'>
            
              <img src={KGLogo} alt="Company Logo" className="hidden md:inline max-w-[100px]" />
            
            <div className='space-x-6'>
                <a href="#home" className="bg-cyan-600 text-white border-2 hidden md:inline
             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hover:text-gray-200">Home </a>
                <a href="#about" className="bg-cyan-600 text-white border-2 hidden md:inline
             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hover:text-gray-200">About </a>
                <a href="#projects" className="bg-cyan-600 text-white border-2 hidden md:inline
             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hover:text-gray-200">Projects </a>
                <a href="#contact" className="bg-cyan-600 text-white border-2 hidden md:inline
             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hover:text-gray-200">Contact </a>
              </div>
            
        </div>
    </nav>
  )
}

export default Navbar