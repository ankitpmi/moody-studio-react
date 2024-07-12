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

export const NavBar = () => {
  return (
    <div className={clsx(styles.nav_container)}>
      <hr className={clsx(styles.nav_divider)} />
      <div className={clsx(styles.nav_link_view)}>
          <div className={clsx(styles.row)}>
            {
              NavLinks.map(val => {
                return(
                  <NavLink className={clsx(styles.link_text)} to={'/'}>
                    <p>{val}</p>
                  </NavLink>
                )
              })
            }
          </div>
      </div>
      <hr className={clsx(styles.nav_divider)} />
    </div>
  )
}

