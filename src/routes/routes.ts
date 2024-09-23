import { Home, Cart, Login } from "../pages";


export const appRoutes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
  
]

export const authRoutes = [
  {
    path: "/login",
    component: Login,
  },
]