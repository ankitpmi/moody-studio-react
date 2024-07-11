import React, { useState } from 'react'
import clsx from "clsx"
import styles from "../Home.module.css"
import { FilterMenuData, FilterMenuType } from '../../../constants'


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

const FilterMenu = () => {
  const [filterMenuList, setFilterMenuList] = useState(FilterMenuData)

  const handleToggle = (id: number) => {
    setFilterMenuList((prevData) => toggleSelection(prevData, id));
  };

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
        <div className="font-semibold text-gray-700 mt-4">
          {item.label}
        </div>
      ) : (
        <button onClick={() => onToggle(item.id)}>
        <label className={clsx("block text-gray-600 cursor-pointer hover:text-black", item.isSelected === true && 'text-red-500')}>         
          {item.label}
        </label>
        </button>

      )}
      {item.items && (
        <div className="ml-4">
          {item.items.map((subItem) => (
            <FilterMenuItem key={subItem.id} item={subItem} onToggle={onToggle} />
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(FilterMenu)