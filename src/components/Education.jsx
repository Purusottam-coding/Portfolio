import React from 'react';

export default function Education() {
  const educationItems = [
    {
      date: "2025 – Present (Ongoing)",
      title: "BSc (Hons) Computing Science",
      institution: "Itahari International College, Morang",
      desc: "Studying Computer Science software development, database systems, networking, cloud computing, and web engineering."
    },
    {
      date: "2020 – 2022",
      title: "+2 (Higher Secondary)",
      institution: "Kanchanjunga Namuna College, Jhapa",
      desc: "Completed higher secondary education with Mathematics, Computer Science, and Economics."
    },
    {
      date: "2020",
      title: "Secondary Education Examination (SEE)",
      institution: "Kanchanjunga English Secondary School, Jhapa",
      desc: "Completed secondary education with distinction across core science and academic subjects."
    }
  ];

  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Background</span>
          <h2 className="section-title">
            My <span className="highlight">Education</span>
          </h2>
          <p className="section-subtitle">Academic milestones shaping my computer science path.</p>
        </div>

        <div className="timeline">
          {educationItems.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-date">{item.date}</span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-org">{item.institution}</p>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
