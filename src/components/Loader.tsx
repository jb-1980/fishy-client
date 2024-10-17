import "./loader.css"
import loaderUrl from "../assets/loader.png"

export const Loader = (props: { size: "lg" | "md" | "sm" }) => (
  <img
    src={loaderUrl}
    alt="Loading..."
    className="loader"
    style={{
      width: props.size === "lg" ? 128 : props.size === "md" ? 64 : 32,
      height: props.size === "lg" ? 128 : props.size === "md" ? 64 : 32,
    }}
  />
)
