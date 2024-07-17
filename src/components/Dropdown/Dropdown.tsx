import React from "react"
import { IoIosArrowDown } from "react-icons/io";
import { FilterMenuType } from "../../constants"
import styles from "./Dropdown.module.css"
import clsx from "clsx";

interface DropdownProps {
  item: FilterMenuType
  onToggle: (id: number) => void
}

export const Dropdown = React.memo(({ item, onToggle }: DropdownProps) => {
  return (
    <div className={clsx(styles.dropdown_container)}>
    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      className={clsx(styles.dropdown_view)}
      type="button">
      {item.label}
      
      <IoIosArrowDown className={clsx(styles.dropdown_icon)} />     
    </button>
    </div>
  )
})
