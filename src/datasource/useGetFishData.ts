import { useQuery } from "@tanstack/react-query"
import { makeRegionsFromSeafoodProfiles, SeafoodProfile } from "./domain"
import { Region } from "../models"

export const useGetFishData = () =>
  useQuery<Region[]>({
    queryKey: ["fish-profiles"],
    queryFn: async () => {
      const response = await fetch(import.meta.env.VITE_FISHY_API, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        throw new Error("Error fetching data")
      }
      const data = (await response.json()) as SeafoodProfile[]
      return makeRegionsFromSeafoodProfiles(data)
    },
  })
