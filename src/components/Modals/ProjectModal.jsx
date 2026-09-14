import React from 'react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        <div id="project-modal-content">
          <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{project.title}</h3>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
            {project.tags.map((t, idx) => (
              <span className="project-tag" key={idx}>{t}</span>
            ))}
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '16px' }}>{project.desc}</p>
          <h4 style={{ fontSize: '0.9rem', marginBottom: '8px', color: 'var(--text-dark)' }}>Key Features:</h4>
          <ul style={{ paddingLeft: '18px', fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
            {project.details.map((item, idx) => (
              <li style={{ marginBottom: '4px' }} key={idx}>{item}</li>
            ))}
          </ul>
          <a href={project.github || "https://github.com/Purusottam-coding"} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
