import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './EventsCalendar.css';

const EventsCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setIsSidebarCollapsed(true);
      } else {
        setIsSidebarCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const eventCategories = [
    { id: 'all', label: 'All Events' },
    { id: 'completed', label: 'Completed Events' },
    { id: 'upcoming', label: 'Upcoming Events' }
  ];

  const events = [
    {
      id: 1,
      title: "Ambedkar's Vision: Social Justice and the Quest for Economic Democracy",
      date: "2025-04-14",
      time: "05:00 PM – 06:00 PM (IST)",
      category: "completed",
      speaker: "Mr. Anand Mehra",
      moderator: "Assistant Professor, Eternal University",
      description: "This session promises to offer deep insights into Dr. Ambedkar's thoughts on social justice and economic democracy. Join us for an enlightening discussion on these crucial aspects of our society.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      status: "COMPLETED",
      hasGallery: true,
      hasResources: true
    },
    {
      id: 2,
      title: "Webinar on International Women's Day 2025",
      date: "2025-03-08",
      time: "5:00 PM - 6:00 PM",
      category: "completed",
      speaker: "Dr. Madhu Bala",
      moderator: "Dr. Jyoti Diwakar",
      description: "Unmasking the Gendered Idea of 'Ambition': Women's Dreams and Aspirations in Contemporary Society. A special webinar celebrating International Women's Day.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      status: "COMPLETED",
      hasGallery: true,
      hasResources: true
    },
    {
      id: 3,
      title: "Webinar on Gandhi, Environment, and Sustainability",
      date: "2025-03-23",
      time: "05:00 PM - 06:00 PM (IST)",
      category: "completed",
      speaker: "Dr. Meena Kumari",
      moderator: "Mr. Jitendra K. Paswan",
      description: "On the Occasion of International Day of Forests, join us for a special webinar exploring Gandhi's thoughts on environment and sustainability.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      status: "COMPLETED",
      hasGallery: true,
      hasResources: true
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const formatDate = (dateString) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="events-calendar-page">
      <section className="events-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay updated with our upcoming events, webinars, and conferences
        </motion.p>
      </section>

      <div className="events-container">
        <aside className="events-sidebar">
          <div className={`sidebar-section ${isSidebarCollapsed ? 'collapsed' : ''}`}>
            <div 
              className="sidebar-title"
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsSidebarCollapsed(!isSidebarCollapsed);
                }
              }}
            >
              Event Categories
            </div>
            <div className="categories-list">
              {eventCategories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`category-button ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveFilter(category.id);
                    if (window.innerWidth <= 992) {
                      setIsSidebarCollapsed(true);
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </aside>

        <main className="events-main-content">
          {filteredEvents.length > 0 ? (
            <motion.div
              className="events-grid"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {filteredEvents.map((event) => (
                <motion.article
                  key={event.id}
                  className="event-card"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.5 }
                    }
                  }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <span className="status-badge">{event.status}</span>
                  </div>
                  <div className="event-content">
                    <h2 className="event-title">{event.title}</h2>
                    <div className="event-details">
                      <div className="event-date">
                        <i className="far fa-calendar"></i>
                        {formatDate(event.date)}
                      </div>
                      <div className="event-time">
                        <i className="far fa-clock"></i>
                        {event.time}
                      </div>
                      <div className="event-speaker">
                        <i className="fas fa-user"></i>
                        Speaker: {event.speaker}
                      </div>
                      <div className="event-moderator">
                        <i className="fas fa-user-tie"></i>
                        Moderator: {event.moderator}
                      </div>
                    </div>
                    <p className="event-description">{event.description}</p>
                    <div className="event-actions">
                      {event.hasGallery && (
                        <motion.button
                          className="action-button gallery-button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Event Gallery
                        </motion.button>
                      )}
                      {event.hasResources && (
                        <motion.button
                          className="action-button resources-button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Download Resources
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className="stay-tuned-section">
              <div className="stay-tuned-content">
                <i className="fas fa-calendar-alt stay-tuned-icon"></i>
                <h2>Stay Tuned for Upcoming Events</h2>
                <p>
                  We're currently preparing some exciting events and webinars for you. 
                  Our team is working on bringing together thought leaders, researchers, 
                  and experts to share their insights on various topics including:
                </p>
                <ul className="upcoming-topics">
                  <li>Research Methodology Workshops</li>
                  <li>Academic Writing Seminars</li>
                  <li>Interdisciplinary Research Conferences</li>
                  <li>Student Research Presentations</li>
                  <li>Expert Panel Discussions</li>
                </ul>
                <p className="subscribe-text">
                  Subscribe to our newsletter to be the first to know about our upcoming events!
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

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default EventsCalendar;