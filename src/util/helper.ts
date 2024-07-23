import { CartDataType } from "../types"

export const increaseQtyHandler = (cartData: CartDataType[], pId: number) => {
  const increaseProductQty = cartData.map(val => {
    if (val.pId === pId) {   
    return {
      ...val,
      qty: val.qty +1
    }
  } else {
    return val
  }
  })
  return increaseProductQty
}

export const decreaseQtyHandler = (cartData: CartDataType[], pId: number) => {
  const decreaseProductQty = cartData.map(val => {
    if (val.pId === pId) {          
      return {
        ...val,
        qty: val.qty > 1 ? val.qty -1 : val.qty
      }
    }else {
      return val
    }
  })
  return decreaseProductQty
}

export const checkProductIsExist = (cartList: CartDataType[], pId: number) => {
  const isProductExist = cartList.find(val => val.pId === pId)
  return isProductExist !== undefined
}