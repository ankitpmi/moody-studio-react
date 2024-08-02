import React, { Suspense } from "react"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes, useLocation } from "react-router-dom"

import { appRoutes } from "./routes"
import { ErrorBoundary, Layout } from "../components"

export const Main = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>      
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