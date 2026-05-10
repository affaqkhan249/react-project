import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PackageCard from '../components/PackageCard'
import packages from '../data/packages'
import './PackageDetail.css'

function PackageDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Find the package that matches the id from URL
  const pkg = packages.find((p) => p.id === parseInt(id))

  // State for accordion (itinerary open/close)
  const [openDay, setOpenDay] = useState(null)

  // State for weather API data
  const [weather, setWeather] = useState(null)
  const [weatherLoading, setWeatherLoading] = useState(true)
  const [weatherError, setWeatherError] = useState('')

  // Get the API key from .env file
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY

  // useEffect to fetch weather when page loads
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)

    if (pkg) {
      // Get the city name from destination (first part before comma)
      const city = pkg.destination.split(',')[0]
      fetchWeather(city)
    }
  }, [id])

  // Function to call OpenWeatherMap API
  async function fetchWeather(city) {
    setWeatherLoading(true)
    setWeatherError('')

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      const data = await response.json()

      if (data.cod === 200) {
        setWeather(data)
      } else {
        setWeatherError('Weather data not available for this location.')
      }
    } catch (error) {
      setWeatherError('Could not load weather. Check your API key in .env file.')
    }

    setWeatherLoading(false)
  }

  // If package not found
  if (!pkg) {
    return (
      <div className="not-found">
        <h2>Package not found!</h2>
        <button onClick={() => navigate('/tours')}>Go Back to Tours</button>
      </div>
    )
  }

  // Get similar packages (same type, but not the same id)
  const similarPackages = packages
    .filter((p) => p.type === pkg.type && p.id !== pkg.id)
    .slice(0, 3)

  // Toggle accordion item open/close
  function toggleDay(index) {
    if (openDay === index) {
      setOpenDay(null) // close if already open
    } else {
      setOpenDay(index) // open the clicked one
    }
  }

  return (
    <div className="detail-page">

      {/* Cover Photo */}
      <div className="detail-cover">
        <img src={pkg.image} alt={pkg.name} className="cover-image" />
        <div className="cover-overlay">
          <div className="cover-text">
            <p className="cover-type">{pkg.type}</p>
            <h1 className="cover-title">{pkg.name}</h1>
            <p className="cover-destination">📍 {pkg.destination}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="detail-layout">

          {/* LEFT: Main Content */}
          <div className="detail-main">

            {/* Overview */}
            <section className="detail-section">
              <h2>Overview</h2>
              <p className="detail-description">{pkg.description}</p>

              <div className="overview-stats">
                <div className="stat-box">
                  <span className="stat-icon">⏱</span>
                  <span className="stat-label">Duration</span>
                  <span className="stat-value">{pkg.duration}</span>
                </div>
                <div className="stat-box">
                  <span className="stat-icon">⭐</span>
                  <span className="stat-label">Rating</span>
                  <span className="stat-value">{pkg.rating} / 5</span>
                </div>
                <div className="stat-box">
                  <span className="stat-icon">🏷</span>
                  <span className="stat-label">Category</span>
                  <span className="stat-value">{pkg.type}</span>
                </div>
              </div>
            </section>

            {/* Weather at Destination (API) */}
            <section className="detail-section weather-section">
              <h2>Current Weather at Destination</h2>
              {weatherLoading && <p className="weather-loading">Loading weather...</p>}
              {weatherError && <p className="weather-error">{weatherError}</p>}
              {weather && !weatherLoading && (
                <div className="weather-card">
                  <div className="weather-main">
                    <div>
                      <p className="weather-city">{weather.name}</p>
                      <p className="weather-temp">{Math.round(weather.main.temp)}°C</p>
                      <p className="weather-desc">{weather.weather[0].description}</p>
                    </div>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt="weather icon"
                      className="weather-icon"
                    />
                  </div>
                  <div className="weather-details">
                    <span>💧 Humidity: {weather.main.humidity}%</span>
                    <span>🌬 Wind: {weather.wind.speed} m/s</span>
                    <span>🌡 Feels like: {Math.round(weather.main.feels_like)}°C</span>
                  </div>
                </div>
              )}
            </section>

            {/* Itinerary Accordion */}
            <section className="detail-section">
              <h2>Day-by-Day Itinerary</h2>
              <div className="accordion">
                {pkg.itinerary.map((dayText, index) => (
                  <div key={index} className="accordion-item">
                    <button
                      className={`accordion-header ${openDay === index ? 'open' : ''}`}
                      onClick={() => toggleDay(index)}
                    >
                      <span>Day {index + 1}</span>
                      <span>{openDay === index ? '▲' : '▼'}</span>
                    </button>
                    {/* Show content only if this day is open (ternary) */}
                    {openDay === index ? (
                      <div className="accordion-content">
                        <p>{dayText}</p>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="detail-section">
              <h2>What's Included / Excluded</h2>
              <div className="inc-exc-grid">
                <div className="inclusions">
                  <h3>✅ Inclusions</h3>
                  <ul>
                    {pkg.inclusions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="exclusions">
                  <h3>❌ Exclusions</h3>
                  <ul>
                    {pkg.exclusions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT: Booking Sidebar */}
          <div className="detail-sidebar">
            <div className="price-card">
              <p className="sidebar-price-label">Price Per Person</p>
              <p className="sidebar-price">Rs. {pkg.price.toLocaleString()}</p>

              <div className="sidebar-info">
                <p>⏱ {pkg.duration}</p>
                <p>⭐ {pkg.rating} Rating</p>
                <p>📍 {pkg.destination}</p>
              </div>

              {/* Book Now button - disabled if sold out */}
              {pkg.isSoldOut ? (
                <button className="sidebar-btn sold-out-btn" disabled>
                  Sold Out
                </button>
              ) : (
                <button
                  className="sidebar-btn book-btn"
                  onClick={() => navigate('/contact')}
                >
                  Book Now
                </button>
              )}

              <p className="sidebar-note">
                📞 Call us: +92 300 1234567
              </p>
              <p className="sidebar-note">
                💬 WhatsApp us for quick booking
              </p>
            </div>
          </div>

        </div>

        {/* Similar Packages */}
        {similarPackages.length > 0 && (
          <section className="similar-section">
            <h2>Similar Packages You May Like</h2>
            <div className="similar-grid">
              {similarPackages.map((p) => (
                <PackageCard key={p.id} pkg={p} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  )
}

export default PackageDetail
