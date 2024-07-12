import React from "react"
import clsx from "clsx"
import { IoHeartOutline,IoSearchOutline  } from "react-icons/io5";
import { BsBucket } from "react-icons/bs";
import { LuUser, LuMenu } from "react-icons/lu";

import { SVGs } from "../../assets"
import styles from "./Header.module.css"
import { NavBar } from "../NavBar/NavBar";

export const Header = () => {
  return (
    <nav className={clsx(styles.nav_main)}>
      <div className={clsx(styles.nav_container)}>
        <div className={clsx(styles.row)}>
          <div className={clsx(styles.space_between, styles.row)}>
            <img
              src={SVGs.Logo}
              className={clsx(styles.nav_img)}
              alt="navbar"
            />            
          </div>    
          <div className={clsx(styles.row)}>
          <IoSearchOutline className={clsx(styles.nav_icon)} />
          <LuUser className={clsx(styles.nav_icon)} />
          <BsBucket className={clsx(styles.nav_icon)} />
          <IoHeartOutline className={clsx(styles.nav_icon, styles.nav_icon_mobile)} />
          <LuMenu className={clsx(styles.nav_icon, styles.bar_icon)} />
          </div>    
        </div>
        <NavBar />
      </div>
    </nav>
  )
}
