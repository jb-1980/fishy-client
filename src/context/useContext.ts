import { useContext } from "react";
import { FishyContext } from "./Context";

export const useFishyData = () => {
  const data = useContext(FishyContext);

  if (data === undefined) {
    throw new Error("useFishyData must be used within a FishyProvider");
  }

  return data;
};
