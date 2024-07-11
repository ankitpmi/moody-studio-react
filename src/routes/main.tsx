import React, {Suspense} from 'react'
import {  Route, Routes, useLocation } from "react-router-dom";

import { appRoutes } from "./routes";
import { Layout } from "../components";


export const Main = () => {
  const location = useLocation();
  return (
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
                    // isLoggedIn={isLoggedIn}
                    // setUsername={"harshinventory"}
                    // // username={"harshinventory"}
                    />
                  }
                />
          )
          })}
        </Routes>
      </Suspense>
    </Layout>
  )
}
