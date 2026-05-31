import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header scrolled">
            <div className="container nav-container">
                <NavLink to="/" classclass="logo" onClick={closeMenu} className="logo">
                    <span className="logo-dot"></span> Malshan.N
                </NavLink>
                
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
                    <ul className="nav-list">
                        <li>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                onClick={closeMenu}
                                end
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                onClick={closeMenu}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/skills" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                onClick={closeMenu}
                            >
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/experience" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                onClick={closeMenu}
                            >
                                Experience
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/projects" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                onClick={closeMenu}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/photography" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                onClick={closeMenu}
                            >
                                Photography
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/contact" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                onClick={closeMenu}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="nav-actions">
                    {/* Theme Toggle Button */}
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? (
                            <i className="fa-solid fa-sun sun-icon" style={{ display: 'block' }}></i>
                        ) : (
                            <i className="fa-solid fa-moon moon-icon" style={{ display: 'block' }}></i>
                        )}
                    </button>

                    {/* CV Download Link */}
                    <a href="/assets/Malshan_Nawarathna_CV.pdf" className="btn btn-outline cv-btn" download="Malshan_Nawarathna_CV.pdf">
                        <i className="fa-solid fa-download"></i> CV
                    </a>

                    {/* Mobile Menu Button */}
                    <button className="mobile-menu-toggle" onClick={handleMenuToggle} aria-label="Toggle Menu">
                        {isMenuOpen ? (
                            <i className="fa-solid fa-xmark close-icon" style={{ display: 'block' }}></i>
                        ) : (
                            <i className="fa-solid fa-bars menu-icon" style={{ display: 'block' }}></i>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
