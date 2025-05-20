import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './LatestNews.css';

const LatestNews = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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
    { id: 'all', label: 'All News' },
    { id: 'academic', label: 'Academic' },
    { id: 'research', label: 'Research' },
    { id: 'events', label: 'Events' },
    { id: 'achievements', label: 'Achievements' }
  ];

  const newsItems = [
    {
      id: 1,
      category: 'academic',
      date: 'March 15, 2024',
      title: 'New Academic Programs Announced for Fall 2024',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
      excerpt: 'We are excited to announce the launch of new specialized programs in emerging fields, designed to prepare students for future challenges.',
      readTime: '5 min read',
      author: 'Dr. Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
    },
    {
      id: 2,
      category: 'research',
      date: 'March 12, 2024',
      title: 'Breakthrough in Quantum Computing Research',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
      excerpt: 'Our research team has made significant progress in quantum computing algorithms, opening new possibilities for solving complex problems.',
      readTime: '8 min read',
      author: 'Prof. Michael Chen',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
    },
    {
      id: 3,
      category: 'events',
      date: 'March 10, 2024',
      title: 'Annual Tech Symposium 2024: Registration Open',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
      excerpt: 'Join us for our flagship tech symposium featuring industry leaders, workshops, and networking opportunities. Early bird registration now available.',
      readTime: '4 min read',
      author: 'Priya Sharma',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
    },
    {
      id: 4,
      category: 'achievements',
      date: 'March 8, 2024',
      title: 'Students Win National Innovation Challenge',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
      excerpt: 'Our student team has secured first place in the National Innovation Challenge with their groundbreaking sustainable energy solution.',
      readTime: '6 min read',
      author: 'Dr. James Wilson',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
    },
    {
      id: 5,
      category: 'academic',
      date: 'March 5, 2024',
      title: 'New Partnership with Global Tech Leaders',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
      excerpt: 'We are proud to announce strategic partnerships with leading technology companies to enhance our academic programs and research initiatives.',
      readTime: '5 min read',
      author: 'Dr. Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
    },
    {
      id: 6,
      category: 'research',
      date: 'March 3, 2024',
      title: 'AI Research Center Inauguration',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
      excerpt: 'Our new state-of-the-art AI Research Center is now operational, providing cutting-edge facilities for advanced research in artificial intelligence.',
      readTime: '7 min read',
      author: 'Prof. Michael Chen',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
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

      <div className="news-container">
        <div className="categories-section">
          <div className="categories-container">
            {newsCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          className="news-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredNews.map((news) => (
            <motion.article
              key={news.id}
              className="news-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
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
                <div className="news-author">
                  <img src={news.authorImage} alt={news.author} className="author-image" />
                  <span className="author-name">{news.author}</span>
                </div>
                <motion.button
                  className="read-more-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read More
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="newsletter-section">
          <motion.div
            className="newsletter-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest news and updates</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews; 