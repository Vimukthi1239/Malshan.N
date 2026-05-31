import React from 'react';

export default function About() {
    return (
        <section id="about" class="about-section section-padding page-fade-in">
            <div class="container">
                <div class="section-header text-center">
                    <h2 class="section-title">About <span class="highlight">Me</span></h2>
                    <p class="section-subtitle">Introduction and Academic Background</p>
                </div>
                
                <div class="about-grid">
                    <div class="about-card intro-card">
                        <h3>Professional Summary</h3>
                        <p class="lead-text">
                            I am a Data Science student with a strong passion for automation, cloud architecture, and MLOps.
                        </p>
                        <p>
                            Supported by academic research in digital branding and a proven track record in financial management, I focus on bridging the gap between technical AI execution and operational efficiency. I love building serverless backends, automating machine learning loops, and crafting neat web interfaces.
                        </p>
                        <div class="quick-facts">
                            <div class="fact-item">
                                <span class="fact-icon"><i class="fa-solid fa-location-dot"></i></span>
                                <span class="fact-text">Hettimulla, Kegalle, Sri Lanka</span>
                            </div>
                            <div class="fact-item">
                                <span class="fact-icon"><i class="fa-solid fa-graduation-cap"></i></span>
                                <span class="fact-text">BSc (Hons) in Data Science Undergraduate</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="about-card education-card">
                        <h3>Education</h3>
                        
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-dot"></div>
                                <div class="timeline-date">Expected Jan 2027</div>
                                <h4 class="timeline-title">BSc (Hons) in Data Science</h4>
                                <p class="timeline-institution">SLTC Research University</p>
                                <ul class="timeline-highlights">
                                    <li><strong>Cumulative GPA:</strong> 3.01</li>
                                    <li>Active participant in the 'Winning Edge' Skill Development Programme (Platinum Level)</li>
                                </ul>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-dot"></div>
                                <div class="timeline-date">2011 - 2020</div>
                                <h4 class="timeline-title">GCE Advanced Level & Ordinary Level</h4>
                                <p class="timeline-institution">Kg/Bandaranayke National School</p>
                                <ul class="timeline-highlights">
                                    <li>Successfully completed foundational secondary education</li>
                                    <li><strong>A/L Result (Physical Science):</strong> Combined Mathematics (A), Chemistry (B), Physics (C)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
