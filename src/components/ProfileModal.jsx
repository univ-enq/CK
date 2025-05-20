import React, { useEffect } from 'react';
import './ProfileModal.css';

const ProfileModal = ({ director, onClose }) => {
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    // Close modal when pressing Escape key
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="modal-header">
          <div className="modal-image-container">
            <img 
              src={director.image} 
              alt={director.name}
              className="modal-image"
              onError={(e) => {
                e.target.src = '/images/placeholder-profile.jpg';
              }}
            />
          </div>
          <div className="modal-title">
            <h2>{director.name}</h2>
            <h3>{director.role}</h3>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h4>About</h4>
            <p>{director.bio || "No biography available at the moment."}</p>
          </div>

          <div className="modal-section">
            <h4>Contact Information</h4>
            <div className="modal-socials">
              <a href={director.socials.linkedin} className="modal-social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href={director.socials.twitter} className="modal-social-link" target="_blank" rel="noopener noreferrer" title="Twitter">
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
              <a href={director.socials.email} className="modal-social-link" target="_blank" rel="noopener noreferrer" title="Email">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </a>
              <a href={director.socials.scholar} className="modal-social-link" target="_blank" rel="noopener noreferrer" title="Google Scholar">
                <i className="fas fa-graduation-cap"></i>
                <span>Google Scholar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal; 