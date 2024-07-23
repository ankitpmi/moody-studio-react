import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { CartDataType } from "../types"

type State = {
  cartData: CartDataType[] | []
}

type Actions = {
  setCartData: (productId: number) => void
  updateCartData: (products: CartDataType[]) => void
}

export const useCartStore = create<State & Actions>()(
  devtools((set) => ({
    cartData: [],
    setCartData(productId) {
      set((state) => {
        const cartObj: CartDataType = {
          id: generateCartItemId(state.cartData),
          pId: productId,
          qty: 1,
        }
        return {
          ...state,
          cartData: [...state.cartData, cartObj],
        }
      })
    },
    updateCartData:(products) => set(state => ({
      ...state,
      cartData: products
    }))
  }))
)

const generateCartItemId = (cartList: CartDataType[]) => {
  let cId = 1
  if (cartList.length > 0) {
    let revId = cartList[cartList.length - 1].id
    cId = ++revId
    return cId
  } else {
    return cId
  }
}
