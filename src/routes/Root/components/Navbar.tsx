import { NavLink } from "react-router-dom"
import { useFishyData } from "../../../context/useContext"

const stringToUrlSlug = (str: string) => {
  return str.toLowerCase().replace(/ /g, "-")
}

export const Navbar = () => {
  const regions = useFishyData()

  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      {regions.map((region) => (
        <NavLink
          key={region.name}
          to={`/region/${stringToUrlSlug(region.name)}`}
        >
          {region.name}
        </NavLink>
      ))}
    </nav>
  )
}
