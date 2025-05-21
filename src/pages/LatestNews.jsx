import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LatestNews.css';
import rajkumarImage from '../assets/Mr. raj kumar IAS AIR 557.jpg';

const LatestNews = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 992);
      // Auto-collapse on mobile
      if (window.innerWidth <= 992) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleCategories = () => {
    setIsCollapsed(!isCollapsed);
  };

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

  const newsCategories = [
    { id: 'all', label: 'All News', icon: '📰' },
    { id: 'academic', label: 'Academic', icon: '🎓' },
    { id: 'research', label: 'Research', icon: '🔬' },
    { id: 'events', label: 'Events', icon: '📅' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' }
  ];

  const newsItems = [
    {
      id: 1,
      category: 'achievements',
      date: 'April 22, 2025',
      title: 'IAS Success Story: Mr. Raj Kumar Secures AIR 557',
      image: rajkumarImage,
      excerpt: 'We are proud to announce that Mr. Raj Kumar has secured AIR 557 in the UPSC Civil Services Examination. This remarkable achievement showcases exceptional dedication and academic excellence, setting a new benchmark for our students.',
      readTime: '3 min read'
    },
    {
      id: 2,
      category: 'academic',
      date: 'March 10, 2024',
      title: 'Understanding Collective Knowledge: A New Era of Shared Learning',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
      excerpt: 'Collective Knowledge represents the powerful synergy of shared information, insights, and expertise within communities. Through collaboration and open exchange of ideas, we create a knowledge ecosystem that transcends individual understanding, driving innovation and societal progress.',
      readTime: '4 min read',
      author: 'Dr. Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
    }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <div className="latest-news-page">
      <section className="news-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest News & Updates
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay informed about the latest developments, achievements, and events at Collective Knowledge
        </motion.p>
      </section>

      <div className="news-layout">
        <aside className="news-sidebar">
          <div className={`sidebar-section ${isCollapsed ? 'collapsed' : ''}`}>
            <div 
              className="sidebar-title"
              onClick={toggleCategories}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleCategories();
                }
              }}
            >
              News Categories
            </div>
            <div className="categories-list">
              {newsCategories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    if (isMobile) {
                      setIsCollapsed(true);
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="category-icon">{category.icon}</span>
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </aside>

        <main className="news-main-content">
          {filteredNews.length > 0 ? (
            <motion.div
              className="news-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredNews.map((news) => (
                <motion.article
                  key={news.id}
                  className={`news-card ${news.category === 'achievements' ? 'achievement-card' : ''}`}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  {news.category === 'achievements' ? (
                    <div className="achievement-layout">
                      <div className="achievement-image-container">
                        <img src={news.image} alt={news.title} />
                      </div>
                      <div className="achievement-content">
                        <div className="news-meta">
                          <span className="news-date">{news.date}</span>
                          <span className="news-read-time">{news.readTime}</span>
                        </div>
                        <h2 className="news-title">{news.title}</h2>
                        <p className="news-excerpt">{news.excerpt}</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="news-image">
                        <img src={news.image} alt={news.title} />
                        <span className="category-badge">{news.category}</span>
                      </div>
                      <div className="news-content">
                        <div className="news-meta">
                          <span className="news-date">{news.date}</span>
                          <span className="news-read-time">{news.readTime}</span>
                        </div>
                        <h2 className="news-title">{news.title}</h2>
                        <p className="news-excerpt">{news.excerpt}</p>
                        {news.author && (
                          <div className="news-author">
                            <img src={news.authorImage} alt={news.author} className="author-image" />
                            <span className="author-name">{news.author}</span>
                          </div>
                        )}
                        <motion.button
                          className="read-more-button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Read More
                        </motion.button>
                      </div>
                    </>
                  )}
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className="stay-tuned-section">
              <div className="stay-tuned-content">
                <i className="fas fa-newspaper stay-tuned-icon"></i>
                <h2>Stay Tuned for Latest Updates</h2>
                <p>
                  We're currently preparing some exciting news and updates for you. 
                  Our team is working on bringing you the latest developments in:
                </p>
                <ul className="upcoming-topics">
                  <li>Academic Achievements</li>
                  <li>Research Breakthroughs</li>
                  <li>Student Success Stories</li>
                  <li>Institutional Milestones</li>
                  <li>Community Impact</li>
                </ul>
                <p className="subscribe-text">
                  Subscribe to our newsletter to be the first to know about our latest updates!
                </p>
                <motion.button
                  className="subscribe-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe to Newsletter
                </motion.button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default LatestNews; 