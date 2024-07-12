import React from 'react'
import clsx from 'clsx';
import styles from './OfferBanner.module.css'
import { NavLink } from 'react-router-dom';


const OFFER_PER = 15
const EXTRA_PER = 15

export const OfferBanner = () => {
  return (
    <div className={clsx(styles.offerBannerContainer)}>
      <div className={clsx(styles.content_view)}>
        <h1 className={clsx(styles.offer_title)}>Member Exclusive</h1>
        <h3 className={clsx(styles.offer_sub_title)}>{OFFER_PER}% off everything + extra ${EXTRA_PER} off for plus status</h3>
        <p className={clsx(styles.offer_small_text)}>Not a member? <NavLink to={'/'}>Join now to shop.</NavLink></p>
      </div>
    </div>
  )
}

