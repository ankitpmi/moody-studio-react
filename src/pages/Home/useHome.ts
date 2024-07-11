import { useCallback, useEffect, useState } from "react"
import { API,ProductsRes } from "../../services";

export const useHome = () => {

  const [productList, setProductList] = useState<[]| ProductsRes[]>([])

  const getAllProducs = useCallback(
    async() => {
      try {
        const productRes = await API.getAllProducts()        
        if (productRes.length > 0) {          
          setProductList(productRes)
        }
      } catch (error) {
        console.log('getAllProducs Err :: ', error);
        
      }
    },
    [],
  )
  
  useEffect(() => {    
    getAllProducs()    
  }, [getAllProducs])
  

  return{
    productList
  }
}