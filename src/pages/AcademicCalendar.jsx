import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AcademicCalendar.css';

const AcademicCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const events = {
    "2024": {
      "0": [ // January
        { date: 15, title: "Semester Start", type: "academic" },
        { date: 26, title: "Republic Day", type: "holiday" }
      ],
      "1": [ // February
        { date: 10, title: "Mid-Semester Exams", type: "exam" },
        { date: 20, title: "Research Workshop", type: "event" }
      ],
      "2": [ // March
        { date: 8, title: "International Women's Day", type: "event" },
        { date: 25, title: "Semester Break", type: "holiday" }
      ],
      "3": [ // April
        { date: 1, title: "New Academic Year", type: "academic" },
        { date: 15, title: "Research Symposium", type: "event" }
      ],
      "4": [ // May
        { date: 1, title: "Labor Day", type: "holiday" },
        { date: 20, title: "Final Exams", type: "exam" }
      ],
      "5": [ // June
        { date: 5, title: "World Environment Day", type: "event" },
        { date: 25, title: "Semester End", type: "academic" }
      ]
    }
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
    const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear);
    const days = [];
    const monthEvents = events[selectedYear]?.[selectedMonth] || [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = monthEvents.filter(event => event.date === day);
      const isToday = new Date().getDate() === day && 
                     new Date().getMonth() === selectedMonth && 
                     new Date().getFullYear() === selectedYear;

      days.push(
        <motion.div
          key={day}
          className={`calendar-day ${isToday ? 'today' : ''}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: day * 0.02 }}
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
        >
          <span className="day-number">{day}</span>
          <AnimatePresence>
            {dayEvents.map((event, index) => (
              <motion.div
                key={`${day}-${index}`}
                className={`event-dot ${event.type}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.2 }}
                title={`${event.title} (${event.type})`}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      );
    }

    return days;
  };

  const handleMonthChange = (direction) => {
    setSelectedMonth(prev => {
      let newMonth = prev + direction;
      if (newMonth > 11) {
        setSelectedYear(prev => prev + 1);
        return 0;
      }
      if (newMonth < 0) {
        setSelectedYear(prev => prev - 1);
        return 11;
      }
      return newMonth;
    });
  };

  return (
    <div className="calendar-page">
      <motion.div 
        className="calendar-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Academic Calendar</h1>
        <p>Stay Updated with Important Dates and Events</p>
      </motion.div>

      <div className="calendar-container">
        <motion.div 
          className="calendar-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button 
            className="month-nav"
            onClick={() => handleMonthChange(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            ←
          </button>
          <motion.h2
            key={`${selectedMonth}-${selectedYear}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {months[selectedMonth]} {selectedYear}
          </motion.h2>
          <button 
            className="month-nav"
            onClick={() => handleMonthChange(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            →
          </button>
        </motion.div>

        <div className="calendar-grid">
          <div className="weekday">Sun</div>
          <div className="weekday">Mon</div>
          <div className="weekday">Tue</div>
          <div className="weekday">Wed</div>
          <div className="weekday">Thu</div>
          <div className="weekday">Fri</div>
          <div className="weekday">Sat</div>
          {renderCalendar()}
        </div>

        <motion.div 
          className="calendar-legend"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="legend-item">
            <span className="legend-dot academic"></span>
            <span>Academic</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot exam"></span>
            <span>Exam</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot event"></span>
            <span>Event</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot holiday"></span>
            <span>Holiday</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicCalendar; 