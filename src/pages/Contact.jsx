import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email)
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">We'd love to hear from you!</p>

        <div className="contact-content">
          <div className="contact-form">
            <form action="https://getform.io/f/bwnwgeqa" method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123 456 7890</p>
            <p>Address: 123 University Ave, City, Country</p>
            {/* Add more contact details or social links */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 