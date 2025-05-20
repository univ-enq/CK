import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';
import rajkumarImage from '../assets/Mr. raj kumar IAS AIR 557.jpg';

const Achievements = () => {
  const achievements = [
    {
      title: "IAS Success Story",
      description: "Mr. Raj Kumar secured AIR 557 in UPSC Civil Services Examination, showcasing exceptional dedication and academic excellence.",
      image: rajkumarImage,
      year: "2023",
      category: "Civil Services"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="achievements-page">
      <motion.div 
        className="achievements-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Achievement</h1>
        <p>Celebrating Excellence and Success Stories</p>
      </motion.div>

      <div className="achievements-container">
        <motion.div 
          className="featured-achievement"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="featured-content">
            <motion.div 
              className="featured-image-container"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={rajkumarImage} alt="Mr. Raj Kumar IAS" />
              <div className="achievement-badge">Featured Achievement</div>
            </motion.div>
            <div className="featured-details">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                IAS Success Story
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Mr. Raj Kumar secured AIR 557 in UPSC Civil Services Examination, showcasing exceptional dedication and academic excellence. This remarkable achievement stands as a testament to our commitment to nurturing talent and providing quality education.
              </motion.p>
              <motion.div 
                className="achievement-meta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="year">2023</span>
                <span className="category">Civil Services</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements; 