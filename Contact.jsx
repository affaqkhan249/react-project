import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: 1,
    message: '',
  })

  // State for form submission feedback
  const [submitted, setSubmitted] = useState(false)

  // Handle input changes - update the correct field in formData
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault()

    // In a real project, you would send this data to a server
    // For now, we just show a success message
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travelDate: '',
        travelers: 1,
        message: '',
      })
    }, 3000)
  }

  return (
    <div className="contact-page">

      {/* Page Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Fill out the form below and we will get back to you within 24 hours</p>
      </div>

      <div className="container">
        <div className="contact-layout">

          {/* LEFT: Contact Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-intro">
              Ready to plan your dream vacation? Our team is here to help you every step of the way.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Office Address</h4>
                  <p>123 Mall Road, Lahore, Punjab, Pakistan</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>+92 300 1234567</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">💬</div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+92 300 1234567</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">✉</div>
                <div>
                  <h4>Email</h4>
                  <p>info@paktours.pk</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">🕐</div>
                <div>
                  <h4>Office Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Booking Inquiry Form */}
          <div className="contact-form-box">
            <h2>Booking Inquiry</h2>

            {/* Show success message if form is submitted */}
            {submitted ? (
              <div className="success-message">
                <p>✅ Thank you! Your inquiry has been submitted.</p>
                <p>Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form className="inquiry-form" onSubmit={handleSubmit}>

                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+92 300 0000000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Destination</label>
                    <input
                      type="text"
                      name="destination"
                      placeholder="Where do you want to go?"
                      value={formData.destination}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Travel Date</label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Number of Travelers</label>
                    <input
                      type="number"
                      name="travelers"
                      min="1"
                      max="50"
                      value={formData.travelers}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us more about your travel plans, budget, or any special requirements..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Inquiry
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
