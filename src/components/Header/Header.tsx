import React, { useState } from "react"
import clsx from "clsx"
import { IoHeartOutline,IoSearchOutline  } from "react-icons/io5";
import { BsBucket } from "react-icons/bs";
import { LuUser, LuMenu } from "react-icons/lu";

import { SVGs } from "../../assets"
import styles from "./Header.module.css"
import { NavBar } from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";
import { useCartStore } from "../../store";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {cartData} =useCartStore()

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
          <div className="relative">
          <BsBucket className={clsx(styles.nav_icon)} />
          {
            cartData.length > 0 &&
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-normal text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 ">{cartData.length}</div>          
          }
          </div>
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
