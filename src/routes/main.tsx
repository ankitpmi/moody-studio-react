import React, { Suspense } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import { appRoutes } from "./routes"
import { ErrorBoundary, Layout } from "../components"

export const Main = () => {
  const location = useLocation()
  return (
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes location={location}>
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
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  )
}
