import React from 'react';

const Home = React.lazy(() => import('./Home/Home'));
const Cart = React.lazy(() => import('./Cart/Cart'));

export {
  Home,
  Cart
}