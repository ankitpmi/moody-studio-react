import React from 'react'
import clsx from "clsx"
import styles from "../Home.module.css"
import { FilterMenuType } from '../../../constants'

interface FilterMenuProps {
  filterMenuList: FilterMenuType[]
  handleToggle: (id: number) => void
}

const FilterMenu = ({filterMenuList,handleToggle}: FilterMenuProps) => {
  
  return (
    <div className={clsx(styles.filter_menu_container)}>      
        {filterMenuList.map((item) => (
        <FilterMenuItem key={item.id} item={item} onToggle={handleToggle} />
      ))}
    </div>
  )
}

const FilterMenuItem: React.FC<{
  item: FilterMenuType;
  onToggle: (id: number) => void;
}> = ({ item, onToggle }) => {
  

  
  return (
    <div className="ml-4">
      {item.items ? (
        <div className={clsx(styles.category_title)}>
          {item.label}
        </div>
      ) : ( 
        <button onClick={() => onToggle(item.id)}>
        <label className={clsx('block text-gray-600 cursor-pointer hover:text-red-600',item.isSelected === true && 'text-red-500' )}>         
          {item.label}
        </label>
        </button>

      )}
      {item.items && (
        <div className="ml-4">
          {item.items.map((subItem) => {
           
            
            return(
            <FilterMenuItem key={subItem.id} item={subItem} onToggle={onToggle} />
          )})}
        </div>
      )}
    </div>
  );
};

export default React.memo(FilterMenu)