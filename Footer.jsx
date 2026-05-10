import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Column */}
        <div className="footer-column">
          <h3 className="footer-logo">✈ PakTours</h3>
          <p className="footer-tagline">Explore Pakistan. Discover the World.</p>
          <p className="footer-desc">
            Your trusted travel partner for amazing tours across Pakistan and the world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tours">Tours</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Popular Destinations */}
        <div className="footer-column">
          <h4>Popular Destinations</h4>
          <ul className="footer-links">
            <li>Hunza Valley</li>
            <li>Skardu</li>
            <li>Swat Valley</li>
            <li>Lahore</li>
            <li>Gwadar</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>📍 Mall Road, Lahore, Pakistan</p>
          <p>📞 +92 300 1234567</p>
          <p>✉ info@paktours.pk</p>
          <p>💬 WhatsApp: +92 300 1234567</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2024 PakTours. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
