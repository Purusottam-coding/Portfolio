import React from 'react';

export default function CertModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box" style={{ textAlign: 'center' }}>
        <button className="modal-close" onClick={onClose} aria-label="Close certificate lightbox">&times;</button>
        <h3 style={{ marginBottom: '16px' }}>Java Object-Oriented Programming Certificate</h3>
        <img 
          src="/JAVA OOP Certificate.png" 
          alt="Java Certificate" 
          style={{ borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '16px', width: '100%' }} 
        />
        <div>
          <a href="/JAVA OOP Certificate.png" download class="btn btn-sm btn-primary">
            Download Certificate
          </a>
        </div>
      </div>
    </div>
  );
}
