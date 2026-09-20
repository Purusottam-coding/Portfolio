import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Purusottam</span><br />Barakoti
          </h1>
          <p className="hero-subtitle">
            Passionate <strong>Student &amp; Aspiring Developer</strong> crafting clean code, solving real problems, and building impactful digital experiences.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary" id="view-projects-btn">
              View Projects
            </a>
            <a href="/Purusottam Barakoti_CV.pdf" download className="btn btn-outline" id="download-cv-hero">
              Download CV
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-box">
              <div className="stat-num">4<span>+</span></div>
              <div className="stat-lbl">Projects</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">1<span>+</span></div>
              <div className="stat-lbl">Certifications</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">3<span>+</span></div>
              <div className="stat-lbl">Tech Stacks</div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="avatar-frame">
            <img src="/purus.jpg" alt="Purusottam Barakoti" className="avatar-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
