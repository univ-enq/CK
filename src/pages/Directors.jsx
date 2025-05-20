import React from 'react';
import './Directors.css';
import directorImage from '../assets/Director & Founder of CKedu.jpg';
import testimonialImage from '../assets/testimonial-1.jpg';

const Directors = () => {
  const directors = [
    {
      id: 1,
      name: "Dr. Deepak Kumar",
      role: "Founder & Director",
      image: directorImage,
      profile: "/people/dr-deepak-kumar",
      socials: {
        linkedin: "https://linkedin.com/in/dr-deepak-kumar",
        twitter: "https://twitter.com/drdeepakkumar",
        email: "mailto:deepak.kumar@collectiveknowledge.edu",
        scholar: "https://scholar.google.com/citations?user=drdeepakkumar"
      }
    },
    {
      id: 2,
      name: "Dr. Jyoti Diwakar",
      role: "Founder & Joint-Director",
      image: testimonialImage,
      profile: "/people/dr-jyoti-diwakar",
      socials: {
        linkedin: "https://linkedin.com/in/dr-jyoti-diwakar",
        twitter: "https://twitter.com/drjyotidiwakar",
        email: "mailto:jyoti.diwakar@collectiveknowledge.edu",
        scholar: "https://scholar.google.com/citations?user=drjyotidiwakar"
      }
    }
  ];

  return (
    <div className="directors-page">
      <div className="directors-header">
        <h1>Founder & Directors</h1>
        <p className="header-subtitle">Leading Collective Knowledge with Vision and Expertise</p>
      </div>

      <div className="directors-content">
        {directors.map((director) => (
          <div key={director.id} className="director-card">
            <div className="director-main">
              <div className="director-image-wrapper">
                <div className="director-image-container">
                  <img 
                    src={director.image} 
                    alt={director.name}
                    className="director-image"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-profile.jpg';
                    }}
                  />
                </div>
                <div className="director-overlay">
                  <a href={director.profile} className="profile-link">
                    View Full Profile
                    <span className="arrow">→</span>
                  </a>
                </div>
              </div>
              
              <div className="director-info">
                <div className="director-header">
                  <h2>{director.name}</h2>
                  <h3>{director.role}</h3>
                </div>
                <div className="director-socials">
                  <a href={director.socials.linkedin} className="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={director.socials.twitter} className="social-link" target="_blank" rel="noopener noreferrer" title="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={director.socials.email} className="social-link" target="_blank" rel="noopener noreferrer" title="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href={director.socials.scholar} className="social-link" target="_blank" rel="noopener noreferrer" title="Google Scholar">
                    <i className="fas fa-graduation-cap"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directors; 