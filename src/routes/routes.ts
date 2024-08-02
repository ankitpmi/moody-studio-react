import { Home, Cart, Login } from "../pages";


export const appRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/login",
    component: Login,
  }
]