# PakTours - Travel Agency Website

**"Explore Pakistan. Discover the World."**

A React JS travel agency website built as a student project using Vite, React Router, and CSS.

---

## How to Run the Project

### Step 1: Install Node.js
Download and install Node.js from https://nodejs.org

### Step 2: Open the project folder in VS Code

### Step 3: Install dependencies
Open terminal in VS Code and run:
```
npm install
```

### Step 4: Add your API key
- Open the `.env` file in the root folder
- Go to https://openweathermap.org and create a free account
- Get your free API key from the dashboard
- Replace `your_openweathermap_api_key_here` with your real API key:
```
VITE_WEATHER_API_KEY=abc123yourkeyhere
```

### Step 5: Run the project
```
npm run dev
```

Then open http://localhost:5173 in your browser!

---

## Project Structure

```
travel-agency/
│
├── .env                          ← API key is stored here
├── index.html
├── vite.config.js
├── package.json
│
└── src/
    ├── main.jsx                  ← Entry point
    ├── App.jsx                   ← Routes setup
    ├── index.css                 ← Global styles
    │
    ├── data/
    │   └── packages.js           ← All 12 tour packages dummy data
    │
    ├── components/
    │   ├── Navbar.jsx + .css     ← Top navigation bar
    │   ├── Footer.jsx + .css     ← Bottom footer
    │   └── PackageCard.jsx + .css ← Reusable tour card component
    │
    └── pages/
        ├── Home.jsx + .css       ← Home page with hero, sections
        ├── Tours.jsx + .css      ← All packages with filter tabs
        ├── PackageDetail.jsx + .css ← Single package detail with weather API
        ├── About.jsx + .css      ← About page with team
        └── Contact.jsx + .css    ← Contact page with booking form
```

---

## React Concepts Used

| Concept | Where Used |
|---------|-----------|
| `props` | PackageCard receives `pkg` as a prop |
| `map()` | Rendering package cards, testimonials, guides |
| `useState` | Filter tabs, form inputs, accordion, menu open/close |
| `useEffect` | Fetching weather API when page loads |
| `React Router` | Navigation between pages (`/`, `/tours`, `/about`, `/contact`) |
| `useParams` | Getting package ID from URL in PackageDetail |
| `useNavigate` | Redirecting to other pages programmatically |
| Ternary `? :` | Show "Sold Out" vs "Book Now" button |
| `&&` | Show "Best Deal!" badge only if price < 30,000 |

---

## API Used

**OpenWeatherMap API** (Free)
- Website: https://openweathermap.org
- Used in: Package Detail page
- Purpose: Shows current weather at the tour destination
- The API key is stored in `.env` as `VITE_WEATHER_API_KEY`
- Accessed in code as: `import.meta.env.VITE_WEATHER_API_KEY`

---

## Pages Overview

1. **Home** - Hero with search, popular destinations grid, featured packages, how to book steps, testimonials, travel tips blog
2. **Tours** - All 12 packages with filter tabs (Mountains, Beaches, Cities, International)
3. **Package Detail** - Cover photo, description, weather widget (API), accordion itinerary, inclusions/exclusions, booking sidebar, similar packages
4. **About** - Agency story, stats, guide team, why choose us
5. **Contact** - Booking inquiry form with useState, office info, WhatsApp number

---

## Color Palette

- **Teal** `#0d9488` - Primary color (buttons, accents, borders)
- **Orange** `#f97316` - Secondary color (CTA buttons, highlights)
- **Dark** `#1f2937` - Text and headings
- **Light Gray** `#f9fafb` - Section backgrounds

---

## Dummy Data

Located in `src/data/packages.js`

12 packages total:
- Mountains: Hunza, Swat, Murree, Skardu, Fairy Meadows
- Beaches: Gwadar, Karachi
- Cities: Lahore, Islamabad
- International: Dubai, Istanbul, Malaysia

Each package has: `id, name, destination, duration, price, rating, type, image, isSoldOut, description, itinerary, inclusions, exclusions`
