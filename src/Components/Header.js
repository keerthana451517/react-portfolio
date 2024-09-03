// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll'; // Import for smooth scrolling

const Header = () => {
  return (
    <header>
      <nav>
        <ul>h
          <li><a href="https://github.com/keerthana451517" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/keerthana-g-404118286/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><Link to="landing" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
