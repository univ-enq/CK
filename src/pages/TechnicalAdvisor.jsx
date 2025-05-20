import React from 'react';
import { motion } from 'framer-motion';
import './TechnicalAdvisor.css';
import technicalAdvisorImage from '../assets/technical adv.jpg';

const TechnicalAdvisor = () => {
  const expertiseAreas = [
    {
      title: "Web Development",
      description: "Expertise in modern web technologies, frameworks, and best practices.",
      icon: "💻"
    },
    { 
      title: "UI/UX Design", 
      description: "Creating intuitive and engaging user interfaces with focus on user experience.", 
      icon: "🎨" 
    },
    { 
      title: "Mobile Development", 
      description: "Building cross-platform mobile applications using Flutter and React Native.", 
      icon: "📱" 
    },
    { 
      title: "Technical Consulting", 
      description: "Providing expert guidance on technology stack and implementation strategies.", 
      icon: "🔧" 
    }
  ];

  const qualifications = [
    "B.Tech in Electronics and Communication Engineering from Delhi Technological University",
    "Full Stack Web Development Certification",
    "UI/UX Design Professional Certification",
    "Mobile App Development with Flutter Certification",
    "Contributor to Open Source Projects",
    "Published Technical Articles and Tutorials"
  ];

  return (
    <div className="technical-advisor-page">
      <motion.div 
        className="advisor-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="advisor-hero-content">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Technical Advisor
          </motion.h1>
          <motion.p 
            className="advisor-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Web Development & UI/UX Specialist
          </motion.p>
        </div>
      </motion.div>

      <div className="advisor-container">
        <motion.div 
          className="advisor-profile"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="profile-image-container">
            <img src={technicalAdvisorImage} alt="Technical Advisor" className="profile-image" />
          </div>
          <div className="profile-info">
            <h2>Sahil Kumar Sakshi</h2>
            <p className="advisor-title">Full Stack Web Developer & UI/UX Designer</p>
            <p className="advisor-description">
              A passionate web developer specializing in creating engaging web pages that prioritize user interface (UI) and user experience (UX). With years of experience in the field, he has successfully completed numerous projects that have left clients satisfied with the results.
              <br/><br/>
              Currently pursuing a B.Tech in Electronics and Communication Engineering at Delhi Technological University, he combines technical expertise with creative problem-solving to deliver exceptional digital solutions. His technical skill set is diverse and robust, encompassing a variety of programming languages and frameworks.
              <br/><br/>
              Beyond web development, he has a solid foundation in Java and Spring Boot for backend development, as well as expertise in MATLAB for technical computing. His skills extend to mobile app development with Flutter, design using Figma, and a strong understanding of embedded systems, computer architecture, and digital signal processing.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="expertise-section"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3>Areas of Expertise</h3>
          <div className="expertise-grid">
            {expertiseAreas.map((area, index) => (
              <motion.div 
                key={index} 
                className="expertise-card"
                whileHover={{ y: -5, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <span className="expertise-icon">{area.icon}</span>
                <h4>{area.title}</h4>
                <p>{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="qualifications-section"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h3>Education & Certifications</h3>
          <ul className="qualifications-list">
            {qualifications.map((qualification, index) => (
              <motion.li 
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              >
                <span className="qualification-icon">✓</span>
                {qualification}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="contact-section"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h3>Contact Information</h3>
          <div className="contact-grid">
            <motion.div 
              className="contact-card"
              whileHover={{ y: -5, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <span className="contact-icon">📧</span>
              <h4>Email</h4>
              <p>sahil.kumar.sakshi@collectiveknowledge.edu</p>
            </motion.div>
            <motion.div 
              className="contact-card"
              whileHover={{ y: -5, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <span className="contact-icon">🏢</span>
              <h4>Office</h4>
              <p>Technical Department, Main Campus</p>
            </motion.div>
            <motion.div 
              className="contact-card"
              whileHover={{ y: -5, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <span className="contact-icon">⏰</span>
              <h4>Hours</h4>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnicalAdvisor; 