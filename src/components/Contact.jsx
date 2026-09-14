import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      showToast('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      time: new Date().toLocaleString(),
      to_email: 'purusottamjalthal.badabari@gmail.com'
    };

    emailjs
      .send(
        'service_cxvkm7e',
        'template_xi4i92m',
        templateParams,
        'AhtwibYCaxvuHay-m'
      )
      .then(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
        showToast('✅ Message sent successfully!');
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setIsSubmitting(false);
        showToast('❌ Failed to send message. Please try again.');
      });
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
          <p className="section-subtitle">Feel free to reach out for opportunities or collaboration.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-tile">
              <div>
                <div className="contact-tile-label">Email</div>
                <div className="contact-tile-val">purusottamjalthal.badabari@gmail.com</div>
              </div>
            </div>
            <div className="contact-tile">
              <div>
                <div className="contact-tile-label">Location</div>
                <div className="contact-tile-val">Nepal</div>
              </div>
            </div>
            <div className="contact-tile">
              <div>
                <div className="contact-tile-label">Open To</div>
                <div className="contact-tile-val">Internships, Freelance, Collaboration</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              <a
                href="https://github.com/Purusottam-coding"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline full-width"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/purusottam-barakoti-a44633352/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline full-width"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Your Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                className="form-control"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="form-control"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary full-width"
              id="contact-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
