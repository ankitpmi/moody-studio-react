import { useCallback, useEffect, useRef, useState } from "react"
import { API,ProductsRes } from "../../services";
import { FilterMenuData, FilterMenuType } from "../../constants";
import { useCartStore, useProductsStore } from "../../store";
import { checkProductIsExist,increaseQtyHandler } from "../../util";
import { ActionSheetRef } from "../../components";

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

  const {productData,setProductData} = useProductsStore()
  const {setCartData,cartData,updateCartData} = useCartStore()
  const [productList, setProductList] = useState<[]| ProductsRes[]>([])
  const [filterMenuList, setFilterMenuList] = useState<FilterMenuType[] | []>(FilterMenuData)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedFilterMenu, setSelectedFilterMenu] = useState<FilterMenuType | null>(null)
  const actionSheetRef = useRef<ActionSheetRef>();

  const handleToggle = useCallback((id: number) => {    
    setFilterMenuList((prevData) => toggleSelection(prevData, id));
  },[]);

  const onClickCartBtn = useCallback(
    (productId: number) => {
      const isProductExist = checkProductIsExist(cartData,productId)      
      if (!isProductExist) {        
        setCartData(productId)
      }else {
        const increaseProductQty = increaseQtyHandler(cartData, productId)
        updateCartData(increaseProductQty)
      }
    },
    [cartData, setCartData, updateCartData],
  )
  

  const getAllProducs = useCallback(
    async() => {
      try {
        setIsLoading(true)
        const productRes = await API.getAllProducts()        
        if (productRes.length > 0) {      
          setProductData(productRes)              
        }
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log('getAllProducs Err :: ', error);        
      }
    },
    [setProductData],
  )

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

    let filtered = [...productData];
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }

    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => product.color.some(color => selectedColors.includes(color.toLowerCase())));
    }

    setProductList(filtered);
       
  },[filterMenuList, productData]);

  useEffect(() => {        
    let hasRun = false;        
    if (!hasRun) {      
      filterProducts();
      hasRun = true;      
    }
    
    return () => {
      hasRun = false;
    };
  }, [filterProducts])
  

  useEffect(() => {
    if (productData.length > 0) {      
      setProductList(productData);
    }    
  }, [productData])

  useEffect(() => {    
    getAllProducs()    
  }, [getAllProducs])
  
  const handleActionSheetOpen = () => {
    console.log('111');
    
    actionSheetRef?.current?.open();
  };

  const handleActionSheetClose = () => {
    actionSheetRef?.current?.close();
  };

  const selectFilterMenuHandler = (menu: FilterMenuType) => {
    setSelectedFilterMenu(menu)
  }

  console.log('selectedFilterMenu :::: ', selectedFilterMenu);
  

  return{
    productList,
    filterMenuList,
    handleToggle,
    isLoading,
    onClickCartBtn,
    actionSheetRef,
    handleActionSheetClose,
    handleActionSheetOpen,
    selectedFilterMenu,
    selectFilterMenuHandler
  }
}


