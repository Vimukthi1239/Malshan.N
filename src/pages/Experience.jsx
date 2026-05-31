import React from 'react';

export default function Experience() {
    const jobs = [
        {
            date: "May 2025 – May 2026",
            title: "Assistant Treasurer",
            company: "SLTC Media Unit",
            description: "Managed fiscal frameworks for major university events (e.g. Master Designer V2.0, UniTalks), ensuring 100% compliance with university policies. Coordinate budget resources across 6 committees, maintaining quantitative precision in high-pressure environments.",
            tags: ["Financial Management", "Resource Allocation", "Coordination"],
            customBadgeClass: ""
        },
        {
            date: "April 2022 – Sept 2022",
            title: "Bank Teller",
            company: "People’s Bank Sri Lanka",
            description: "Maintained 100% drawer accuracy while serving 60+ clients daily in a high-volume banking environment. Ensured zero compliance errors, translating high-stakes procedural integrity into foundational data handling skills.",
            tags: ["Compliance", "Quantitative Integrity", "Customer Operations"],
            customBadgeClass: "font-secondary"
        }
    ];

    return (
        <section id="experience" class="experience-section section-padding page-fade-in">
            <div class="container">
                <div class="section-header text-center">
                    <h2 class="section-title">Professional <span class="highlight">Experience</span></h2>
                    <p class="section-subtitle">Financial operations and organizational roles</p>
                </div>
                
                <div class="experience-timeline">
                    {jobs.map((job, idx) => (
                        <div class="exp-card" key={idx}>
                            <div className={`exp-badge ${job.customBadgeClass}`}>
                                {job.date}
                            </div>
                            <h3 class="exp-title">{job.title}</h3>
                            <h4 class="exp-company">{job.company}</h4>
                            <p class="exp-description">{job.description}</p>
                            <div class="exp-tags">
                                {job.tags.map((tag, tagIdx) => (
                                    <span class="tag" key={tagIdx}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
