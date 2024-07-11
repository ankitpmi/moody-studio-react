import { useCallback, useEffect, useState } from "react"
import { API,ProductsRes } from "../../services";
import { FilterMenuData, FilterMenuType } from "../../constants";

const toggleSelection = (data: FilterMenuType[], id: number): FilterMenuType[] => {
  return data.map((item) => {
    if (item.id === id) {
      return { ...item, isSelected: !item.isSelected };
    }
    if (item.items) {
      return { ...item, items: toggleSelection(item.items, id) };
    }
    return item;
  });
};

export const useHome = () => {

  const [productList, setProductList] = useState<[]| ProductsRes[]>([])
  const [filterMenuList, setFilterMenuList] = useState<FilterMenuType[] | []>(FilterMenuData)

  const handleToggle = (id: number) => {
    setFilterMenuList((prevData) => toggleSelection(prevData, id));
  };

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
    productList,
    filterMenuList,
    handleToggle
  }
}