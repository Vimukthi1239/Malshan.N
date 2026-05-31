import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-left">
                    <p>&copy; {new Date().getFullYear()} Malshan Nawarathna. All Rights Reserved.</p>
                </div>
                <div className="footer-right">
                    <a href="https://linkedin.com/in/vimukthi1239" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/vimukthi1239" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="mailto:2000malshan@gmail.com" aria-label="Email">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
