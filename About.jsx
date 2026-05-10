import React from 'react'
import './About.css'

function About() {
  // Guide team data
  const guides = [
    {
      id: 1,
      name: "Tariq Mehmood",
      role: "Mountain Expert",
      experience: "10 years",
      photo: "T",
    },
    {
      id: 2,
      name: "Sara Baig",
      role: "International Tour Specialist",
      experience: "7 years",
      photo: "S",
    },
    {
      id: 3,
      name: "Imran Hassan",
      role: "Cultural Heritage Guide",
      experience: "12 years",
      photo: "I",
    },
    {
      id: 4,
      name: "Nadia Akhtar",
      role: "Beach & Coastal Guide",
      experience: "5 years",
      photo: "N",
    },
  ]

  return (
    <div className="about-page">

      {/* Page Header */}
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your trusted travel partner since 2015</p>
      </div>

      <div className="container">

        {/* Agency Story */}
        <section className="story-section">
          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600"
              alt="Pakistan Mountains"
            />
          </div>
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              PakTours was founded in 2015 by a group of passionate travelers who wanted to share the
              beauty of Pakistan with the world. We started with just 3 tour packages to northern Pakistan
              and have grown to offer 50+ packages across Pakistan and internationally.
            </p>
            <p>
              Our mission is simple: to make travel easy, affordable, and unforgettable for every Pakistani.
              We believe that every person deserves to experience the stunning mountains of Gilgit-Baltistan,
              the historical cities of Punjab, and the serene beaches of Balochistan.
            </p>
            <p>
              Today, we are proud to be one of the most trusted travel agencies in Pakistan, with thousands
              of happy travelers and a dedicated team of experienced guides.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="stats-section">
          <div className="stat-item">
            <h3>5000+</h3>
            <p>Happy Travelers</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Tour Packages</p>
          </div>
          <div className="stat-item">
            <h3>25+</h3>
            <p>Countries Covered</p>
          </div>
          <div className="stat-item">
            <h3>9+</h3>
            <p>Years of Experience</p>
          </div>
        </section>

        {/* Guide Team */}
        <section className="team-section">
          <h2 className="section-title">Meet Our Expert Guides</h2>
          <p className="section-subtitle">Experienced professionals who make your trip unforgettable</p>

          <div className="team-grid">
            {guides.map((guide) => (
              <div key={guide.id} className="guide-card">
                <div className="guide-avatar">{guide.photo}</div>
                <h3 className="guide-name">{guide.name}</h3>
                <p className="guide-role">{guide.role}</p>
                <p className="guide-exp">⏱ {guide.experience} experience</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-section">
          <h2 className="section-title">Why Choose PakTours?</h2>
          <p className="section-subtitle">We make your travel experience truly special</p>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>Best Prices</h3>
              <p>We offer the most competitive prices in the market without compromising on quality or comfort.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🛡</div>
              <h3>Safe & Secure</h3>
              <p>Your safety is our top priority. All our tours are conducted with experienced and certified guides.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📞</div>
              <h3>24/7 Support</h3>
              <p>Our team is available around the clock to assist you before, during, and after your trip.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🏆</div>
              <h3>Expert Guides</h3>
              <p>All our guides have years of experience and deep local knowledge of every destination.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default About
