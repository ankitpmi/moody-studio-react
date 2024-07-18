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
  const [productListClone, setProductListClone] = useState<[]| ProductsRes[]>([])
  const [filterMenuList, setFilterMenuList] = useState<FilterMenuType[] | []>(FilterMenuData)
  const [isLoading, setIsLoading] = useState(false)

  const handleToggle = (id: number) => {
    setFilterMenuList((prevData) => toggleSelection(prevData, id));
  };

  const getAllProducs = useCallback(
    async() => {
      try {
        setIsLoading(true)
        const productRes = await API.getAllProducts()        
        if (productRes.length > 0) {          
          setProductList(productRes)
          setProductListClone(productRes)
        }
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log('getAllProducs Err :: ', error);        
      }
    },
    [],
  )
  
  useEffect(() => {    

    getAllProducs()    

  }, [getAllProducs])

  const filterProducts = useCallback(() => {
    
    let selectedCategories: string[] = [];
    let selectedColors: string[] = [];

    filterMenuList.forEach((filter) => {
      if (filter.items) {
        filter.items.forEach((item) => {
          if (item.isSelected) {
            if (filter.label === 'Shop By Category') {
              selectedCategories.push(item.label);
            } else if (filter.label === 'Color') {
              selectedColors.push(item.label.toLowerCase()); // Ensure case consistency
            }
          }
        });
      }
    });

    let filtered = productListClone;
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }

    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => product.color.some(color => selectedColors.includes(color.toLowerCase())));
    }

    setProductList(filtered);
       
  },[filterMenuList, productListClone]);

  useEffect(() => {
    
  
    filterProducts();

  }, [filterMenuList, filterProducts])
  
  

  return{
    productList,
    filterMenuList,
    handleToggle,
    isLoading
  }
}