import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import Contact from './pages/Contact';

// UX Helper: Scroll window back to top when switching routes
function ScrollToTop() {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
}

export default function App() {
    // Theme state initialized from local cache or default dark
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    // Back to top button visibility state
    const [showScrollBtn, setShowScrollBtn] = useState(false);

    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            if (window.scrollY > 400) {
                setShowScrollBtn(true);
            } else {
                setShowScrollBtn(false);
            }
        };

        window.addEventListener('scroll', handleScrollButtonVisibility);
        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Router>
            <ScrollToTop />
            <div className="app-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
                {/* Global Creative Background Animation */}
                <div className="global-bg-shapes">
                    <div className="global-shape g-shape-1"></div>
                    <div className="global-shape g-shape-2"></div>
                    <div className="global-shape g-shape-3"></div>
                    <div className="global-shape g-shape-4"></div>
                </div>

                <Navbar theme={theme} toggleTheme={toggleTheme} />
                
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/photography" element={<Photography />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                
                <Footer />

                {/* Floating Back to Top Button */}
                <button 
                    className={`back-to-top ${showScrollBtn ? 'active' : ''}`}
                    onClick={scrollToTop} 
                    aria-label="Back to Top"
                >
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
            </div>
        </Router>
    );
}
