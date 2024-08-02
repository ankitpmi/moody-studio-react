import React from 'react';

const Home = React.lazy(() => import('./Home/Home'));
const Cart = React.lazy(() => import('./Cart/Cart'));
const Login = React.lazy(() => import('./Login/Login'));

export {
  Home,
  Cart,
  Login
}