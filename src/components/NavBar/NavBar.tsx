import React, { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"


interface NavLinksType {
  id: number,
  label: string,
  path: string
}

const NavLinks: NavLinksType[] = [
  {
    id:1, 
    label: 'HOME',
    path: '/'
  },
  {
    id:2, 
    label: 'STORE',
    path: '/'
  },
  {
    id:3, 
    label: 'ACCESSORIES',
    path: '/'
  },
  {
    id:4, 
    label: 'BRAND',
    path: '/'
  },
  {
    id:5, 
    label: 'PAGES',
    path: '/'
  },
  {
    id:6, 
    label: 'ABOUT US',
    path: '/'
  },
  {
    id:7, 
    label: 'NEWS',
    path: '/'
  },
  {
    id:8, 
    label: 'THEME EXAMPLE',
    path: '/theme_example'
  },
  
]

// const NavLinks = [
//   "HOME",
//   "STORE",
//   "ACCESSORIES",
//   "BRAND",
//   "PAGES",
//   "ABOUT US",
//   "NEWS",
//   "CONTACT US ",
// ]

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
          key={val.id.toString()}
          className={clsx(styles.link_text, styles.link_text_mobile)}
          to={val.path}>
          {val.label}
        </NavLink>
      )
    })
  }

  return (
    <div className={clsx(styles.nav_container)}>
      <hr className={clsx(styles.nav_divider, styles.hide)} />
      <div className={clsx(styles.nav_link_view)}>
        <div className={clsx(styles.row)}>{renderLink()}</div>
      </div>
      <hr className={clsx(styles.nav_divider,styles.hide)} />

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
          <div className="w-full bg-slate-300 px-7 text-center relative">

          </div>
        </div>
        </>
      }
    </div>
  )
}
