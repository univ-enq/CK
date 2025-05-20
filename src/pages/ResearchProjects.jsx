import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ResearchProjects.css';

const categories = [
  { id: 'all', label: 'All Projects', icon: '📚' },
  { id: 'ai', label: 'Artificial Intelligence', icon: '🤖' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'sustainability', label: 'Sustainability', icon: '🌱' },
  { id: 'health', label: 'Health', icon: '🩺' },
];

const projects = [
  {
    id: 1,
    title: 'AI-Powered Adaptive Learning',
    category: 'ai',
    lead: 'Dr. Sarah Johnson',
    year: 2024,
    summary: 'Developing adaptive learning systems using AI to personalize education for every student.',
    description:
      'This project explores the use of machine learning algorithms to create adaptive learning platforms that respond to individual student needs, improving engagement and outcomes.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    tags: ['AI', 'Education', 'Personalization'],
    status: 'Ongoing',
    team: ['Dr. Sarah Johnson', 'Prof. Michael Chen', 'Emily Brown'],
  },
  {
    id: 2,
    title: 'Green Campus Initiative',
    category: 'sustainability',
    lead: 'Prof. David Lee',
    year: 2023,
    summary: 'Implementing sustainable practices and technologies to reduce campus carbon footprint.',
    description:
      'The Green Campus Initiative focuses on renewable energy, waste reduction, and sustainable transportation to create an eco-friendly academic environment.',
    image:
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    tags: ['Sustainability', 'Environment', 'Renewable Energy'],
    status: 'Completed',
    team: ['Prof. David Lee', 'Maria Garcia', 'James Wilson'],
  },
  {
    id: 3,
    title: 'Remote Health Monitoring',
    category: 'health',
    lead: 'Dr. Maria Garcia',
    year: 2024,
    summary: 'Using IoT and AI to monitor patient health remotely and provide real-time feedback.',
    description:
      'This project integrates wearable devices and AI analytics to enable continuous health monitoring, early detection of issues, and personalized care recommendations.',
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    tags: ['Health', 'IoT', 'AI'],
    status: 'Ongoing',
    team: ['Dr. Maria Garcia', 'Robert Taylor', 'Emily Brown'],
  },
  {
    id: 4,
    title: 'Digital Classrooms for Rural Schools',
    category: 'education',
    lead: 'Prof. Michael Chen',
    year: 2023,
    summary: 'Bringing digital learning resources and infrastructure to underserved rural schools.',
    description:
      'The project aims to bridge the digital divide by providing technology, training, and content to rural educators and students, enhancing learning opportunities.',
    image:
      'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
    tags: ['Education', 'Digital', 'Rural'],
    status: 'Completed',
    team: ['Prof. Michael Chen', 'Sarah Johnson', 'James Wilson'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const ResearchProjects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="research-projects-page">
      <section className="projects-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Research Projects</h1>
          <p>Discover our innovative, interdisciplinary research projects driving impact in AI, education, sustainability, and health.</p>
        </motion.div>
        <div className="hero-pattern"></div>
      </section>

      <div className="projects-container">
        <div className="categories-section">
          <div className="categories-container">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                className={`category-button${activeCategory === cat.id ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="category-icon">{cat.icon}</span>
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.length === 0 ? (
              <div className="no-results">
                <p>No projects found in this category.</p>
              </div>
            ) : (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={itemVariants}
                  whileHover={{ y: -6, boxShadow: '0 8px 32px rgba(52,152,219,0.12)' }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="card-image">
                    <img src={project.image} alt={project.title} />
                    <span className="project-category-badge">
                      {categories.find((c) => c.id === project.category)?.icon}
                      {categories.find((c) => c.id === project.category)?.label}
                    </span>
                  </div>
                  <div className="card-content">
                    <h3>{project.title}</h3>
                    <p className="lead">Lead: {project.lead}</p>
                    <p className="year">{project.year}</p>
                    <p className="summary">{project.summary}</p>
                    <div className="tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                    <span className={`status-badge ${project.status.toLowerCase()}`}>{project.status}</span>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={() => setSelectedProject(null)}>
                <i className="fas fa-times"></i>
              </button>
              <div className="modal-header">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className="modal-title-section">
                  <h2>{selectedProject.title}</h2>
                  <p className="lead">Lead: {selectedProject.lead}</p>
                  <p className="year">{selectedProject.year}</p>
                  <span className={`status-badge ${selectedProject.status.toLowerCase()}`}>{selectedProject.status}</span>
                </div>
              </div>
              <div className="modal-details">
                <div className="description-section">
                  <h3>Description</h3>
                  <p>{selectedProject.description}</p>
                </div>
                <div className="tags">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="team-section">
                  <h4>Team Members</h4>
                  <ul>
                    {selectedProject.team.map((member, idx) => (
                      <li key={idx}>{member}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResearchProjects; 