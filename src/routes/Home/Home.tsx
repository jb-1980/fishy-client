import { useFishyData } from "../../context/useContext"
import { RegionCard } from "./components/RegionCard"
import "./styles.css"

export const Home = () => {
  const regions = useFishyData()

  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        padding: 24,
        justifyContent: "center",
      }}
    >
      {regions.map((region) => (
        <RegionCard key={region.slug} region={region} />
      ))}
    </section>
  )
}
