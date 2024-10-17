import type { RouteConfigFunction } from "../types"
import { Region } from "./Region"

export const RegionRoute: RouteConfigFunction = (children) => ({
  path: "/region/:regionId",
  element: <Region />,
  children: [
    {
      path: "*",
      element: <div>404</div>,
    },
    ...(children ?? []),
  ],
})
