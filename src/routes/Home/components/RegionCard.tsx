import { Link } from "react-router-dom"
import { Region } from "../../../models"

export const RegionCard = ({ region }: { region: Region }) => {
  return (
    <Link className="region-card" to={`/region/${region.slug}`}>
      <h2>{region.name}</h2>
      <h3>Average Calories per Serving:</h3>
      <p>{region.averageCalories.toFixed(1)} cal</p>
      <h3>Average Fat per Serving:</h3>
      <p>{region.averageFat.toFixed(1)} g</p>
    </Link>
  )
}
