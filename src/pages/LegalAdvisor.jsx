import React from 'react';
import './LegalAdvisor.css';
import legalAdvisorImage from '../assets/Legal adv.jpg';

const LegalAdvisor = () => {
  const expertiseAreas = [
    {
      title: "Technology Law",
      description: "Expertise in technology, data protection, media, and telecommunications law.",
      icon: "💻"
    },
    { title: "Media & Telecommunications", description: "Legal counsel for media and telecommunications industries.", icon: "📡" },
    { title: "Data Protection & Privacy", description: "Guidance on data protection regulations and privacy laws.", icon: "🔒" },
    { title: "Legal Blogging & Writing", description: "Experience in legal writing, blogging, and publications.", icon: "✍️" }
  ];

  const qualifications = [
    "Founder & Manager of LL.B Mania (Legal Blog)",
    "Interned with Top Tier Law firms: Nishith Desai Associates, Luthra and Luthra Law Offices, Spice Route Legal, IndusLaw, Lakshmikumaran & Sridharan Attorneys, Ikigai Law, Saikrishna & Associates, Scriboard Advocates, Panda Law",
    "Interned with Policy Firms: The Esya Center & The Koan Advisory",
    "Finalist of the National Essay Writing Competition on Online Gaming (NUJS Kolkata, 2023)",
    "Published with reputed International and National Forums & Leading Dailies (Times of India, MNLU Law Review, Taxmann, HeinOnline, etc.)",
    "Publications in Scopus Indexed Journals and Book Chapters"
  ];

  return (
    <div className="legal-advisor-page">
      <div className="advisor-hero">
        <div className="advisor-hero-content">
          <h1>Legal Advisor</h1>
          <p className="advisor-subtitle">Technology & Data Protection Lawyer</p>
        </div>
      </div>

      <div className="advisor-container">
        <div className="advisor-profile">
          <div className="profile-image-container">
            <img src={legalAdvisorImage} alt="Manvee" className="profile-image" />
          </div>
          <div className="profile-info">
            <h2>Manvee</h2>
            <p className="advisor-title">Upcoming Technology & Data Protection Lawyer</p>
            <p className="advisor-description">
              Manvee is an upcoming Technology & Data Protection Lawyer and the Founder & Manager of LL.B Mania (Legal Blog). Her expertise lies in Technology, Media & Telecommunications law. She has gained valuable experience through internships with renowned top-tier law firms such as Nishith Desai Associates, Luthra and Luthra Law Offices, Spice Route Legal, IndusLaw, Lakshmikumaran & Sridharan Attorneys, Ikigai Law, Saikrishna & Associates, Scriboard Advocates, and Panda Law, as well as policy firms like The Esya Center & The Koan Advisory.
              <br/><br/>
              She was a Finalist of the National Essay Writing Competition on Online Gaming organized by NUJS Kolkata in 2023. Manvee has an extensive publication record with reputed International and National Forums & Leading Dailies, including the Times of India, MNLU Law Review, Taxmann, and HeinOnline. Her work also appears in Scopus Indexed Journals and Book Chapters in leading publications.
              <br/><br/>
              In her free time, you will find her playing Throwball or Volleyball in the playground. She is also a former National Level High Jumper and Long Jumper.
            </p>
          </div>
        </div>

        <div className="expertise-section">
          <h3>Areas of Expertise</h3>
          <div className="expertise-grid">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="expertise-card">
                <span className="expertise-icon">{area.icon}</span>
                <h4>{area.title}</h4>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="qualifications-section">
          <h3>Key Achievements & Publications</h3>
          <ul className="qualifications-list">
            {qualifications.map((qualification, index) => (
              <li key={index}>
                <span className="qualification-icon">✓</span>
                {qualification}
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-section">
          <h3>Contact Information</h3>
          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-icon">📧</span>
              <h4>Email</h4>
              <p>exampleemail@gmail.com</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">🏢</span>
              <h4>Office</h4>
              <p>Legal Department, Main Campus</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">⏰</span>
              <h4>Hours</h4>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalAdvisor; 