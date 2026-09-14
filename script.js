/* ==========================================================================
   PURUSOTTAM BARAKOTI — PORTFOLIO SCRIPT (CLEAN & MINIMAL)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. NAVBAR & HAMBURGER TOGGLE
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      navLinksContainer.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
      });
    });
  }

  // Active section scroll tracking
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 2. PROJECT CATEGORY FILTER
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 3. PROJECT DETAILS MODAL
  const projectsData = {
    appointmate: {
      title: "AppointMate – Doctor Appointment System",
      tags: ["React", "Node.js", "PostgreSQL", "JWT"],
      desc: "Full-stack healthcare booking platform designed with role-based access for patients, doctors, and admins. Includes JWT authentication, doctor schedule approval workflows, and a 7-table PostgreSQL relational database.",
      details: [
        "Patient appointment booking with real-time doctor availability.",
        "Doctor control dashboard to manage daily appointment slots.",
        "Role-Based Access Control (RBAC) & password encryption."
      ]
    },
    quickwash: {
      title: "QuickWash – Laundry Booking System",
      tags: ["Java JSP", "Servlet", "MySQL", "Tomcat"],
      desc: "Productivity application engineered to manage multi-vendor laundry booking operations with a 7-stage order lifecycle state machine.",
      details: [
        "7-stage order lifecycle (Received → Washing → Drying → Ironing → Delivered).",
        "SHA-256 cryptographic password security.",
        "Data Access Object (DAO) & MVC architecture."
      ]
    },
    govportal: {
      title: "Government Service Portal",
      tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      desc: "Citizen service portal facilitating online application submission, document uploads, QR fee payment verification, and OTP authentication.",
      details: [
        "Citizen document application workspace.",
        "Admin review and approval queue.",
        "OTP verification & QR-based payment verification flow."
      ]
    },
    ecommerce: {
      title: "E-Commerce Web Application",
      tags: ["HTML", "CSS", "JavaScript"],
      desc: "Responsive e-commerce storefront showcasing clean vanilla JavaScript DOM manipulation, reactive shopping cart drawer, and local storage state persistence.",
      details: [
        "Product catalog with dynamic search & category filter.",
        "Interactive shopping cart drawer.",
        "LocalStorage shopping cart persistence."
      ]
    },
    artgallery: {
      title: "Art Gallery Visitor Management System",
      tags: ["Java Swing", "OOP Architecture"],
      desc: "Desktop application built with Java Swing implementing clean Object-Oriented principles, visitor check-in logging, sorting algorithms, and record search.",
      details: [
        "Visitor registration & record logging.",
        "Artwork inventory catalog search.",
        "Clean OOP class structure."
      ]
    }
  };

  const projectModal = document.getElementById('project-modal');
  const projectModalContent = document.getElementById('project-modal-content');
  const closeProjectModal = document.getElementById('close-project-modal');

  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project');
      const data = projectsData[id];
      if (!data) return;

      projectModalContent.innerHTML = `
        <h3 style="font-size:1.3rem; margin-bottom:8px">${data.title}</h3>
        <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px">
          ${data.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <p style="font-size:0.9rem; color:var(--text-main); margin-bottom:16px">${data.desc}</p>
        <h4 style="font-size:0.9rem; margin-bottom:8px">Key Features:</h4>
        <ul style="padding-left:18px; font-size:0.86rem; color:var(--text-muted); margin-bottom:20px">
          ${data.details.map(item => `<li style="margin-bottom:4px">${item}</li>`).join('')}
        </ul>
        <a href="https://github.com/Purusottam-coding" target="_blank" rel="noopener" class="btn btn-sm btn-primary">View on GitHub</a>
      `;

      projectModal.classList.add('active');
    });
  });

  if (closeProjectModal) {
    closeProjectModal.addEventListener('click', () => {
      projectModal.classList.remove('active');
    });
  }

  // 4. CERTIFICATE MODAL
  const certModal = document.getElementById('cert-modal');
  const openCertBtn = document.getElementById('open-cert-btn');
  const closeCertModal = document.getElementById('close-cert-modal');

  if (openCertBtn && certModal) {
    openCertBtn.addEventListener('click', () => {
      certModal.classList.add('active');
    });
  }

  if (closeCertModal && certModal) {
    closeCertModal.addEventListener('click', () => {
      certModal.classList.remove('active');
    });
  }

  // Close modals on background click or Escape key
  [projectModal, certModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal) projectModal.classList.remove('active');
      if (certModal) certModal.classList.remove('active');
    }
  });

  // 5. COPY EMAIL BUTTON & TOAST
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3000);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('purusottamjalthal.badabari@gmail.com').then(() => {
        showToast('Email address copied!');
      });
    });
  }

  // 6. EMAILJS CONTACT FORM SUBMIT
  if (window.emailjs) {
    emailjs.init("AhtwibYCaxvuHay-m");
  }

  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !subject || !message) {
        showToast('Please fill in all fields.');
        return;
      }

      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        time: new Date().toLocaleString(),
        to_email: "purusottamjalthal.badabari@gmail.com"
      };

      emailjs.send('service_cxvkm7e', 'template_xi4i92m', templateParams)
        .then(() => {
          contactForm.reset();
          submitBtn.textContent = 'Send Message';
          submitBtn.disabled = false;
          showToast('✅ Message sent successfully!');
        })
        .catch(err => {
          console.error('EmailJS Error:', err);
          submitBtn.textContent = 'Send Message';
          submitBtn.disabled = false;
          showToast('❌ Failed to send message. Please try again.');
        });
    });
  }

});
