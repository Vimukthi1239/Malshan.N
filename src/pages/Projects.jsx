import React, { useState, useEffect } from 'react';

const INITIAL_PROJECTS = [
    {
        title: "HotelEco Pro",
        badge: "Production AI",
        time: "Jan 2026 – Present",
        description: "High-performance React 19 SPA integrated with Google Firebase. Employs n8n.io workflows to run EcoBot, an intelligent AI chatbot utilizing LLMs, and schedules automated secure booking updates.",
        tech: ["React 19", "Firebase", "n8n", "LLMs", "Mapbox", "Docker"],
        github: "https://github.com/vimukthi1239/hotelecopro",
        demo: "#"
    },
    {
        title: "ML-Ops Automation Framework",
        badge: "MLOps Framework",
        time: "Jan 2026 – March 2026",
        description: "Automated the end-to-end Machine Learning lifecycle (from raw data preprocessing to evaluation) with GitHub Actions CI/CD. Containerized components using Docker and tracked parameters with MLflow.",
        tech: ["Python", "Docker", "GitHub Actions", "MLflow", "DVC"],
        github: "https://github.com/vimukthi1239/mlops-automation"
    },
    {
        title: "Parking Database Architecture",
        badge: "Database Design",
        time: "Jan 2026 – Feb 2026",
        description: "Designed a complete relational database model script for parking operations. Modeled structural integrity constraints, foreign key relationships, ER patterns, and query performance optimizations.",
        tech: ["MySQL", "ER Modeling", "Relational Design"],
        github: "https://github.com/vimukthi1239/parking-database"
    },
    {
        title: "Hotel Analytics Dashboard",
        badge: "Analytics",
        time: "Aug 2025 – Nov 2025",
        description: "Configured n8n automation scenarios to aggregate and filter occupancy and Average Daily Rate (ADR) stats. Built interactive visualizations to support direct operations and trends analytics.",
        tech: ["n8n", "Data Visualization", "Analytics", "MySQL"],
        github: "https://github.com/vimukthi1239/hotel-analytics"
    },
    {
        title: "Serverless Lambda Backend",
        badge: "Serverless",
        time: "Jan 2025 – Feb 2025",
        description: "Implemented and executed high-availability microservices running on AWS Lambda. Managed HTTP REST requests and database integrations via Lambda Serverless infrastructure.",
        tech: ["AWS Lambda", "Serverless", "Python", "API Gateway"],
        github: "https://github.com/vimukthi1239/aws-serverless-backend"
    }
];

export default function Projects() {
    // Load from LocalStorage or default
    const [projects, setProjects] = useState(() => {
        const saved = localStorage.getItem('portfolio_projects');
        return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
    });

    // Form inputs state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [badge, setBadge] = useState('Production AI');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [techInput, setTechInput] = useState('');
    const [github, setGithub] = useState('');
    const [demo, setDemo] = useState('');

    // Save to LocalStorage
    useEffect(() => {
        localStorage.setItem('portfolio_projects', JSON.stringify(projects));
    }, [projects]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Parse CSV tech input into array
        const tech = techInput
            .split(',')
            .map(item => item.trim())
            .filter(item => item !== '');

        const newProject = {
            title,
            badge,
            time: time || 'Jan 2026',
            description,
            tech,
            github,
            demo: demo || undefined
        };

        setProjects(prev => [newProject, ...prev]);
        closeModal();
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTitle('');
        setBadge('Production AI');
        setTime('');
        setDescription('');
        setTechInput('');
        setGithub('');
        setDemo('');
    };

    const handleDelete = (indexToDelete) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            setProjects(prev => prev.filter((_, idx) => idx !== indexToDelete));
        }
    };

    const handleReset = () => {
        if (window.confirm("Reset all projects to original list? This will remove custom projects.")) {
            setProjects(INITIAL_PROJECTS);
        }
    };

    return (
        <section id="projects" className="projects-section section-padding page-fade-in">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Technical <span class="highlight">Projects</span></h2>
                    <p className="section-subtitle">Automations, architectures, and full-stack solutions</p>
                </div>

                {/* Admin Actions Bar */}
                <div className="admin-actions-bar">
                    <button 
                        className="admin-btn admin-btn-add" 
                        onClick={() => setIsModalOpen(true)}
                    >
                        <i className="fa-solid fa-plus"></i> Add Project
                    </button>
                    <button 
                        className="admin-btn admin-btn-reset" 
                        onClick={handleReset}
                        title="Reset to default items"
                    >
                        <i className="fa-solid fa-arrow-rotate-left"></i> Reset Defaults
                    </button>
                </div>
                
                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <article className="project-card" key={idx} style={{ position: 'relative' }}>
                            {/* Card Admin Controls */}
                            <div className="card-admin-controls">
                                <button 
                                    className="delete-card-btn" 
                                    onClick={() => handleDelete(idx)}
                                    title="Delete Project"
                                    aria-label="Delete project"
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </div>
                            
                            <div className="project-badge">{project.badge}</div>
                            <div className="project-content">
                                <div className="project-time">{project.time}</div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-text">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, tIdx) => (
                                        <span key={tIdx}>{t}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="project-link"
                                    >
                                        <i className="fa-brands fa-github"></i> Source Code
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} className="project-link demo-link">
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Admin Add Project Modal Window */}
            {isModalOpen && (
                <div 
                    className="form-modal-overlay"
                    onClick={(e) => {
                        if (e.target.className === 'form-modal-overlay') closeModal();
                    }}
                >
                    <div className="form-modal-container">
                        <div className="form-modal-header">
                            <h3><i className="fa-solid fa-folder-plus"></i> Add New Project</h3>
                            <button className="form-modal-close" onClick={closeModal}>&times;</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-modal-body">
                                <div className="form-group">
                                    <label htmlFor="modal-title">Project Title *</label>
                                    <input 
                                        type="text" 
                                        id="modal-title" 
                                        placeholder="e.g. HotelEco Pro" 
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required 
                                    />
                                </div>

                                <div className="form-group-row">
                                    <div className="form-group">
                                        <label htmlFor="modal-badge">Category Badge *</label>
                                        <select 
                                            id="modal-badge" 
                                            value={badge}
                                            onChange={(e) => setBadge(e.target.value)}
                                            required
                                        >
                                            <option value="Production AI">Production AI</option>
                                            <option value="MLOps Framework">MLOps Framework</option>
                                            <option value="Database Design">Database Design</option>
                                            <option value="Analytics">Analytics</option>
                                            <option value="Serverless">Serverless</option>
                                            <option value="Full-Stack Dev">Full-Stack Dev</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="modal-time">Project Duration</label>
                                        <input 
                                            type="text" 
                                            id="modal-time" 
                                            placeholder="e.g. Jan 2026 - Present" 
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="modal-desc">Project Description *</label>
                                    <textarea 
                                        id="modal-desc" 
                                        rows="3" 
                                        placeholder="Brief summary of features and implementation details..."
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="modal-tech">Libraries & Languages * (comma-separated)</label>
                                    <input 
                                        type="text" 
                                        id="modal-tech" 
                                        placeholder="e.g. React 19, Firebase, n8n, Docker" 
                                        value={techInput}
                                        onChange={(e) => setTechInput(e.target.value)}
                                        required 
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="modal-github">GitHub Repository Link *</label>
                                    <input 
                                        type="url" 
                                        id="modal-github" 
                                        placeholder="https://github.com/vimukthi1239/..." 
                                        value={github}
                                        onChange={(e) => setGithub(e.target.value)}
                                        required 
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="modal-demo">Demo Video / Live Website Link</label>
                                    <input 
                                        type="text" 
                                        id="modal-demo" 
                                        placeholder="https://my-app.web.app or #" 
                                        value={demo}
                                        onChange={(e) => setDemo(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-modal-footer">
                                <button type="button" className="btn btn-outline" onClick={closeModal}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Add Project</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}

