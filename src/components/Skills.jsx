import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap"]
    },
    {
      title: "Backend",
      skills: ["Java (OOP)", "Python", "Node.js", "PHP", "REST APIs"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Relational Schema", "SHA-256 Auth"]
    },
    {
      title: "Tools",
      skills: ["GitHub", "VS Code", "Postman", "Linux", "Figma"]
    }
  ];

  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">
            My <span className="highlight">Skills</span>
          </h2>
          <p className="section-subtitle">Languages, frameworks, databases, and developer tools.</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div className="skill-category-card" key={idx}>
              <div className="category-head">{cat.title}</div>
              <div className="skills-pills">
                {cat.skills.map((skill, sIdx) => (
                  <span className="skill-pill" key={sIdx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
