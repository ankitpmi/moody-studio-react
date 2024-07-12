import React from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'

const NavLinks = [
  'HOME',
  'STORE',
  'ACCESSORIES',
  'BRAND',
  'PAGES',
  'ABOUT US',
  'NEWS',
  'CONTACT US '
]

interface NavBarProps {
  showMenu: boolean
}

export const NavBar = ({showMenu}: NavBarProps) => {

  const renderLink = () => {
    return NavLinks.map(val => {
      return(
        <NavLink className={clsx(styles.link_text, styles.link_text_mobile)} to={'/'}>
          {val}
        </NavLink>
      )
    })
  }

  return (
    <div className={clsx(styles.nav_container)}>
      <hr className={clsx(styles.nav_divider)} />
      <div className={clsx(styles.nav_link_view)}>
          <div className={clsx(styles.row)}>
            {
              renderLink()
            }
          </div>
      </div>
      <hr className={clsx(styles.nav_divider)} />
      {
        showMenu && <>
        <div className={clsx(styles.mobile_menu_container)}>
          <div className='flex flex-col justify-center items-center w-full'>
            {renderLink()}
          </div>
        </div>
        </>
      }
    </div>
  )
}

