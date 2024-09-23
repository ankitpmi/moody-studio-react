import React from "react"
import clsx from "clsx"
import styles from "./FilterMenu.module.css"
import { FilterMenuType } from "../../../constants"
import { IoIosArrowDown } from "react-icons/io"
import { Dropdown } from "../../../components"

interface FilterMenuProps {
  filterMenuList: FilterMenuType[]
  handleToggle: (id: number) => void
  handleActionSheetOpen: () => void
}

const FilterMenu = ({
  filterMenuList,
  handleToggle,
  handleActionSheetOpen,
}: FilterMenuProps) => {
  console.log("filterMenuList :: ", filterMenuList)

  return (
    <div className={clsx(styles.filter_menu_container)}>
      <div className={clsx(styles.filter_menu_render_view)}>
        {filterMenuList.map((item) => {
          if (item.id === 3) {
            return (
              <RenderColors key={item.id} item={item} onToggle={handleToggle} />
            )
          } else {
            return (
              <FilterMenuItem
                key={item.id}
                item={item}
                onToggle={handleToggle}
              />
            )
          }
        })}
      </div>
      {/* For small devices */}
      <div className={clsx(styles.filter_menu_render_view_responsive)}>
        {filterMenuList.map((item) => {
          // return <Dropdown key={item.id} item={item} onToggle={handleToggle} actionSheetHandler={handleActionSheetOpen} />
          return (
            <button
              onClick={handleActionSheetOpen}
              className={clsx(styles.filter_menu_btn_for_small_device)}>
              <span>{item.label}</span>
              <IoIosArrowDown className={clsx(styles.dropdown_icon)} />
            </button>
          )
        })}
      </div>
    </div>
  )
}

const FilterMenuItem: React.FC<{
  item: FilterMenuType
  onToggle: (id: number) => void
}> = React.memo(({ item, onToggle }) => {
  return (
    <div className="ml-4">
      {item.items ? (
        <div className={clsx(styles.category_title)}>{item.label}</div>
      ) : (
        <button onClick={() => onToggle(item.id)} className="my-1">
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
})

const RenderColors: React.FC<{
  item: FilterMenuType
  onToggle: (id: number) => void
}> = React.memo(({ item, onToggle }) => {
  return (
    <div className="ml-4 col-span-2 ">
      {item.items ? (
        <div className={clsx(styles.category_title)}>{item.label}</div>
      ) : (
        <div
          className={clsx(
            item.isSelected && "border-[2px] rounded border-gray-500",
            "h-[26px] w-[26px] flex justify-center items-center mt-4 hover:border-[1px] rounded border-gray-400"
          )}>
          <button onClick={() => onToggle(item.id)}>
            <div
              className="rounded h-[20px] w-[20px]"
              style={{ backgroundColor: item.label }}
            />
          </button>
        </div>
      )}
      {item.items && (
        <div className="ml-4 grid md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-12 2xl:grid-cols-12 grid-cols-1 gap-0">
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
})

export default React.memo(FilterMenu)
