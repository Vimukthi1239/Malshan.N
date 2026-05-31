import React, { useState, useEffect } from 'react';
import { DEFAULT_PROJECTS } from '../data/portfolioData';

export default function Projects() {
    // Merge DEFAULT_PROJECTS (from data store) with user-added projects (from localStorage)
    const [projects, setProjects] = useState(() => {
        const saved = localStorage.getItem('portfolio_projects_custom');
        const custom = saved ? JSON.parse(saved) : [];
        return [...custom, ...DEFAULT_PROJECTS];
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

    // Save only CUSTOM (user-added) projects to localStorage — defaults come from data store
    const [customProjects, setCustomProjects] = useState(() => {
        const saved = localStorage.getItem('portfolio_projects_custom');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('portfolio_projects_custom', JSON.stringify(customProjects));
        // Rebuild merged list whenever custom projects change
        setProjects([...customProjects, ...DEFAULT_PROJECTS]);
    }, [customProjects]);

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

        setCustomProjects(prev => [newProject, ...prev]);
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
        // Only custom (user-added) projects can be deleted
        if (indexToDelete >= customProjects.length) {
            alert("Default projects cannot be deleted. Edit portfolioData.js to remove them.");
            return;
        }
        if (window.confirm("Are you sure you want to delete this project?")) {
            setCustomProjects(prev => prev.filter((_, idx) => idx !== indexToDelete));
        }
    };

    const handleReset = () => {
        if (window.confirm("Remove all custom projects? (Default projects in portfolioData.js will remain)")) {
            setCustomProjects([]);
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
                </div>
                
                {projects.length === 0 ? (
                    <div className="gallery-empty-state">
                        <i className="fa-solid fa-folder-open gallery-empty-icon"></i>
                        <h3>No Projects Yet</h3>
                        <p>Click <strong>Add Project</strong> above to add your first project.</p>
                    </div>
                ) : (
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
                )}
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

