import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';

export default function Projects({ onOpenModal }) {
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { key: 'all', label: 'All' },
    { key: 'fullstack', label: 'Full-Stack' },
    { key: 'javaphp', label: 'Java & PHP' },
    { key: 'web', label: 'Web' },
  ];

  const projectsList = Object.values(projectsData);

  const filteredProjects = projectsList.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I've Built</span>
          <h2 className="section-title">My <span className="highlight">Projects</span></h2>
          <p className="section-subtitle">A selection of projects demonstrating full-stack and backend computing capabilities.</p>
        </div>

        <div className="projects-filter">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              className={`filter-btn ${filter === opt.key ? 'active' : ''}`}
              onClick={() => setFilter(opt.key)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span className="project-tag" key={idx}>{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-footer">
                <button
                  className="btn btn-sm btn-outline open-modal"
                  onClick={() => onOpenModal(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
