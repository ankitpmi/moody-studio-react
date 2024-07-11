import React from "react"
import { NavLink } from "react-router-dom";
import clsx from "clsx"
import styles from "./Footer.module.css"


export const Footer = () => {
  return (
    <footer className={clsx(styles.footer_main)}>
      <div className={clsx(styles.footer_container)}>
        <div className={clsx(styles.footer_grid_layout)}>
          <div className={styles.main_column}>
            <h2 className={clsx(styles.footer_heading)}>URBAN OUTFITTERS</h2>
            <p className={clsx(styles.footer_content, 'my-[40px]')}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>


            <p className={clsx(styles.address_text)}>
              121 king street, Melbourne 3000<br />
              +61 3 8376 6284<br />
              contact@urbanoutfitters.com
            </p>
          </div>

          {/* <div className={styles.main_column}></div> */}

          {/* 1 */}
          <div className={styles.list_columns}>
            <h5 className={styles.list_title}>SHOPPING</h5>
            <ul className="mt-6">
              <li className={styles.list_text}>
                <NavLink to='/'>
                  Your cart
                </NavLink>
              </li>
              <li className={styles.list_text}>
                <NavLink to='/'>
                  Your orders
                </NavLink>
              </li>
              <li className={styles.list_text}>
                <NavLink to='/'>
                  Compared items
                </NavLink>
              </li>
              <li className={styles.list_text}>
                <NavLink to='/'>
                  Wishlist items
                </NavLink>
              </li>
              <li className={styles.list_text}>
                <NavLink to='/'>
                  Shipping detail
                </NavLink>
              </li>
            </ul>
          </div>

          {/* 2 */}
          <div className={styles.list_columns}>
            <h5 className={styles.list_title}>MORE LINK</h5>
            <ul className="mt-6">
              <li className={styles.list_text}>
                <NavLink to='/'>
                  Blog
                </NavLink>
              </li>
              <li className={styles.list_text}>
                <NavLink to='/'>
                  Gift Center
                </NavLink>
              </li>
              <li className={styles.list_text}>
                <NavLink to='/'>
                  Buying Guides
                </NavLink>
              </li>
              <li className={styles.list_text}>
                <NavLink to='/'>
                  New Arrivals
                </NavLink>
              </li>
              <li className={styles.list_text}>
                <NavLink to='/'>
                  Clearance
                </NavLink>
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div className={clsx(styles.main_column)}>
            <h5 className={styles.list_title}>FROM THE BLOG</h5>

            <div className="my-4">
              <span className={clsx(styles.day_text)}>
                26
              </span>
              <span className={clsx(styles.small_text, 'ml-1')}>May</span>
              <p className={clsx( styles.footer_content, styles.text_white, 'my-[10px]')}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <p className={clsx(styles.extra_small_text)}>
              3 comments
              </p>
            </div>
            <hr className={styles.footer_divider} />
            <div className="my-4">
              <span className={clsx(styles.day_text)}>
                27
              </span>
              <span className={clsx(styles.small_text, 'ml-1')}>May</span>
              <p className={clsx( styles.footer_content, styles.text_white, 'my-[10px]')}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <p className={clsx(styles.extra_small_text)}>
              3 comments
              </p>
            </div>           
          </div>
        </div>

        

       
      </div>
      <div className={clsx(styles.all_right_view)}>   
            <p className={clsx(styles.footer_content_text)}>
            Urban Outfitters © – All rights reserved 
            </p>
        </div>
    </footer>
  )
}
