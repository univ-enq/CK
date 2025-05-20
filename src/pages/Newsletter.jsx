import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [preferences, setPreferences] = useState({
    news: true,
    events: true,
    research: true,
    achievements: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('subscribe');

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

  const newsletterIssues = [
    {
      id: 1,
      title: 'March 2024 Newsletter',
      date: '2024-03-01',
      description: 'Highlights from our latest research breakthroughs, upcoming events, and student achievements.',
      topics: ['Research', 'Events', 'Achievements'],
      pdfUrl: '#',
      imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80'
    },
    {
      id: 2,
      title: 'February 2024 Newsletter',
      date: '2024-02-01',
      description: 'Updates on our international collaborations, campus developments, and student success stories.',
      topics: ['Collaborations', 'Campus', 'Students'],
      pdfUrl: '#',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80'
    },
    {
      id: 3,
      title: 'January 2024 Newsletter',
      date: '2024-01-01',
      description: 'A look back at our achievements in 2023 and exciting plans for the new year ahead.',
      topics: ['Year in Review', 'Future Plans'],
      pdfUrl: '#',
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setEmail('');
    setName('');
    setPreferences({
      news: true,
      events: true,
      research: true,
      achievements: false
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="newsletter-page">
      <section className="newsletter-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Newsletter
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay updated with our latest news, events, and achievements
        </motion.p>
      </section>

      <div className="newsletter-container">
        <div className="tabs-navigation">
          <motion.button
            className={`tab-button ${activeTab === 'subscribe' ? 'active' : ''}`}
            onClick={() => setActiveTab('subscribe')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Subscribe
          </motion.button>
          <motion.button
            className={`tab-button ${activeTab === 'archives' ? 'active' : ''}`}
            onClick={() => setActiveTab('archives')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Archives
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'subscribe' ? (
            <motion.div
              key="subscribe"
              className="subscribe-section"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="subscribe-content">
                <div className="subscribe-info">
                  <h2>Join Our Newsletter</h2>
                  <p>Subscribe to receive updates about:</p>
                  <ul>
                    <li>Latest news and announcements</li>
                    <li>Upcoming events and workshops</li>
                    <li>Research breakthroughs and publications</li>
                    <li>Student and faculty achievements</li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit} className="subscribe-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="preferences-group">
                    <label>Newsletter Preferences</label>
                    <div className="preferences-options">
                      {Object.entries(preferences).map(([key, value]) => (
                        <label key={key} className="preference-option">
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={(e) => setPreferences(prev => ({
                              ...prev,
                              [key]: e.target.checked
                            }))}
                          />
                          <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="subscribe-button"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="loading-spinner"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      'Subscribe Now'
                    )}
                  </motion.button>

                  {showSuccess && (
                    <motion.div
                      className="success-message"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <i className="fas fa-check-circle"></i>
                      Thank you for subscribing! Please check your email to confirm your subscription.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="archives"
              className="archives-section"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="archives-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {newsletterIssues.map((issue) => (
                  <motion.article
                    key={issue.id}
                    className="newsletter-card"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="card-image">
                      <img src={issue.imageUrl} alt={issue.title} />
                      <div className="card-overlay">
                        <motion.a
                          href={issue.pdfUrl}
                          className="download-button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fas fa-download"></i> Download PDF
                        </motion.a>
                      </div>
                    </div>
                    <div className="card-content">
                      <h3>{issue.title}</h3>
                      <span className="issue-date">
                        <i className="far fa-calendar"></i>
                        {formatDate(issue.date)}
                      </span>
                      <p>{issue.description}</p>
                      <div className="issue-topics">
                        {issue.topics.map((topic, index) => (
                          <span key={index} className="topic-tag">{topic}</span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Newsletter; 