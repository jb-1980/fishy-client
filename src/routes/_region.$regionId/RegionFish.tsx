import { Fish } from "../../models"

export const RegionFishCard = (props: { fish: Fish }) => {
  const fish = props.fish

  return (
    <div className="fish-card">
      <img src={fish.imgSrc} alt={fish.name} />
      <h3>{fish.name}</h3>
      <p dangerouslySetInnerHTML={{ __html: fish.description }} />
      <p>
        <span style={{ fontWeight: 600 }}>
          {fish.caloriesPerServing} calories
        </span>{" "}
        per serving
      </p>
      <p>
        <span style={{ fontWeight: 600 }}>{fish.fatPerServing} grams</span> of
        fat per serving
      </p>
    </div>
  )
}
