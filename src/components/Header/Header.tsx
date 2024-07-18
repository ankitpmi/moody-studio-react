import React, { useState } from "react"
import clsx from "clsx"
import { IoHeartOutline,IoSearchOutline  } from "react-icons/io5";
import { BsBucket } from "react-icons/bs";
import { LuUser, LuMenu } from "react-icons/lu";

import { SVGs } from "../../assets"
import styles from "./Header.module.css"
import { NavBar } from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = () => {    
    setShowMenu(!showMenu);
  };

  return (
    <nav className={clsx(styles.nav_main)}>
      <div className={clsx(styles.nav_container)}>
        <div className={clsx(styles.row)}>
          <div className={clsx(styles.space_between, styles.row)}>
            <NavLink to={'/'}>
            <img
              src={SVGs.Logo}
              className={clsx(styles.nav_img)}
              alt="navbar"
              />            
              </NavLink>
          </div>    
          <div className={clsx(styles.row)}>
          <IoSearchOutline className={clsx(styles.nav_icon)} />
          <LuUser className={clsx(styles.nav_icon)} />
          <NavLink  to={'/cart'}>
          <BsBucket className={clsx(styles.nav_icon)} />
          </NavLink>
          <IoHeartOutline className={clsx(styles.nav_icon, styles.nav_icon_mobile)} />
          <button onClick={toggleMobileMenu}>

          <LuMenu className={clsx(styles.nav_icon, styles.bar_icon)}  />
          </button>
          </div>    
        </div>
        <NavBar showMenu={showMenu} />        
      </div>
    </nav>
  )
}
