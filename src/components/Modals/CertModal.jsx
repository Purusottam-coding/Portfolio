import React from 'react';
import { IconDownload } from '../Icons';

export default function CertModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box" style={{ textAlign: 'center', maxWidth: '680px' }}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        
        <div style={{ marginBottom: '14px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)' }}>
            Java Object-Oriented Programming Certificate
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            LinkedIn Learning · August 14, 2025
          </p>
        </div>

        <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', marginBottom: '18px' }}>
          <img 
            src="/JAVA OOP Certificate.png" 
            alt="Java Object-Oriented Programming Certificate" 
            style={{ width: '100%', display: 'block' }} 
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <a
            href="/JAVA OOP Certificate.png"
            download="Purusottam_Barakoti_Java_OOP_Certificate.png"
            className="btn btn-sm btn-primary"
          >
            <IconDownload size={14} />
            <span>Download Image</span>
          </a>
          <button className="btn btn-sm btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
