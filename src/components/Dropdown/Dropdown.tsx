import React, { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { FilterMenuType } from "../../constants"
import styles from "./Dropdown.module.css"
import clsx from "clsx"

interface DropdownProps {
  item: FilterMenuType
  onToggle: (id: number) => void;
  actionSheetHandler?:() => void
}

export const Dropdown = React.memo(({ item, onToggle, actionSheetHandler }: DropdownProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  return (
    <div className={clsx(styles.dropdown_container)}>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={clsx(styles.dropdown_view)}
        // onClick={() => {
        //   setIsDropDownOpen((prevState) => !prevState)
        // }}
        onClick={actionSheetHandler && actionSheetHandler}
        type="button">
        {item.label}

        <IoIosArrowDown className={clsx(styles.dropdown_icon)} />
      </button>
      {/* <!-- Dropdown menu --> */}
      {isDropDownOpen && (
        <div id="dropdown" className={clsx(styles.option_view)}>
          <ul
            className={clsx(styles.option_ul)}
            aria-labelledby="dropdownDefaultButton">
            {item.items &&
              item.items.length > 0 &&
              item.items.map((val) => {
                return (
                  <li
                    key={val.id.toString()}
                    className={clsx(styles.option_item)}>
                    <button
                      onClick={() => {
                        onToggle(val.id)
                        setIsDropDownOpen((prevState) => !prevState)
                      }}
                      className={clsx(
                        styles.option_btn,
                        val.isSelected === true && "text-red-500"
                      )}>
                      {item.id === 3 ? (
                        <div className={clsx('p-[1px] h-[20px] w-[60px]', val.isSelected && "border-[2px] rounded border-gray-500")}>

                          <div className={clsx("rounded h-full w-full")}
                            style={{ backgroundColor: val.label }} />
                        </div>
                      ) : val.label}
                    </button>
                  </li>
                )
              })}
          </ul>
        </div>
      )}
    </div>
  )
})
