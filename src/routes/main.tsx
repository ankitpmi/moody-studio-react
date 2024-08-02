import { Suspense } from "react"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import { appRoutes } from "./routes"
import { ErrorBoundary, Layout, ProtectedLayout } from "../components"
import { Login } from "../pages"
import { useUserStore } from "../store"

export const Main = () => {
  const { isLoggedIn } = useUserStore();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route  element={<ProtectedLayout isLoggedIn={isLoggedIn} />}>
          <Route  path="/" element={<Layout />}>
            {appRoutes.map((route) => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <route.component
                      />
                    }
                  />
                )
              })}
          </Route>
        </Route>
          <Route path={'/login'} element={<Login />} />
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

