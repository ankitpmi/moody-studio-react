import React from "react"
import clsx from "clsx"
import { SVGs } from "../../assets"
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={clsx(styles.footer_main)}>
      <div className={clsx(styles.footer_container)}>
        <div className={clsx(styles.footer_grid_layout)}>
          <div className={styles.main_column}>
            <img src={SVGs.Logo} className={styles.footer_img} alt="footer" />
            <p className={clsx(styles.footer_content)}>
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          <div className={styles.main_column}></div>

          {/* 1 */}
          <div className={styles.list_columns}>
            <h5 className={styles.list_title}>About</h5>
            <ul className="mt-6">
              <li className={styles.list_text}>How it works</li>
              <li className={styles.list_text}>Featured</li>
              <li className={styles.list_text}>Partnership</li>
              <li className={styles.list_text}>Bussiness Relation</li>
            </ul>
          </div>

          {/* 2 */}
          <div className={styles.list_columns}>
            <h5 className={styles.list_title}>Community</h5>
            <ul className="mt-6">
              <li className={styles.list_text}>Events</li>
              <li className={styles.list_text}>Blog</li>
              <li className={styles.list_text}>Podcast</li>
              <li className={styles.list_text}>Invite a friend</li>
            </ul>
          </div>

          {/* 3 */}
          <div className={styles.list_columns}>
            <h5 className={styles.list_title}>Socials</h5>
            <ul className="mt-6">
              <li className={styles.list_text}>Discord</li>
              <li className={styles.list_text}>Instagram</li>
              <li className={styles.list_text}>Twitter</li>
              <li className={styles.list_text}>Facebook</li>
            </ul>
          </div>
        </div>

        <hr className={styles.footer_divider} />

        <div className={clsx(styles.footer_grid_layout, )}>
          <div className={clsx(styles.clo_8)}>
            <p className={clsx(styles.footer_content_text)}>
              ©2022 MORENT. All rights reserved
            </p>
          </div>
          <div className={clsx(styles.col_4)}>
            <div className={clsx(styles.grid_for_privacy_policy)}>
              <div className={clsx(styles.clo_6)}>
                <p className={clsx(styles.footer_content_text)}>
                  Privacy & Policy
                </p>
              </div>
              <div className={clsx(styles.clo_6)}>
                <p className={clsx(styles.footer_content_text)}>
                  Terms & Condition
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
