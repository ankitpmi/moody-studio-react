import React from "react"
import clsx from "clsx"
import styles from "../Home.module.css"
import { FilterMenuType } from "../../../constants"

interface FilterMenuProps {
  filterMenuList: FilterMenuType[]
  handleToggle: (id: number) => void
}

const FilterMenu = ({ filterMenuList, handleToggle }: FilterMenuProps) => {
  return (
    <div className={clsx(styles.filter_menu_container)}>
      {filterMenuList.map((item) => {
        if (item.id === 3) {
          return (
            <RenderColors key={item.id} item={item} onToggle={handleToggle} />
          )
        } else {
          return (
            <FilterMenuItem key={item.id} item={item} onToggle={handleToggle} />
          )
        }
      })}
    </div>
  )
}

const FilterMenuItem: React.FC<{
  item: FilterMenuType
  onToggle: (id: number) => void
}> = ({ item, onToggle }) => {
  return (
    <div className="ml-4">
      {item.items ? (
        <div className={clsx(styles.category_title)}>{item.label}</div>
      ) : (
        <button onClick={() => onToggle(item.id)}>
          <label
            className={clsx(
              "block text-gray-600 cursor-pointer hover:text-red-600",
              item.isSelected === true && "text-red-500"
            )}>
            {item.label}
          </label>
        </button>
      )}
      {item.items && (
        <div className="ml-4">
          {item.items.map((subItem) => {
            return (
              <FilterMenuItem
                key={subItem.id}
                item={subItem}
                onToggle={onToggle}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

const RenderColors: React.FC<{
  item: FilterMenuType
  onToggle: (id: number) => void
}> = ({ item, onToggle }) => {
  return (
    <div className="ml-4 col-span-4">
      {item.items ? (
        <div className={clsx(styles.category_title)}>{item.label}</div>
      ) : (
        
          <div className={clsx(item.isSelected && 'border-[2px]', 'h-[20px] w-[20px] mt-4')}>
            <button onClick={() => onToggle(item.id)}>
              <div
                className="rounded h-[20px] w-[20px]"
                style={{ backgroundColor: item.label }}
              />
            </button>
          </div>
      )}
      {item.items && (
        <div className="ml-4 grid md:grid-cols-12 grid-cols-1 gap-3 ">
          {item.items.map((subItem) => {
            return (
              <RenderColors
                key={subItem.id}
                item={subItem}
                onToggle={onToggle}
              />
            )
          })}
          </div>
      )}
    </div>
  )
}

export default React.memo(FilterMenu)
