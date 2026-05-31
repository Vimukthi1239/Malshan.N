import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const roles = ["Data Scientist", "MLOps Engineer", "Automation Developer", "Photographer"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [subText, setSubText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            timer = setTimeout(() => {
                setSubText(currentRole.substring(0, subText.length - 1));
            }, 55);
        } else {
            timer = setTimeout(() => {
                setSubText(currentRole.substring(0, subText.length + 1));
            }, 110);
        }

        if (!isDeleting && subText === currentRole) {
            timer = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && subText === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }

        return () => clearTimeout(timer);
    }, [subText, isDeleting, roleIndex]);

    return (
        <section id="hero" className="hero-section page-fade-in">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="badge-container">
                        <span className="badge"><span className="badge-pulse"></span> Data Science & MLOps</span>
                    </div>
                    <h1 className="hero-title">Malshan <br /><span className="highlight">Nawarathna</span></h1>
                    <h2 className="hero-subtitle">
                        I'm a <span className="txt-type">{subText}</span>
                        <span className="txt-cursor">|</span>
                    </h2>

                    <p className="hero-description">
                        High-potential undergraduate bridging artificial intelligence deployment with fiscal reliability. Specializing in designing automated, data-driven architectures for the digital economy.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/projects" className="btn btn-primary">
                            Explore Projects <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <a href="/assets/Malshan_Nawarathna_CV.pdf" className="btn btn-outline" download="Malshan_Nawarathna_CV.pdf">
                            Download CV <i className="fa-solid fa-file-arrow-down"></i>
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://linkedin.com/in/vimukthi1239" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/vimukthi1239" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="mailto:2000malshan@gmail.com" className="social-icon" aria-label="Email">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a href="tel:+94721298380" className="social-icon" aria-label="Phone">
                            <i className="fa-solid fa-phone"></i>
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-avatar-container">
                        <div className="avatar-glow-effect"></div>
                        <div className="avatar-frame">
                            <img src="/assets/profile.jpg" alt="Malshan Nawarathna" className="hero-avatar" />
                            <div className="avatar-light-ray"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
