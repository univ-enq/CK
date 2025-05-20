import React, { useState } from 'react';
import './Directors.css';
import directorImage from '../assets/Director & Founder of CKedu.jpg';
import testimonialImage from '../assets/testimonial-1.jpg';
import ProfileModal from '../components/ProfileModal';

const Directors = () => {
  const [selectedDirector, setSelectedDirector] = useState(null);

  const directors = [
    {
      id: 1,
      name: "Dr. Deepak Kumar",
      role: "Founder & Director",
      image: directorImage,
      bio: "Dr. Deepak Kumar is the Founder and Director of Collective Knowledge, a platform dedicated to fostering critical engagement with contemporary social and political issues. He holds a Ph.D. in Political Science from the University of Delhi, specializing in linguicism in higher education and its impact on knowledge production and social structures.\n\nWith extensive academic experience, Dr. Kumar has taught postgraduate and undergraduate students at the University of Delhi, covering subjects such as Indian political thought, governance, public policy, constitutional studies, and social exclusion. His teaching and mentorship have guided students in critically analyzing political and social issues from diverse perspectives.\n\nBeyond teaching, Dr. Kumar has contributed to research projects and policy discussions on language politics, education policy, and democratic governance. He has presented his work at national and international conferences and has published research in edited volumes and academic journals. His scholarship focuses on making education more inclusive and accessible.\n\nThrough Collective Knowledge, Dr. Deepak Kumar aims to create a collaborative intellectual space where scholars, researchers, and policymakers engage in meaningful discussions on politics, education, and governance, fostering informed public discourse and innovative solutions.",
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
      bio: "Dr. Jyoti Diwakar is a distinguished scholar and educator in Political Science, with a Ph.D. from the University of Delhi. Her research focuses on caste, gender, and violence, particularly the intersectionality of Dalit women's experiences in India. Through her academic work and publications, she critically examines power structures and societal dynamics, contributing to global conversations on justice and equality.\n\nShe has presented her research at esteemed international platforms, including the India China Institute, The New School with ten collaborators, New York (USA) and the Center for European and Asian Studies, Paris (France). As an educator, she has taught both postgraduate and undergraduate students at the University of Delhi, covering subjects such as public policy, political theory, nationalism, and international relations. Her extensive teaching experience reflects her dedication to mentoring students and fostering critical thinking.\n\nAs the Director of Collective Knowledge, Dr. Diwakar brings her expertise to foster inclusive dialogue, bridge academic and policy gaps, and lead knowledge-sharing initiatives. Passionate about social transformation, she continues to shape critical discussions on caste, gender, and political structures, making significant contributions to academia and beyond.",
      socials: {
        linkedin: "https://linkedin.com/in/dr-jyoti-diwakar",
        twitter: "https://twitter.com/drjyotidiwakar",
        email: "mailto:jyoti.diwakar@collectiveknowledge.edu",
        scholar: "https://scholar.google.com/citations?user=drjyotidiwakar"
      }
    }
  ];

  const handleProfileClick = (director) => {
    setSelectedDirector(director);
  };

  const handleCloseModal = () => {
    setSelectedDirector(null);
  };

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
                  <button 
                    onClick={() => handleProfileClick(director)}
                    className="profile-link"
                  >
                    Profile
                    <span className="arrow">→</span>
                  </button>
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

      {selectedDirector && (
        <ProfileModal
          director={selectedDirector}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Directors; 