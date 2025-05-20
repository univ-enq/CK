import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Publications.css';

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('date'); // 'date' or 'citations'

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

  const categories = [
    { id: 'all', label: 'All Publications', icon: '📚' },
    { id: 'research', label: 'Research Papers', icon: '🔬' },
    { id: 'articles', label: 'Articles', icon: '📝' },
    { id: 'books', label: 'Books', icon: '📖' },
    { id: 'conferences', label: 'Conference Proceedings', icon: '🎤' }
  ];

  const publications = [
    {
      id: 1,
      title: 'Machine Learning Applications in Education',
      authors: ['Dr. Sarah Johnson', 'Prof. Michael Chen'],
      category: 'research',
      year: 2024,
      journal: 'Journal of Educational Technology',
      doi: '10.1234/jet.2024.001',
      abstract: 'This paper explores the implementation of machine learning algorithms in educational settings, focusing on personalized learning experiences and student performance prediction. The study presents novel approaches to adaptive learning systems and their impact on student outcomes.',
      keywords: ['Machine Learning', 'Education', 'AI', 'Personalized Learning'],
      pdfUrl: '#',
      citations: 15,
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80'
    },
    {
      id: 2,
      title: 'The Future of Online Learning',
      authors: ['Dr. Emily Brown', 'Dr. James Wilson'],
      category: 'articles',
      year: 2023,
      journal: 'Educational Review',
      doi: '10.1234/er.2023.002',
      abstract: 'An in-depth analysis of emerging trends in online education and their impact on traditional learning models. The article examines the role of technology in shaping the future of education and discusses key challenges and opportunities.',
      keywords: ['Online Learning', 'Education', 'Digital Transformation'],
      pdfUrl: '#',
      citations: 28,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80'
    },
    {
      id: 3,
      title: 'Innovative Teaching Methods',
      authors: ['Prof. David Lee'],
      category: 'books',
      year: 2023,
      publisher: 'Academic Press',
      isbn: '978-1-2345-6789-0',
      abstract: 'A comprehensive guide to modern teaching methodologies and their implementation in various educational contexts. The book provides practical strategies and case studies for educators looking to enhance their teaching practices.',
      keywords: ['Teaching Methods', 'Education', 'Pedagogy'],
      pdfUrl: '#',
      citations: 42,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80'
    },
    {
      id: 4,
      title: 'AI in Higher Education',
      authors: ['Dr. Maria Garcia', 'Prof. Robert Taylor'],
      category: 'conferences',
      year: 2024,
      conference: 'International Conference on Educational Technology',
      location: 'London, UK',
      abstract: 'Presentation on the integration of artificial intelligence in higher education institutions. The paper discusses current implementations, challenges, and future prospects of AI in academic settings.',
      keywords: ['AI', 'Higher Education', 'Technology'],
      pdfUrl: '#',
      citations: 8,
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80'
    }
  ];

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredPublications = publications
    .filter(pub => {
      const matchesFilter = activeFilter === 'all' || pub.category === activeFilter;
      const matchesSearch = searchQuery === '' || 
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
        pub.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return b.year - a.year;
      } else {
        return b.citations - a.citations;
      }
    });

  const formatAuthors = (authors) => {
    return authors.join(', ');
  };

  return (
    <div className="publications-page">
      <section className="publications-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Publications</h1>
          <p>Explore our research papers, articles, and academic publications</p>
        </motion.div>
        <div className="hero-pattern"></div>
      </section>

      <div className="publications-container">
        <div className="search-filter-section">
          <motion.div 
            className="search-box"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="fas fa-search"></i>
          </motion.div>

          <motion.div 
            className="filter-sort-container"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="filter-buttons">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="category-icon">{category.icon}</span>
                  {category.label}
                </motion.button>
              ))}
            </div>
            <div className="sort-options">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="date">Sort by Date</option>
                <option value="citations">Sort by Citations</option>
              </select>
            </div>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              className="loading-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="loading-spinner"></div>
              <p>Loading publications...</p>
            </motion.div>
          ) : (
            <motion.div
              className="publications-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredPublications.map(publication => (
                <motion.article
                  key={publication.id}
                  className="publication-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedPublication(publication)}
                >
                  <div className="card-image">
                    <img src={publication.image} alt={publication.title} />
                    <span className="category-badge">
                      {categories.find(cat => cat.id === publication.category)?.icon}
                      {categories.find(cat => cat.id === publication.category)?.label}
                    </span>
                  </div>
                  <div className="card-content">
                    <h3>{publication.title}</h3>
                    <p className="authors">{formatAuthors(publication.authors)}</p>
                    <p className="year">{publication.year}</p>
                    {publication.journal && (
                      <p className="journal">{publication.journal}</p>
                    )}
                    {publication.publisher && (
                      <p className="publisher">{publication.publisher}</p>
                    )}
                    {publication.conference && (
                      <p className="conference">{publication.conference}</p>
                    )}
                    <p className="abstract">{publication.abstract}</p>
                    <div className="keywords">
                      {publication.keywords.map((keyword, index) => (
                        <span key={index} className="keyword-tag">{keyword}</span>
                      ))}
                    </div>
                    <div className="card-footer">
                      <span className="citations">
                        <i className="fas fa-quote-right"></i> {publication.citations} citations
                      </span>
                      <motion.a
                        href={publication.pdfUrl}
                        className="download-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fas fa-download"></i> Download PDF
                      </motion.a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedPublication && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPublication(null)}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="close-button"
                  onClick={() => setSelectedPublication(null)}
                >
                  <i className="fas fa-times"></i>
                </button>
                <div className="modal-header">
                  <img src={selectedPublication.image} alt={selectedPublication.title} />
                  <div className="modal-title-section">
                    <h2>{selectedPublication.title}</h2>
                    <p className="authors">{formatAuthors(selectedPublication.authors)}</p>
                    <p className="year">{selectedPublication.year}</p>
                  </div>
                </div>
                <div className="modal-details">
                  {selectedPublication.journal && (
                    <p className="journal"><strong>Journal:</strong> {selectedPublication.journal}</p>
                  )}
                  {selectedPublication.publisher && (
                    <p className="publisher"><strong>Publisher:</strong> {selectedPublication.publisher}</p>
                  )}
                  {selectedPublication.conference && (
                    <p className="conference"><strong>Conference:</strong> {selectedPublication.conference}</p>
                  )}
                  {selectedPublication.doi && (
                    <p className="doi"><strong>DOI:</strong> {selectedPublication.doi}</p>
                  )}
                  {selectedPublication.isbn && (
                    <p className="isbn"><strong>ISBN:</strong> {selectedPublication.isbn}</p>
                  )}
                  <div className="abstract-section">
                    <h3>Abstract</h3>
                    <p>{selectedPublication.abstract}</p>
                  </div>
                  <div className="keywords">
                    {selectedPublication.keywords.map((keyword, index) => (
                      <span key={index} className="keyword-tag">{keyword}</span>
                    ))}
                  </div>
                  <div className="modal-actions">
                    <motion.a
                      href={selectedPublication.pdfUrl}
                      className="download-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-download"></i> Download PDF
                    </motion.a>
                    <motion.button
                      className="cite-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-quote-right"></i> Cite
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Publications; 