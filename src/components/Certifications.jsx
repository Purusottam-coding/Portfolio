import React from 'react';

export default function Certifications({ onOpenCertModal }) {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Achievements</span>
          <h2 className="section-title">My <span className="highlight">Certifications</span></h2>
          <p className="section-subtitle">Validated skills and learning paths.</p>
        </div>

        <div className="certs-grid">
          <div className="cert-card">
            <div className="cert-issuer">LinkedIn Learning</div>
            <h3 className="cert-title">Java Object-Oriented Programming</h3>
            <p className="cert-date">Completed: Aug 14, 2025</p>
            <button className="btn btn-sm btn-primary" id="open-cert-btn" onClick={onOpenCertModal}>
              View Certificate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
