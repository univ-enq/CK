import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MediaGallery.css';

const MediaGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  const mediaCategories = [
    { id: 'all', label: 'All Media' },
    { id: 'events', label: 'Events' },
    { id: 'campus', label: 'Campus Life' },
    { id: 'research', label: 'Research' },
    { id: 'achievements', label: 'Achievements' }
  ];

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      category: 'events',
      title: 'Annual Tech Symposium 2024',
      description: 'Highlights from our flagship technology symposium featuring industry leaders and innovators.',
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
      date: '2024-03-15',
      tags: ['Conference', 'Technology', 'Networking']
    },
    {
      id: 2,
      type: 'video',
      category: 'campus',
      title: 'Campus Tour 2024',
      description: 'A virtual tour of our state-of-the-art facilities and learning spaces.',
      url: 'https://www.youtube.com/embed/example1',
      thumbnail: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
      date: '2024-03-10',
      tags: ['Campus', 'Facilities', 'Tour']
    },
    {
      id: 3,
      type: 'image',
      category: 'research',
      title: 'AI Research Lab',
      description: 'Our cutting-edge artificial intelligence research laboratory in action.',
      url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
      date: '2024-03-05',
      tags: ['Research', 'AI', 'Technology']
    },
    {
      id: 4,
      type: 'image',
      category: 'achievements',
      title: 'Student Innovation Awards',
      description: 'Celebrating our students\' groundbreaking innovations and achievements.',
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
      date: '2024-03-01',
      tags: ['Awards', 'Students', 'Innovation']
    },
    {
      id: 5,
      type: 'video',
      category: 'events',
      title: 'Research Paper Presentation',
      description: 'Faculty members presenting their latest research findings.',
      url: 'https://www.youtube.com/embed/example2',
      thumbnail: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
      date: '2024-02-28',
      tags: ['Research', 'Presentation', 'Academic']
    },
    {
      id: 6,
      type: 'image',
      category: 'campus',
      title: 'Student Life',
      description: 'Capturing the vibrant campus life and student activities.',
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
      date: '2024-02-25',
      tags: ['Campus Life', 'Students', 'Activities']
    }
  ];

  const filteredMedia = activeFilter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeFilter);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Simulate loading state
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="media-gallery-page">
      <section className="gallery-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Media Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore our collection of photos and videos showcasing campus life, events, and achievements
        </motion.p>
      </section>

      <div className="gallery-container">
        <div className="categories-section">
          <div className="categories-container">
            {mediaCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`category-button ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="loading-container">
            <motion.div
              className="loading-spinner"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        ) : (
          <motion.div
            className="gallery-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredMedia.map((item) => (
                <motion.article
                  key={item.id}
                  className="gallery-item"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedMedia(item)}
                  layout
                >
                  <div className="media-wrapper">
                    {item.type === 'image' ? (
                      <img src={item.url} alt={item.title} />
                    ) : (
                      <div className="video-thumbnail">
                        <img src={item.thumbnail} alt={item.title} />
                        <div className="play-button">
                          <i className="fas fa-play"></i>
                        </div>
                      </div>
                    )}
                    <div className="media-overlay">
                      <span className="media-type">
                        <i className={`fas fa-${item.type === 'image' ? 'image' : 'video'}`}></i>
                        {item.type}
                      </span>
                      <span className="media-category">{item.category}</span>
                    </div>
                  </div>
                  <div className="media-content">
                    <h3 className="media-title">{item.title}</h3>
                    <p className="media-description">{item.description}</p>
                    <div className="media-meta">
                      <span className="media-date">
                        <i className="far fa-calendar"></i>
                        {formatDate(item.date)}
                      </span>
                      <div className="media-tags">
                        {item.tags.map((tag, index) => (
                          <span key={index} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {selectedMedia && (
        <motion.div
          className="media-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedMedia(null)}
        >
          <motion.div
            className="media-modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <button className="close-button" onClick={() => setSelectedMedia(null)}>×</button>
            <div className="modal-media">
              {selectedMedia.type === 'image' ? (
                <img src={selectedMedia.url} alt={selectedMedia.title} />
              ) : (
                <iframe
                  src={selectedMedia.url}
                  title={selectedMedia.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-meta">
                  <span className="modal-type">
                    <i className={`fas fa-${selectedMedia.type === 'image' ? 'image' : 'video'}`}></i>
                    {selectedMedia.type}
                  </span>
                  <span className="modal-category">{selectedMedia.category}</span>
                  <span className="modal-date">
                    <i className="far fa-calendar"></i>
                    {formatDate(selectedMedia.date)}
                  </span>
                </div>
                <h2>{selectedMedia.title}</h2>
              </div>
              <p className="modal-description">{selectedMedia.description}</p>
              <div className="modal-tags">
                {selectedMedia.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="modal-footer">
                <motion.button
                  className="share-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fas fa-share-alt"></i> Share
                </motion.button>
                <motion.button
                  className="download-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fas fa-download"></i> Download
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default MediaGallery; 