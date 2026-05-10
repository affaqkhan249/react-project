import React, { useState } from 'react'
import PackageCard from '../components/PackageCard'
import packages from '../data/packages'
import './Tours.css'

function Tours() {
  // State to track which filter tab is active
  const [activeFilter, setActiveFilter] = useState('All')

  // Filter categories
  const filterTabs = ['All', 'Mountains', 'Beaches', 'Cities', 'International']

  // Filter the packages based on activeFilter
  // If "All" is selected, show all packages. Otherwise filter by type.
  const filteredPackages = activeFilter === 'All'
    ? packages
    : packages.filter((pkg) => pkg.type === activeFilter)

  return (
    <div className="tours-page">

      {/* Page Header */}
      <div className="tours-header">
        <h1>Our Tour Packages</h1>
        <p>Find the perfect trip for you – from mountain adventures to international getaways</p>
      </div>

      <div className="container">

        {/* Filter Tabs - using useState to switch between filters */}
        <div className="filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`filter-btn ${activeFilter === tab ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Show how many results are shown */}
        <p className="results-count">
          Showing {filteredPackages.length} packages
          {activeFilter !== 'All' && ` in "${activeFilter}"`}
        </p>

        {/* Packages Grid - using map() to render each package card */}
        {filteredPackages.length > 0 ? (
          <div className="tours-grid">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <p className="no-results">No packages found for this category.</p>
        )}

      </div>
    </div>
  )
}

export default Tours
