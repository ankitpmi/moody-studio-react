import React from "react"
import clsx from "clsx"
import { IoMdSettings, IoMdNotifications } from "react-icons/io";
import { IoHeartSharp } from "react-icons/io5";
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
          {/* <div className={clsx(styles.right_view, styles.row)}>

            <div className={clsx(styles.avatar_view)}>
              <IoHeartSharp className={clsx(styles.nav_icon)} />
            </div>
            <div className={clsx(styles.avatar_view)}>
              <IoMdNotifications className={clsx(styles.nav_icon)} />
            </div>

            <div className={clsx(styles.avatar_view)}>
              <IoMdSettings className={clsx(styles.nav_icon)} />
            </div>

            <div className={clsx(styles.avatar_img_view)}>
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="user_img"
                className={clsx(styles.user_img)}
              />
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  )
}
