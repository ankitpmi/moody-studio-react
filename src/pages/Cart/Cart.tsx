import React, { useCallback } from 'react'
import { useCart } from './useCart'
import CartItem from './views/CartItem';
import OrderSummary from './views/OrderSummary';

const Cart = () => {
  const { cartList, sumOfAllProducts } = useCart()
  const renderCartList = useCallback(
    () => {
      return cartList.map((cart) => {
        return <CartItem key={cart.id.toString()} productImg={cart.img} productAmt={cart.price} productName={cart.name} productQty={cart.qty} />
      })
    },
    [cartList],
  )


  return (
    <div className='container mx-auto px-6'>
      <section className="bg-white py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {renderCartList()}
              </div>  
            </div>
            <OrderSummary totalAmtOfProducts={sumOfAllProducts} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart