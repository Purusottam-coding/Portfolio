import React, { useState, useEffect } from 'react';
import { LogoIcon } from './Icons';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo" id="nav-logo" onClick={() => setIsMenuOpen(false)}>
          <LogoIcon size={24} className="nav-logo-icon" />
          <span>Purusottam</span><span className="logo-dot">.</span>
        </a>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navLinks">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li style={{ display: isMenuOpen ? 'block' : 'none', marginTop: '10px' }}>
            <a
              href="/Purusottam Barakoti_CV.pdf"
              download
              className="btn btn-sm btn-primary full-width"
              onClick={() => setIsMenuOpen(false)}
            >
              Download CV
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a
            href="/Purusottam Barakoti_CV.pdf"
            download
            className="btn btn-sm btn-primary nav-cv-btn"
            id="download-cv-nav"
          >
            Resume
          </a>

          <button
            className="hamburger"
            id="hamburger"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
