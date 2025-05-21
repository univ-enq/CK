import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PressRelease.css';

const PressRelease = () => {
  const [activeYear, setActiveYear] = useState('2024');
  const [selectedRelease, setSelectedRelease] = useState(null);

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

  const years = ['2024', '2023'];

  const pressReleases = [
    {
      id: 1,
      title: "Collective Knowledge Launches New Research Initiative",
      date: "2024-03-15",
      category: "Research",
      summary: "Collective Knowledge announces a groundbreaking research initiative focused on artificial intelligence and sustainable technology solutions.",
      content: "In a significant step towards advancing technological innovation, Collective Knowledge has launched a new research initiative that combines artificial intelligence with sustainable technology solutions. This initiative aims to address critical challenges in environmental sustainability while leveraging cutting-edge AI technologies.\n\nThe program will bring together leading researchers, industry experts, and students to collaborate on projects that have the potential to create meaningful impact in areas such as renewable energy, waste management, and smart city solutions.\n\n'We are excited to embark on this journey that combines academic excellence with practical applications,' said Dr. Sarah Johnson, Director of Research at Collective Knowledge. 'This initiative represents our commitment to fostering innovation that benefits society as a whole.'",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      tags: ["Research", "AI", "Sustainability"]
    }
  ];

  const filteredReleases = pressReleases.filter(release => 
    release.date.startsWith(activeYear)
  );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="press-release-page">
      <section className="press-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Press Releases
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay informed about our latest announcements, achievements, and initiatives
        </motion.p>
      </section>

      <div className="press-container">
        <div className="year-filter">
          {years.map((year) => (
            <motion.button
              key={year}
              className={`year-button ${activeYear === year ? 'active' : ''}`}
              onClick={() => setActiveYear(year)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {year}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="press-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredReleases.map((release) => (
            <motion.article
              key={release.id}
              className="press-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedRelease(release)}
            >
              <div className="press-image">
                <img src={release.image} alt={release.title} />
                <span className="category-badge">{release.category}</span>
              </div>
              <div className="press-content">
                <div className="press-date">
                  <i className="far fa-calendar"></i>
                  {formatDate(release.date)}
                </div>
                <h2 className="press-title">{release.title}</h2>
                <p className="press-summary">{release.summary}</p>
                <div className="press-tags">
                  {release.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
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
      </div>

      {selectedRelease && (
        <motion.div
          className="press-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedRelease(null)}
        >
          <motion.div
            className="press-modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <button className="close-button" onClick={() => setSelectedRelease(null)}></button>
            <div className="modal-image">
              <img src={selectedRelease.image} alt={selectedRelease.title} />
            </div>
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-date">
                  <i className="far fa-calendar"></i>
                  {formatDate(selectedRelease.date)}
                </div>
                <span className="modal-category">{selectedRelease.category}</span>
              </div>
              <h2>{selectedRelease.title}</h2>
              <div className="modal-tags">
                {selectedRelease.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="modal-body">
                {selectedRelease.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
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
                  <i className="fas fa-download"></i> Download PDF
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PressRelease; 