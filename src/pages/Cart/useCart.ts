import { useCallback, useEffect, useState } from "react";
import { useCartStore, useProductsStore } from "../../store"
import { CartProductTypr } from "../../types";
import { increaseQtyHandler,decreaseQtyHandler } from "../../util";



export const useCart = () => {
  const {cartData,updateCartData} = useCartStore()  
  const {productData} = useProductsStore()
  const [cartList, setCartList] = useState<CartProductTypr[] | []>([])
  const [sumOfAllProducts, setSumOfAllProducts] = useState<number>(0)

  const filterCardData = useCallback(
    () => {
      const cartDataList = cartData.map(cartItem => {
        const product = productData.find(productItem => productItem.id === cartItem.pId);
        return {
            id: cartItem.id,
            pId: product!.id,
            name: product!.name,
            category: product!.category,
            price: product!.price,
            qty: cartItem.qty,
            img: product!.img
        };
    });
    setCartList(cartDataList)
    },
    [cartData, productData],
  )
  

  const sumOfAllProductsHandler = useCallback(
    () => {
      let sumResult  = 0
      cartList.map(item => {
        const amt = item.qty * item.price
        sumResult = sumResult + amt
      })

      setSumOfAllProducts(sumResult)
    },
    [cartList],
  )
  

  useEffect(() => {
    filterCardData()    
  }, [filterCardData])

  useEffect(() => {
    sumOfAllProductsHandler()      
  }, [cartList, sumOfAllProductsHandler])
  
  const removeProductHandler = useCallback(
    (pId: number) => {                  
      setCartList(prevCartList => prevCartList.filter(item => item.pId !== pId))
      const productsList = cartData.filter(item => item.pId !== pId)
      updateCartData(productsList)
    },
    [cartData, updateCartData],
  )

  const increaseQty = useCallback(
    (pId: number) => {
      const increaseProductQty = increaseQtyHandler(cartData, pId)
      updateCartData(increaseProductQty)
    },
    [cartData, updateCartData],
  )
  const decreaseQty = useCallback(
    (pId: number) => {
      const increaseProductQty = decreaseQtyHandler(cartData, pId)
      updateCartData(increaseProductQty)      
    },
    [cartData, updateCartData],
  )
  
  return{
    cartList,
    sumOfAllProducts,
    removeProductHandler,
    increaseQty,
    decreaseQty
  }
}