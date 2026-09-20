import React from 'react';

export default function About({ showToast }) {
  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText('purusottamjalthal.badabari@gmail.com')
      .then(() => {
        showToast('Email address copied!');
      })
      .catch(() => {
        showToast('Failed to copy email');
      });
  };

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Who I Am</span>
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          <p className="section-subtitle">A background on my journey, studies, and engineering goals.</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Hello! I'm <strong>Purusottam Barakoti</strong>, a motivated student pursuing a <strong>BSc (Hons) in Computing Science</strong>. I have a strong enthusiasm for technology, software development, and modern web application building.
            </p>
            <p>
              I focus on core software engineering principles, clean code, object-oriented programming with Java and Python, and full-stack web applications using React, Node.js, and SQL databases.
            </p>
            <p>
              My goal is to contribute to innovative software projects, grow as a software developer, and solve practical real-world problems.
            </p>
            <div style={{ marginTop: '24px' }}>
              <a href="/Purusottam Barakoti_CV.pdf" download className="btn btn-primary" id="download-cv-about">
                Download CV
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-row">
              <span className="info-lbl">Name</span>
              <span className="info-val">Purusottam Barakoti</span>
            </div>
            <div className="info-row">
              <span className="info-lbl">Role</span>
              <span className="info-val">Student / Aspiring Developer</span>
            </div>
            <div className="info-row">
              <span className="info-lbl">Degree</span>
              <span className="info-val">BSc (Hons) Computing Science</span>
            </div>
            <div className="info-row">
              <span className="info-lbl">Location</span>
              <span className="info-val">Nepal</span>
            </div>
            <div className="info-row">
              <span className="info-lbl">Email</span>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
                <span className="info-val" style={{ fontSize: '0.85rem', wordBreak: 'break-all' }}>
                  purusottamjalthal.badabari@gmail.com
                </span>
                <button
                  className="btn btn-sm btn-outline"
                  id="copy-email-btn"
                  title="Copy email"
                  onClick={handleCopyEmail}
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="info-row">
              <span className="info-lbl">Languages</span>
              <span className="info-val">Nepali, English, Hindi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
