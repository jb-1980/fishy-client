import type { RouteConfigFunction } from "../types"
import { Home } from "./Home"

export const IndexRoute: RouteConfigFunction = (children) => ({
  path: "/",
  element: <Home />,
  children,
})
