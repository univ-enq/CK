import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Collective Knowledge</h3>
            <p>Empowering minds through shared information and collaborative learning.</p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/academics">Academics</a></li>
              <li><a href="/research">Research & Publication</a></li>
              <li><a href="/students">For Students</a></li>
              <li><a href="/news">News & Events</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              {/* Placeholder for social media icons */}
              <a href="#" className="social-icon">Fb</a>
              <a href="#" className="social-icon">Tw</a>
              <a href="#" className="social-icon">In</a>
              <a href="#" className="social-icon">Ln</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Collective Knowledge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 