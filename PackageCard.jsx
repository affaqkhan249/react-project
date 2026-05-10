import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PackageCard.css'

// This component receives a single package object as a prop
// It is reused on both Home page and Tours page
function PackageCard({ pkg }) {
  const navigate = useNavigate()

  function handleViewPackage() {
    navigate(`/tours/${pkg.id}`)
  }

  return (
    <div className="package-card">

      {/* Package Image */}
      <div className="card-image-box">
        <img src={pkg.image} alt={pkg.name} className="card-image" />

        {/* Show discount badge only if price is under 30000 */}
        {pkg.price < 30000 && (
          <span className="discount-badge">Best Deal!</span>
        )}

        {/* Show Sold Out ribbon if isSoldOut is true */}
        {pkg.isSoldOut && (
          <span className="sold-out-ribbon">Sold Out</span>
        )}
      </div>

      {/* Card Content */}
      <div className="card-content">
        <p className="card-type">{pkg.type}</p>
        <h3 className="card-title">{pkg.name}</h3>
        <p className="card-destination">📍 {pkg.destination}</p>

        <div className="card-info">
          <span>⏱ {pkg.duration}</span>
          <span>⭐ {pkg.rating}</span>
        </div>

        <div className="card-footer">
          <div className="card-price">
            <span className="price-label">From</span>
            <span className="price-amount">Rs. {pkg.price.toLocaleString()}</span>
          </div>

          {/* Ternary: show different button based on isSoldOut */}
          {pkg.isSoldOut ? (
            <button className="btn-sold-out" disabled>Sold Out</button>
          ) : (
            <button className="btn-view" onClick={handleViewPackage}>View Package</button>
          )}
        </div>
      </div>

    </div>
  )
}

export default PackageCard
