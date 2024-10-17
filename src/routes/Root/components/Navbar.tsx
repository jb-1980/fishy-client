import { NavLink } from "react-router-dom"
import { useFishyData } from "../../../context/useContext"
import { useState } from "react"

const stringToUrlSlug = (str: string) => {
  return str.toLowerCase().replace(/ /g, "-")
}

export const Navbar = () => {
  const regions = useFishyData()

  const [showRegions, setShowRegions] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-home">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="navbar-regions">
        {regions.map((region) => (
          <div key={region.name}>
            <NavLink
              key={region.name}
              to={`/region/${stringToUrlSlug(region.name)}`}
            >
              {region.name}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="navbar-regions-mobile">
        <button
          className="navbar-regions-mobile-button"
          onClick={() => setShowRegions((show) => !show)}
        >
          Regions
        </button>
        <div
          className="navbar-regions-mobile-content"
          style={{
            display: showRegions ? "block" : "none",
          }}
        >
          {regions.map((region) => (
            <NavLink
              key={region.name}
              to={`/region/${stringToUrlSlug(region.name)}`}
              onClick={() => setShowRegions(false)}
            >
              {region.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
