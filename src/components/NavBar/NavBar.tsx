import React, { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"

const NavLinks = [
  "HOME",
  "STORE",
  "ACCESSORIES",
  "BRAND",
  "PAGES",
  "ABOUT US",
  "NEWS",
  "CONTACT US ",
]

interface NavBarProps {
  showMenu: boolean
}

export const NavBar = ({ showMenu }: NavBarProps) => {
  const [contentHeight, setContentHeight] = useState(0)

  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight * 2)
    }
  }, [contentRef])
  const renderLink = () => {
    return NavLinks.map((val) => {
      return (
        <NavLink
          key={val.toString()}
          className={clsx(styles.link_text, styles.link_text_mobile)}
          to={"/"}>
          {val}
        </NavLink>
      )
    })
  }

  return (
    <div className={clsx(styles.nav_container)}>
      <hr className={clsx(styles.nav_divider, !showMenu && styles.hide)} />
      <div className={clsx(styles.nav_link_view)}>
        <div className={clsx(styles.row)}>{renderLink()}</div>
      </div>
      {/* <div
        ref={contentRef}
        style={{ maxHeight: showMenu ? contentHeight : "0px" }}
        className={clsx(styles.mobile_menu_container)}>
          <div className="flex flex-col justify-center items-center w-full">
            {renderLink()}
          </div>
      </div> */}
      {
        showMenu && <>
        
        <div ref={contentRef}   className={clsx(styles.mobile_menu_container, showMenu ? styles.menu_open : styles.menu_close)}>
          <div className='flex flex-col justify-center items-center w-full'>
            {renderLink()}
            
          </div>
        </div>
        </>
      }
      <hr className={clsx(styles.nav_divider, !showMenu && styles.hide)} />
    </div>
  )
}
