import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './EventsCalendar.css';

const EventsCalendar = () => {
  const [activeMonth, setActiveMonth] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

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

  const eventCategories = [
    { id: 'all', label: 'All Events' },
    { id: 'academic', label: 'Academic' },
    { id: 'research', label: 'Research' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'conference', label: 'Conferences' }
  ];

  const events = [
    {
      id: 1,
      title: "Annual Research Symposium",
      date: "2024-04-15",
      time: "09:00 AM - 05:00 PM",
      category: "conference",
      location: "Main Auditorium",
      description: "Join us for our annual research symposium featuring presentations from leading researchers and industry experts.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      registration: "Open",
      capacity: 200,
      registered: 150
    },
    {
      id: 2,
      title: "Machine Learning Workshop",
      date: "2024-04-20",
      time: "10:00 AM - 04:00 PM",
      category: "workshop",
      location: "Computer Lab 3",
      description: "Hands-on workshop on machine learning fundamentals and practical applications using Python.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      registration: "Open",
      capacity: 30,
      registered: 25
    },
    {
      id: 3,
      title: "Quantum Computing Seminar",
      date: "2024-04-25",
      time: "02:00 PM - 04:00 PM",
      category: "academic",
      location: "Seminar Hall",
      description: "Expert-led seminar on the latest developments in quantum computing and its applications.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      registration: "Open",
      capacity: 100,
      registered: 75
    },
    {
      id: 4,
      title: "Research Paper Presentation",
      date: "2024-05-01",
      time: "11:00 AM - 01:00 PM",
      category: "research",
      location: "Conference Room A",
      description: "Presentation of recent research papers by our faculty members and research scholars.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      registration: "Open",
      capacity: 50,
      registered: 30
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getMonthName = (date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const handlePrevMonth = () => {
    setActiveMonth(new Date(activeMonth.getFullYear(), activeMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setActiveMonth(new Date(activeMonth.getFullYear(), activeMonth.getMonth() + 1));
  };

  return (
    <div className="events-calendar-page">
      <section className="events-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Events Calendar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay updated with our upcoming events, workshops, and conferences
        </motion.p>
      </section>

      <div className="events-container">
        <div className="calendar-section">
          <div className="calendar-header">
            <motion.button
              className="calendar-nav-button"
              onClick={handlePrevMonth}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ←
            </motion.button>
            <motion.h2
              key={activeMonth.toString()}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {getMonthName(activeMonth)}
            </motion.h2>
            <motion.button
              className="calendar-nav-button"
              onClick={handleNextMonth}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              →
            </motion.button>
          </div>
          <div className="calendar-grid">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="calendar-day-header">{day}</div>
            ))}
            {/* Calendar days would be generated here */}
          </div>
        </div>

        <div className="events-section">
          <div className="categories-section">
            <div className="categories-container">
              {eventCategories.map((category) => (
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

          <motion.div
            className="events-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredEvents.map((event) => (
              <motion.article
                key={event.id}
                className="event-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedEvent(event)}
              >
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <span className="category-badge">{event.category}</span>
                </div>
                <div className="event-content">
                  <div className="event-date">
                    <i className="far fa-calendar"></i>
                    {formatDate(event.date)}
                  </div>
                  <h2 className="event-title">{event.title}</h2>
                  <div className="event-details">
                    <div className="event-time">
                      <i className="far fa-clock"></i>
                      {event.time}
                    </div>
                    <div className="event-location">
                      <i className="fas fa-map-marker-alt"></i>
                      {event.location}
                    </div>
                  </div>
                  <div className="event-registration">
                    <div className="registration-status">
                      <span className={`status-badge ${event.registration.toLowerCase()}`}>
                        {event.registration}
                      </span>
                      <span className="capacity">
                        {event.registered}/{event.capacity} registered
                      </span>
                    </div>
                    <motion.button
                      className="register-button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Register Now
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      {selectedEvent && (
        <motion.div
          className="event-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            className="event-modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <button className="close-button" onClick={() => setSelectedEvent(null)}>×</button>
            <div className="modal-image">
              <img src={selectedEvent.image} alt={selectedEvent.title} />
            </div>
            <div className="modal-content">
              <h2>{selectedEvent.title}</h2>
              <div className="modal-details">
                <div className="modal-date">
                  <i className="far fa-calendar"></i>
                  {formatDate(selectedEvent.date)}
                </div>
                <div className="modal-time">
                  <i className="far fa-clock"></i>
                  {selectedEvent.time}
                </div>
                <div className="modal-location">
                  <i className="fas fa-map-marker-alt"></i>
                  {selectedEvent.location}
                </div>
              </div>
              <p className="modal-description">{selectedEvent.description}</p>
              <div className="modal-registration">
                <div className="registration-status">
                  <span className={`status-badge ${selectedEvent.registration.toLowerCase()}`}>
                    {selectedEvent.registration}
                  </span>
                  <span className="capacity">
                    {selectedEvent.registered}/{selectedEvent.capacity} registered
                  </span>
                </div>
                <motion.button
                  className="register-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default EventsCalendar; 