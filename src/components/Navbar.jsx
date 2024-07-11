import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Jsoftwares</div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>
      <ul className={isOpen ? "navbar-links open" : "navbar-links"}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/team" onClick={toggleMenu}>Team</Link></li>
        <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
        <li><Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
