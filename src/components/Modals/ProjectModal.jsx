import React from 'react';
import { IconGithub } from '../Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        
        <div id="project-modal-content">
          <div style={{ marginBottom: '8px' }}>
            <span className="project-category-badge">
              {project.category === 'fullstack' ? 'Full-Stack' : 'Java & Systems'}
            </span>
          </div>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '10px' }}>
            {project.title}
          </h3>

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {project.tags.map((t, idx) => (
              <span className="project-tag" key={idx}>{t}</span>
            ))}
          </div>

          <p style={{ fontSize: '0.92rem', color: 'var(--text)', lineHeight: '1.6', marginBottom: '18px' }}>
            {project.desc}
          </p>

          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-dark)' }}>
            Key Highlights:
          </h4>

          <ul style={{ paddingLeft: '18px', fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
            {project.details.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href={project.github || "https://github.com/Purusottam-coding"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <IconGithub size={15} />
              <span>GitHub</span>
            </a>
            <button className="btn btn-secondary btn-sm" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
