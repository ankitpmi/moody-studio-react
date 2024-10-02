import React from "react"
import clsx from "clsx"
import { FilterMenuType } from "../../constants"

interface FilterMenuItemMobileProps {
  menuItem: FilterMenuType
  handleToggle: (id: number) => void
}

export const FilterMenuItemMobile = ({
  menuItem,
  handleToggle,
}: FilterMenuItemMobileProps) => {
  return (
    <div className="h-full p-6">
      <label
        className={clsx(
          "font-bold text-[18px] text-[#323334] mt-6 mb-2 capitalize"
        )}>
        {menuItem.label}
      </label>
      <div className="grid grid-cols-4 gap-4  mt-8">
        {menuItem.label === "Color"
          ? menuItem.items?.map((val) => {
              return (
                <div>
                  <RenderColor menuItem={val} handleToggle={handleToggle} />
                </div>
              )
            })
          : menuItem.items?.map((val) => {
              return (
                <div>
                  <RenderLabel menuItem={val} handleToggle={handleToggle} />
                </div>
              )
            })}
      </div>
    </div>
  )
}

const RenderLabel = ({ handleToggle, menuItem }: FilterMenuItemMobileProps) => {
  return (
    <button
      onClick={() => handleToggle(menuItem.id)}
      type="button"
      className={clsx(
        "w-full h-full py-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg  hover:text-red-600 focus:z-10",
        menuItem.isSelected === true
          ? "border-red-600 border-[2px]"
          : "border border-gray-200"
      )}>
      {menuItem.label}
    </button>
  )
}
const RenderColor = ({ handleToggle, menuItem }: FilterMenuItemMobileProps) => {
  return (
    <div
      className={clsx(
        "w-full h-full overflow-hidden p-[3px] ",
        menuItem.isSelected === true
          ? "border border-gray-500 rounded-lg"
          : "border-transparent"
      )}>
      <button
        onClick={() => handleToggle(menuItem.id)}
        type="button"
        style={{ backgroundColor: `${menuItem.label}` }}
        className={clsx(
          "w-full h-full rounded-lg focus:outline-none p-3 focus:z-10"
        )}
      />
    </div>
  )
}
