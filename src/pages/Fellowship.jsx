import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Fellowship.css';

const Fellowship = () => {
  const [activeTab, setActiveTab] = useState('overview');

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

  const fellowshipPrograms = [
    {
      title: "Research Fellowship",
      duration: "6 months",
      stipend: "₹25,000/month",
      deadline: "March 15, 2024",
      description: "Join our research fellowship program to work on cutting-edge projects in various domains. Collaborate with experienced researchers and contribute to meaningful discoveries.",
      requirements: [
        "Currently enrolled in a Master's or PhD program",
        "Strong academic background",
        "Research experience preferred",
        "Excellent communication skills"
      ],
      benefits: [
        "Hands-on research experience",
        "Mentorship from industry experts",
        "Publication opportunities",
        "Networking with professionals"
      ]
    },
    {
      title: "Technology Innovation Fellowship",
      duration: "3 months",
      stipend: "₹30,000/month",
      deadline: "April 1, 2024",
      description: "Work on innovative technology projects and develop solutions for real-world challenges. Gain practical experience in software development, AI, and emerging technologies.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Programming experience",
        "Project portfolio",
        "Problem-solving skills"
      ],
      benefits: [
        "Work on real projects",
        "Access to latest technologies",
        "Industry mentorship",
        "Career development support"
      ]
    },
    {
      title: "Social Impact Fellowship",
      duration: "4 months",
      stipend: "₹20,000/month",
      deadline: "March 30, 2024",
      description: "Make a difference in society through our social impact fellowship. Work on projects that address critical social challenges and create positive change in communities.",
      requirements: [
        "Passion for social change",
        "Community engagement experience",
        "Project management skills",
        "Strong interpersonal skills"
      ],
      benefits: [
        "Community impact experience",
        "Leadership development",
        "Networking opportunities",
        "Professional growth"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Research Fellow 2023",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      quote: "The fellowship program provided me with invaluable research experience and mentorship. It was a transformative journey that helped shape my career in academia."
    },
    {
      name: "Michael Chen",
      role: "Tech Innovation Fellow 2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      quote: "Working on cutting-edge technology projects with industry experts was an incredible learning experience. The fellowship opened doors to new opportunities in my career."
    },
    {
      name: "Priya Sharma",
      role: "Social Impact Fellow 2023",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      quote: "The social impact fellowship allowed me to make a real difference in communities while developing my leadership skills. It was a rewarding and enriching experience."
    }
  ];

  return (
    <div className="fellowship-page">
      <section className="fellowship-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fellowship Programs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join our prestigious fellowship programs and embark on a journey of growth, innovation, and impact
        </motion.p>
      </section>

      <div className="fellowship-container">
        <div className="tabs-section">
          <div className="tabs-container">
            <motion.button
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Overview
            </motion.button>
            <motion.button
              className={`tab-button ${activeTab === 'programs' ? 'active' : ''}`}
              onClick={() => setActiveTab('programs')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Programs
            </motion.button>
            <motion.button
              className={`tab-button ${activeTab === 'testimonials' ? 'active' : ''}`}
              onClick={() => setActiveTab('testimonials')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Testimonials
            </motion.button>
          </div>
        </div>

        <div className="content-section">
          {activeTab === 'overview' && (
            <motion.div
              className="overview-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="overview-card" variants={itemVariants}>
                <h3>Why Choose Our Fellowships?</h3>
                <ul>
                  <li>Hands-on experience in your field</li>
                  <li>Expert mentorship and guidance</li>
                  <li>Networking opportunities</li>
                  <li>Professional development</li>
                  <li>Competitive stipend</li>
                </ul>
              </motion.div>

              <motion.div className="overview-card" variants={itemVariants}>
                <h3>Application Process</h3>
                <ol>
                  <li>Submit your application</li>
                  <li>Initial screening</li>
                  <li>Technical assessment</li>
                  <li>Interview round</li>
                  <li>Final selection</li>
                </ol>
              </motion.div>

              <motion.div className="overview-card" variants={itemVariants}>
                <h3>Program Benefits</h3>
                <ul>
                  <li>Industry exposure</li>
                  <li>Research opportunities</li>
                  <li>Publication support</li>
                  <li>Career guidance</li>
                  <li>Certificate of completion</li>
                </ul>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'programs' && (
            <motion.div
              className="programs-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {fellowshipPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  className="program-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="program-header">
                    <h2>{program.title}</h2>
                    <span className="duration-badge">{program.duration}</span>
                  </div>
                  <div className="program-details">
                    <div className="detail-item">
                      <i className="fas fa-money-bill-wave"></i>
                      <span>{program.stipend}</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Deadline: {program.deadline}</span>
                    </div>
                  </div>
                  <p className="description">{program.description}</p>
                  <div className="requirements">
                    <h4>Requirements</h4>
                    <ul>
                      {program.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="benefits">
                    <h4>Benefits</h4>
                    <ul>
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <motion.button
                    className="apply-button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply Now
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'testimonials' && (
            <motion.div
              className="testimonials-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="testimonial-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <blockquote>{testimonial.quote}</blockquote>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fellowship; 