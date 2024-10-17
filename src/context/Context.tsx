import { createContext } from "react"
import { Region } from "../models"
import { useGetFishData } from "../datasource/useGetFishData"

export const FishyContext = createContext<Region[] | undefined>(undefined)

export const FishyProvider = (props: { children: React.ReactNode }) => {
  const response = useGetFishData()

  if (response.isLoading) {
    return <div>Loading...</div>
  }

  if (response.isError) {
    return <div>Error: {response.error.message}</div>
  }

  return (
    <FishyContext.Provider value={response.data}>
      {props.children}
    </FishyContext.Provider>
  )
}
