import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  // State to control mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleBookNow() {
    navigate('/contact')
    closeMenu()
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">✈</span>
          <span className="logo-text">PakTours</span>
        </Link>

        {/* Navigation Links - shown on desktop */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/tours" onClick={closeMenu}>Tours</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        {/* Book Now Button */}
        <button className="book-now-btn" onClick={handleBookNow}>
          Book Now
        </button>

        {/* Hamburger icon for mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>
    </nav>
  )
}

export default Navbar
