import React from 'react';
import { IconGithub, IconLinkedin, IconMail } from './Icons';

export default function FindMeOn() {
  return (
    <section className="find-me-section">
      <div className="container">
        <h2 className="find-me-title">FIND ME ON</h2>
        <p className="find-me-subtitle">
          Feel free to <span className="highlight">connect</span> with me
        </p>

        <ul className="find-me-social-links">
          <li>
            <a
              href="https://github.com/Purusottam-coding"
              target="_blank"
              rel="noopener noreferrer"
              className="find-me-icon"
              aria-label="GitHub"
              title="GitHub"
            >
              <IconGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/purusottam-barakoti-a44633352/"
              target="_blank"
              rel="noopener noreferrer"
              className="find-me-icon"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <IconLinkedin size={20} />
            </a>
          </li>
          <li>
            <a
              href="mailto:purusottamjalthal.badabari@gmail.com"
              className="find-me-icon"
              aria-label="Email"
              title="Email"
            >
              <IconMail size={20} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
