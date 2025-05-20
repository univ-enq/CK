import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './EventsCalendar.css';

const EventsCalendar = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'upcoming', 'completed'
  const [searchQuery, setSearchQuery] = useState('');

  const events = [
    {
      id: 1,
      title: "Ambedkar's Vision: Social Justice and the Quest for Economic Democracy",
      status: "COMPLETED",
      date: "Monday, 14th April 2025",
      time: "05:00 PM – 06:00 PM (IST)",
      speaker: "Mr. Anand Mehra",
      speakerTitle: "Assistant Professor, Eternal University",
      moderator: "Dr. Jyoti Diwakar",
      moderatorTitle: "Department Head, Social Sciences",
      description: "This session promises to offer deep insights into Dr. Ambedkar's thoughts on social justice and economic democracy, exploring his vision for a more equitable society.",
      resources: [
        { type: "gallery", label: "View Event Gallery", url: "#" },
        { type: "resources", label: "View Resources", url: "#" }
      ]
    },
    {
      id: 2,
      title: "Webinar on International Women's Day 2025",
      status: "COMPLETED",
      date: "08/03/2025",
      time: "5:00 PM - 6:00 PM",
      speaker: "Dr. Madhu Bala",
      speakerTitle: "Professor, Gender Studies",
      moderator: "Dr. Jyoti Diwakar",
      moderatorTitle: "Department Head, Social Sciences",
      description: "Unmasking the Gendered Idea of 'Ambition': Women's Dreams and Aspirations in Modern India",
      resources: [
        { type: "gallery", label: "View Event Gallery", url: "#" },
        { type: "resources", label: "Download Resources", url: "#" }
      ]
    },
    {
      id: 3,
      title: "Webinar on Gandhi, Environment, and Sustainability",
      status: "COMPLETED",
      date: "Sunday, 23rd March 2025",
      time: "05:00 PM - 06:00 PM (IST)",
      speaker: "Dr. Meena Kumari",
      speakerTitle: "Environmental Science Professor",
      moderator: "Mr. Jitendra K. Paswan",
      moderatorTitle: "Sustainability Expert",
      description: "On the Occasion of International Day of Forests, exploring Gandhi's environmental philosophy and its relevance to modern sustainability challenges.",
      resources: [
        { type: "gallery", label: "View Event Gallery", url: "#" },
        { type: "resources", label: "Download Resources", url: "#" }
      ]
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredEvents = events.filter(event => {
    const matchesFilter = filter === 'all' || 
      (filter === 'upcoming' && event.status === 'UPCOMING') ||
      (filter === 'completed' && event.status === 'COMPLETED');
    
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.speaker.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const eventCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  if (isLoading) {
    return (
      <div className="events-loading">
        <div className="loader"></div>
        <p>Loading events...</p>
      </div>
    );
  }

  return (
    <div className="events-page">
      <motion.div 
        className="events-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Events Calendar</h1>
        <p className="header-subtitle">Stay updated with our latest events and webinars</p>
      </motion.div>

      <div className="events-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="clear-search"
              onClick={() => setSearchQuery('')}
            >
              ×
            </button>
          )}
        </div>

        <div className="filter-buttons">
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All Events
          </button>
          <button
            className={filter === 'upcoming' ? 'active' : ''}
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </button>
          <button
            className={filter === 'completed' ? 'active' : ''}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
      </div>

      <motion.div 
        className="events-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredEvents.length === 0 ? (
          <div className="no-events">
            <p>No events found matching your criteria.</p>
          </div>
        ) : (
          filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              className="event-card"
              variants={eventCardVariants}
              whileHover="hover"
              onClick={() => setActiveEvent(event)}
            >
              <div className="event-header">
                <span className={`event-status ${event.status.toLowerCase()}`}>
                  {event.status}
                </span>
                <h2>{event.title}</h2>
              </div>

              <div className="event-details">
                <div className="event-info">
                  <div className="info-item">
                    <span className="info-label">📅 Date</span>
                    <span className="info-value">{event.date}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">⏰ Time</span>
                    <span className="info-value">{event.time}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">👩‍🏫 Speaker</span>
                    <div className="info-value">
                      <strong>{event.speaker}</strong>
                      <span className="speaker-title">{event.speakerTitle}</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-label">👨‍🏫 Moderator</span>
                    <div className="info-value">
                      <strong>{event.moderator}</strong>
                      <span className="speaker-title">{event.moderatorTitle}</span>
                    </div>
                  </div>
                </div>

                <div className="event-description">
                  <h4>Description</h4>
                  <p>{event.description}</p>
                </div>

                <div className="event-resources">
                  {event.resources.map((resource, index) => (
                    <motion.a
                      key={index}
                      href={resource.url}
                      className={`resource-link ${resource.type}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {resource.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>

      <AnimatePresence>
        {activeEvent && (
          <motion.div
            className="event-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveEvent(null)}
          >
            <motion.div
              className="event-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveEvent(null);
                }}
                aria-label="Close modal"
              >
                ×
              </button>
              <div className="modal-content">
                <h2>{activeEvent.title}</h2>
                <div className="modal-details">
                  <div className="info-item">
                    <span className="info-label">📅 Date</span>
                    <span className="info-value">{activeEvent.date}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">⏰ Time</span>
                    <span className="info-value">{activeEvent.time}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">👩‍🏫 Speaker</span>
                    <div className="info-value">
                      <strong>{activeEvent.speaker}</strong>
                      <span className="speaker-title">{activeEvent.speakerTitle}</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-label">👨‍🏫 Moderator</span>
                    <div className="info-value">
                      <strong>{activeEvent.moderator}</strong>
                      <span className="speaker-title">{activeEvent.moderatorTitle}</span>
                    </div>
                  </div>
                </div>
                <div className="modal-description">
                  <h4>Description</h4>
                  <p>{activeEvent.description}</p>
                </div>
                <div className="modal-resources">
                  {activeEvent.resources.map((resource, index) => (
                    <motion.a
                      key={index}
                      href={resource.url}
                      className={`resource-link ${resource.type}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {resource.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsCalendar; 