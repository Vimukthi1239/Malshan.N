import React, { useState } from 'react';

export default function Skills() {
    const [activeTab, setActiveTab] = useState('programming');

    const skillCategories = {
        programming: [
            { name: "Python", icon: "fa-brands fa-python", percent: 90 },
            { name: "React", icon: "fa-brands fa-react", percent: 80 },
            { name: "JavaScript", icon: "fa-brands fa-js", percent: 85 },
            { name: "HTML5 & CSS3", icon: "fa-solid fa-code", percent: 90 },
            { name: "SQL (MySQL)", icon: "fa-solid fa-database", percent: 80 },
            { name: "Pandas & NumPy", icon: "fa-solid fa-chart-line", percent: 85 }
        ],
        mlops: [
            { name: "Docker", icon: "fa-brands fa-docker", percent: 85 },
            { name: "GitHub Actions", icon: "fa-solid fa-code-fork", percent: 80 },
            { name: "n8n Automation", icon: "fa-solid fa-network-wired", percent: 90 },
            { name: "AWS Lambda & Serverless", icon: "fa-brands fa-aws", percent: 75 },
            { name: "TensorFlow", icon: "fa-solid fa-brain", percent: 70 },
            { name: "Experiment Tracking (MLflow)", icon: "fa-solid fa-magnifying-glass-chart", percent: 75 }
        ],
        tools: [
            { name: "Power BI", icon: "fa-solid fa-chart-simple", percent: 80 },
            { name: "MongoDB", icon: "fa-solid fa-leaf", percent: 75 },
            { name: "Google Firebase", icon: "fa-solid fa-fire", percent: 80 },
            { name: "MS Excel", icon: "fa-regular fa-file-excel", percent: 90 },
            { name: "Plotly & Matplotlib", icon: "fa-solid fa-chart-pie", percent: 85 }
        ]
    };

    return (
        <section id="skills" class="skills-section section-padding page-fade-in">
            <div class="container">
                <div class="section-header text-center">
                    <h2 class="section-title">Technical <span class="highlight">Skills</span></h2>
                    <p class="section-subtitle">My core stack and domain expertise</p>
                </div>
                
                <div class="skills-tabs-container">
                    <div class="skills-tabs">
                        <button 
                            className={`tab-btn ${activeTab === 'programming' ? 'active' : ''}`}
                            onClick={() => setActiveTab('programming')}
                        >
                            Programming & Data
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'mlops' ? 'active' : ''}`}
                            onClick={() => setActiveTab('mlops')}
                        >
                            MLOps & Cloud
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tools')}
                        >
                            Tools & DBs
                        </button>
                    </div>
                </div>
                
                <div class="skills-content-container">
                    {Object.keys(skillCategories).map(catKey => (
                        <div 
                            key={catKey}
                            className={`skills-content ${activeTab === catKey ? 'active' : ''}`}
                            style={{ display: activeTab === catKey ? 'block' : 'none' }}
                        >
                            <div class="skills-grid">
                                {skillCategories[catKey].map((skill, idx) => (
                                    <div class="skill-card" key={idx}>
                                        <div class="skill-header">
                                            <span class="skill-name">
                                                <i class={skill.icon}></i> {skill.name}
                                            </span>
                                            <span class="skill-percentage">{skill.percent}%</span>
                                        </div>
                                        <div class="progress-bar-bg">
                                            <div 
                                                class="progress-bar-fill" 
                                                style={{ width: `${skill.percent}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
