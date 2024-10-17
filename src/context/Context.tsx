import { createContext } from "react"
import { Region } from "../models"
import { useGetFishData } from "../datasource/useGetFishData"
import { Loader } from "../components/Loader"
import sadFishUrl from "../assets/sad-fish.png"

export const FishyContext = createContext<Region[] | undefined>(undefined)

export const FishyProvider = (props: { children: React.ReactNode }) => {
  const response = useGetFishData()

  if (response.isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Loader size="md" />
        <p>Loading fishies...</p>
      </div>
    )
  }

  if (response.isError) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <img src={sadFishUrl} alt="Sad fish" style={{ width: 200 }} />
        <div>Sorry, we didn't catch anything!</div>
        <div>
          <span style={{ fontWeight: "bold" }}>Error</span>:{" "}
          {response.error.message}
        </div>
      </div>
    )
  }

  return (
    <FishyContext.Provider value={response.data}>
      {props.children}
    </FishyContext.Provider>
  )
}
