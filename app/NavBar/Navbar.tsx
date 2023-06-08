'use client';
import React, { useRef } from "react";

const Navbar = () => {
  const componentRef = useRef(null);

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('About');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('Projects');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContacts = (e) => {
    
  }


  return (
    <div className="cursor self-center z-100">
      <ul className="w-48">
        <li className="font-bold text-center text-red-800 py-2 border-solid border-black-200 cursor-pointer nav-item typing-demo1">
          <a href="#About" onClick={handleScrollToAbout}>
            /About-Me
          </a>
        </li>
        <li className="font-bold text-center text-red-800 py-2 border-solid border-black-200 cursor-pointer nav-item typing-demo2" onClick={handleScrollToProjects}>
          /Projects
        </li>
        <a target={"_blank"} href="Jaurice_Barber_Resume_06-06-2023-14-58-28.pdf" className="font-bold text-center text-red-800 py-2 border-solid border-black-200 cursor-pointer nav-item typing-demo3">
          /Resume
        </a>
        <li className="font-bold text-center text-red-800 py-2 border-solid border-black-200 cursor-pointer nav-item typing-demo4" onClick={handleContacts} id="Contact">
          <a target={"_blank"} href="https://www.linkedin.com/in/jaurice-barber-6662a0252/">/Contact-Me </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
