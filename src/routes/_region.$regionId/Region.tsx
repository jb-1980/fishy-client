import { useParams } from "react-router-dom"
import { useFishyData } from "../../context/useContext"
import "./styles.css"
import { RegionFishCard } from "./RegionFish"

export const Region = () => {
  const { regionId } = useParams()
  const regions = useFishyData()
  const region = regions.find((region) => region.slug === regionId)!

  return (
    <section className="region-display">
      <h1 id="title">Region: {region.name}</h1>
      <table>
        <thead>
          <tr>
            <th>average calories per serving</th>
            <th>average grams of fat per serving</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{region.averageCalories.toFixed(1)} cal</td>
            <td>{region.averageFat.toFixed(1)} g</td>
          </tr>
        </tbody>
      </table>

      <h2>Fish Available:</h2>
      <section id="fish-list">
        {region.availableFish.map((fish) => (
          <RegionFishCard key={fish.name} fish={fish} />
        ))}
      </section>
    </section>
  )
}
