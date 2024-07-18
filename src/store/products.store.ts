import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { ProductsRes } from '../services';


type State = {
  productData: ProductsRes[] | [];
};

type Actions = {  
  setProductData:(products: ProductsRes[]) => void
};

export const useProductsStore = create<State & Actions>()(
  devtools(
    set => ({
      productData: [],
      setProductData(products) {
        set(state => ({
          ...state,
          productData: products
        }))
      },
    })
  )
)