import React from "react";
import { Home, Cart } from "../pages";


export const appRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  }
]