import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PackageCard from '../components/PackageCard'
import packages from '../data/packages'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  // State for search form
  const [destination, setDestination] = useState('')
  const [travelDate, setTravelDate] = useState('')
  const [travelers, setTravelers] = useState(1)

  // Handle search button click
  function handleSearch() {
    navigate('/tours')
  }

  // Get only 6 packages to show as featured on home
  const featuredPackages = packages.slice(0, 6)

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Ahmad Raza",
      location: "Lahore",
      review: "The Hunza trip was absolutely amazing! Everything was perfectly organized. Our guide was very helpful and the views were breathtaking. Highly recommended!",
      stars: 5,
    },
    {
      id: 2,
      name: "Fatima Khan",
      location: "Karachi",
      review: "We booked the Dubai package for our honeymoon and it was perfect. The hotel was great, all activities were pre-arranged. PakTours made everything so easy!",
      stars: 5,
    },
    {
      id: 3,
      name: "Usman Ali",
      location: "Islamabad",
      review: "Went to Swat Valley with my family. Kids loved it, accommodation was comfortable, and the price was very reasonable. Will definitely book again!",
      stars: 4,
    },
  ]

  // Travel tips blog data
  const travelTips = [
    {
      id: 1,
      title: "Best Time to Visit Hunza Valley",
      excerpt: "Spring (April-June) and Autumn (September-October) offer the best weather and views in Hunza...",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    },
    {
      id: 2,
      title: "Packing Guide for Mountain Trips",
      excerpt: "What to pack when traveling to northern areas of Pakistan. Essential items for a comfortable trip...",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400",
    },
    {
      id: 3,
      title: "Top 5 Foods to Try in Lahore",
      excerpt: "Lahore is known as the food capital of Pakistan. Here are the must-try dishes for every visitor...",
      image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400",
    },
  ]

  return (
    <div className="home-page">

      {/* ========== HERO SECTION ========== */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Explore Pakistan.</h1>
            <h2 className="hero-subtitle">Discover the World.</h2>
            <p className="hero-desc">
              Your journey of a lifetime starts here. Affordable tours, amazing destinations, unforgettable memories.
            </p>

            {/* Search Bar */}
            <div className="search-bar">
              <div className="search-field">
                <label>Destination</label>
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="search-field">
                <label>Travel Date</label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                />
              </div>
              <div className="search-field">
                <label>Travelers</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                />
              </div>
              <button className="search-btn" onClick={handleSearch}>
                Search Tours
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========== POPULAR DESTINATIONS ========== */}
      <section className="destinations-section">
        <div className="container">
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">Top places our travelers love to visit</p>

          <div className="destinations-grid">
            <div className="dest-card big" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600')" }}>
              <div className="dest-label">Hunza Valley</div>
            </div>
            <div className="dest-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600')" }}>
              <div className="dest-label">Dubai</div>
            </div>
            <div className="dest-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600')" }}>
              <div className="dest-label">Istanbul</div>
            </div>
            <div className="dest-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600')" }}>
              <div className="dest-label">Lahore</div>
            </div>
            <div className="dest-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600')" }}>
              <div className="dest-label">Gwadar</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURED PACKAGES ========== */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Tour Packages</h2>
          <p className="section-subtitle">Hand-picked packages for the best travel experience</p>

          {/* Using map() to show PackageCard for each featured package */}
          <div className="packages-grid">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="view-all-box">
            <button className="view-all-btn" onClick={() => navigate('/tours')}>
              View All Packages
            </button>
          </div>
        </div>
      </section>

      {/* ========== HOW TO BOOK ========== */}
      <section className="how-to-book">
        <div className="container">
          <h2 className="section-title">How to Book</h2>
          <p className="section-subtitle">Book your dream tour in just 4 easy steps</p>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">🔍</div>
              <h3>Choose a Package</h3>
              <p>Browse our wide collection of tour packages and select one that fits your budget and interest.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">📝</div>
              <h3>Fill Inquiry Form</h3>
              <p>Fill out the booking inquiry form with your travel dates, number of travelers, and preferences.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">📞</div>
              <h3>Get Confirmation</h3>
              <p>Our team will contact you within 24 hours to confirm your booking and discuss details.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-icon">✈</div>
              <h3>Enjoy Your Trip!</h3>
              <p>Pack your bags, relax, and let us handle everything. Enjoy your dream vacation!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle">Real reviews from our happy customers</p>

          <div className="testimonials-grid">
            {/* Using map() to show each testimonial */}
            {testimonials.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div className="stars">
                  {/* Show stars using a simple loop */}
                  {'⭐'.repeat(item.stars)}
                </div>
                <p className="review-text">"{item.review}"</p>
                <div className="reviewer-info">
                  <div className="reviewer-avatar">{item.name[0]}</div>
                  <div>
                    <p className="reviewer-name">{item.name}</p>
                    <p className="reviewer-location">📍 {item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TRAVEL TIPS BLOG STRIP ========== */}
      <section className="blog-section">
        <div className="container">
          <h2 className="section-title">Travel Tips & Blog</h2>
          <p className="section-subtitle">Helpful guides for your next adventure</p>

          <div className="blog-grid">
            {travelTips.map((tip) => (
              <div key={tip.id} className="blog-card">
                <img src={tip.image} alt={tip.title} className="blog-image" />
                <div className="blog-content">
                  <h3 className="blog-title">{tip.title}</h3>
                  <p className="blog-excerpt">{tip.excerpt}</p>
                  <button className="read-more-btn">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
