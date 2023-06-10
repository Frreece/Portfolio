'use client';
import { useState } from 'react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav role="navigation">
      <div id="menuToggle" onClick={handleToggle} className={isOpen ? 'open' : ''}>
        <input type="checkbox" checked={isOpen} readOnly />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a target={"_blank"} href="Jaurice_Barber_Resume_06-06-2023-14-58-28.pdf"><li className='text-red-700'>/Resume</li></a>
          <a target={"_blank"} href="https://www.linkedin.com/in/jaurice-barber-6662a0252/"><li className='text-red-700'>/Contact</li></a>
        </ul>
      </div>
    </nav>
  );
}

export default MobileNav;
