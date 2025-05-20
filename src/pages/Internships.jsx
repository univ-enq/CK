import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Internships.css';

const Internships = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const filters = [
    { id: 'all', label: 'All Opportunities' },
    { id: 'tech', label: 'Technology' },
    { id: 'research', label: 'Research' },
    { id: 'business', label: 'Business' },
    { id: 'government', label: 'Government' }
  ];

  const internships = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "Tech Innovations Ltd",
      location: "Hyderabad, India",
      type: "tech",
      duration: "3 months",
      stipend: "₹25,000/month",
      deadline: "2024-04-15",
      description: "Join our dynamic team to work on cutting-edge web applications using React and Node.js. Gain hands-on experience in full-stack development.",
      requirements: [
        "Strong knowledge of JavaScript/TypeScript",
        "Understanding of React and Node.js",
        "Good problem-solving skills",
        "Currently pursuing B.Tech/M.Tech in Computer Science"
      ]
    },
    {
      id: 2,
      title: "Research Intern - AI/ML",
      company: "AI Research Institute",
      location: "Bangalore, India",
      type: "research",
      duration: "6 months",
      stipend: "₹30,000/month",
      deadline: "2024-04-20",
      description: "Work on exciting AI/ML projects focusing on natural language processing and computer vision. Collaborate with experienced researchers.",
      requirements: [
        "Strong background in Machine Learning",
        "Experience with Python and ML frameworks",
        "Understanding of deep learning concepts",
        "Currently pursuing M.Tech/PhD in AI/ML"
      ]
    },
    {
      id: 3,
      title: "Business Development Intern",
      company: "Global Solutions Inc",
      location: "Mumbai, India",
      type: "business",
      duration: "3 months",
      stipend: "₹20,000/month",
      deadline: "2024-04-10",
      description: "Learn about business development strategies and market analysis. Work closely with the business development team on real projects.",
      requirements: [
        "Strong communication skills",
        "Basic understanding of business concepts",
        "Analytical thinking",
        "Currently pursuing MBA/BBA"
      ]
    },
    {
      id: 4,
      title: "Government Policy Research Intern",
      company: "Policy Research Center",
      location: "New Delhi, India",
      type: "government",
      duration: "4 months",
      stipend: "₹22,000/month",
      deadline: "2024-04-25",
      description: "Contribute to policy research and analysis. Work on important government initiatives and policy development.",
      requirements: [
        "Strong research and analytical skills",
        "Understanding of public policy",
        "Excellent writing abilities",
        "Currently pursuing MA/MPA in Public Policy"
      ]
    }
  ];

  const filteredInternships = activeFilter === 'all' 
    ? internships 
    : internships.filter(internship => internship.type === activeFilter);

  return (
    <div className="internships-page">
      <motion.div 
        className="internships-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Internship Opportunities</h1>
        <p>Launch your career with hands-on experience in leading organizations</p>
      </motion.div>

      <div className="internships-container">
        <motion.div 
          className="filters-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="filters-container">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="internships-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredInternships.map((internship) => (
            <motion.div
              key={internship.id}
              className="internship-card"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}
            >
              <div className="internship-header">
                <h2>{internship.title}</h2>
                <span className={`type-badge ${internship.type}`}>
                  {internship.type.charAt(0).toUpperCase() + internship.type.slice(1)}
                </span>
              </div>
              
              <div className="company-info">
                <h3>{internship.company}</h3>
                <p><i className="fas fa-map-marker-alt"></i> {internship.location}</p>
              </div>

              <div className="internship-details">
                <div className="detail-item">
                  <i className="far fa-clock"></i>
                  <span>Duration: {internship.duration}</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-money-bill-wave"></i>
                  <span>Stipend: {internship.stipend}</span>
                </div>
                <div className="detail-item">
                  <i className="far fa-calendar-alt"></i>
                  <span>Apply by: {internship.deadline}</span>
                </div>
              </div>

              <p className="description">{internship.description}</p>

              <div className="requirements">
                <h4>Requirements:</h4>
                <ul>
                  {internship.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <motion.button
                className="apply-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Internships; 