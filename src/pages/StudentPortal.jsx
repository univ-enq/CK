import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './StudentPortal.css';

const StudentPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

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

  const quickLinks = [
    { title: "Course Registration", icon: "📚", path: "/students/course-registration" },
    { title: "Exam Schedule", icon: "📝", path: "/students/exam-schedule" },
    { title: "Results", icon: "📊", path: "/students/results" },
    { title: "Attendance", icon: "📅", path: "/students/attendance" },
    { title: "Library", icon: "📖", path: "/students/library" },
    { title: "Fee Payment", icon: "💰", path: "/students/fee-payment" }
  ];

  const announcements = [
    {
      title: "Mid-term Examinations Schedule",
      date: "2024-03-15",
      category: "Academic",
      priority: "high"
    },
    {
      title: "Campus Cultural Festival Registration",
      date: "2024-03-20",
      category: "Event",
      priority: "medium"
    },
    {
      title: "Scholarship Application Deadline",
      date: "2024-03-25",
      category: "Important",
      priority: "high"
    }
  ];

  const upcomingEvents = [
    {
      title: "Career Counseling Session",
      date: "March 18, 2024",
      time: "10:00 AM",
      location: "Main Auditorium"
    },
    {
      title: "Research Paper Presentation",
      date: "March 20, 2024",
      time: "2:00 PM",
      location: "Conference Hall"
    },
    {
      title: "Alumni Meet",
      date: "March 22, 2024",
      time: "4:00 PM",
      location: "Student Center"
    }
  ];

  return (
    <div className="student-portal">
      <motion.div 
        className="portal-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Student Portal</h1>
        <p>Welcome to your personalized academic dashboard</p>
      </motion.div>

      <div className="portal-container">
        <motion.div 
          className="portal-sidebar"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="student-profile">
            <motion.div 
              className="profile-image"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/placeholder-avatar.jpg" alt="Student Profile" />
            </motion.div>
            <h3>John Doe</h3>
            <p>Computer Science</p>
            <p>Roll No: CS2024001</p>
          </div>

          <nav className="portal-nav">
            <motion.button
              className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              📊 Dashboard
            </motion.button>
            <motion.button
              className={`nav-item ${activeTab === 'courses' ? 'active' : ''}`}
              onClick={() => setActiveTab('courses')}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              📚 My Courses
            </motion.button>
            <motion.button
              className={`nav-item ${activeTab === 'assignments' ? 'active' : ''}`}
              onClick={() => setActiveTab('assignments')}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              📝 Assignments
            </motion.button>
            <motion.button
              className={`nav-item ${activeTab === 'grades' ? 'active' : ''}`}
              onClick={() => setActiveTab('grades')}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              📈 Grades
            </motion.button>
          </nav>
        </motion.div>

        <motion.div 
          className="portal-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="quick-links" variants={itemVariants}>
            <h2>Quick Links</h2>
            <div className="links-grid">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.path}
                  className="quick-link-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="link-icon">{link.icon}</span>
                  <span className="link-title">{link.title}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="portal-grid">
            <motion.div className="announcements" variants={itemVariants}>
              <h2>Announcements</h2>
              <div className="announcements-list">
                {announcements.map((announcement, index) => (
                  <motion.div
                    key={index}
                    className={`announcement-card ${announcement.priority}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="announcement-header">
                      <h3>{announcement.title}</h3>
                      <span className={`priority-badge ${announcement.priority}`}>
                        {announcement.priority}
                      </span>
                    </div>
                    <div className="announcement-details">
                      <span className="category">{announcement.category}</span>
                      <span className="date">{announcement.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="upcoming-events" variants={itemVariants}>
              <h2>Upcoming Events</h2>
              <div className="events-list">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    className="event-card"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3>{event.title}</h3>
                    <div className="event-details">
                      <p><i className="far fa-calendar"></i> {event.date}</p>
                      <p><i className="far fa-clock"></i> {event.time}</p>
                      <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentPortal; 