import { Suspense } from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import { ErrorBoundary, Layout, ProtectedLayout } from "../components"
import { appRoutes,authRoutes } from "./routes"

export const Main = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<ProtectedLayout  />}>
          <Route path="/" element={<Layout />}>
            {appRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              )
            })}          
          </Route>
          
        </Route>
        {authRoutes.map((authRoute) => {
          return(
            <Route
            key={authRoute.path}
            path={authRoute.path}
            element={<authRoute.component />}
          />
          )
        })}
      </>
    )
  )

  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  )
}
