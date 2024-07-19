import { useCallback, useEffect, useState } from "react";
import { useCartStore, useProductsStore } from "../../store"
import { CartProductTypr } from "../../types";


export const useCart = () => {
  const {cartData} = useCartStore()
  const {productData} = useProductsStore()
  const [cartList, setCartList] = useState<CartProductTypr[] | []>([])

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
  

  useEffect(() => {
    filterCardData()    
  }, [filterCardData])
  

  return{
    cartList
  }
}