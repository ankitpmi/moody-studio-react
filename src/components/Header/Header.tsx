import React from "react"
import clsx from "clsx"
import { SVGs } from "../../assets"
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <nav className={clsx(styles.nav_main)}>
      <div className={clsx(styles.nav_container)}>
        <div className={clsx(styles.row)}>
          <div className={clsx(styles.left_view, styles.row)}>
            <img
              src={SVGs.Logo}
              className={clsx(styles.nav_img)}
              alt="navbar"
            />            
          </div>        
        </div>
      </div>
    </nav>
  )
}
