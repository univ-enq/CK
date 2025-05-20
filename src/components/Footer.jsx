import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const footerLinks = {
    academics: {
      title: "Academics",
      links: [
        { name: "Directors & Founder", path: "/academics/directors-founder" },
        { name: "Co-Directors", path: "/academics/co-directors" },
        { name: "Fellows", path: "/academics/fellows" },
        { name: "Legal Advisor", path: "/legal-advisor" },
        { name: "Technical Advisor", path: "/academics/people/technical-advisor" }
      ]
    },
    research: {
      title: "Research & Publication",
      links: [
        { name: "Research Centers", path: "/research/centers" },
        { name: "Publications", path: "/research/publications" },
        { name: "Research Projects", path: "/research/projects" },
        { name: "Collaborations", path: "/research/collaborations" },
        { name: "Research Grants", path: "/research/grants" }
      ]
    },
    students: {
      title: "For Students",
      links: [
        { name: "Student Portal", path: "/students/portal" },
        { name: "Academic Calendar", path: "/students/calendar" },
        { name: "Student Services", path: "/students/services" },
        { name: "Campus Life", path: "/students/campus-life" },
        { name: "Student Resources", path: "/students/resources" },
        { name: "Student Organizations", path: "/students/organizations" }
      ]
    },
    news: {
      title: "News & Events",
      links: [
        { name: "Latest News", path: "/news/latest" },
        { name: "Events Calendar", path: "/news/events" },
        { name: "Press Releases", path: "/news/press" },
        { name: "Media Gallery", path: "/news/gallery" },
        { name: "Newsletter", path: "/news/newsletter" }
      ]
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-links">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="footer-section">
                <h3>{section.title}</h3>
                <ul>
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/accessibility">Accessibility</Link>
          </div>
          <div className="footer-social">
            <a href="#" className="social-link" title="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-link" title="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-link" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link" title="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Collective Knowledge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 