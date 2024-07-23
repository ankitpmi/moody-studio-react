import React from 'react'
import clsx from 'clsx'
import { IMG } from '../../assets'
import styles from './NoDataFound.module.css'

export const NoDataFound = React.memo(() => {
  return (
    <div className={clsx(styles.no_data_container)}>
          <img src={IMG.NoDataFound} alt="no_data_found" className={clsx(styles.no_data_found_img)} />
          <h1 className={clsx(styles.no_data_title)}>No data found!!!</h1>
        </div>
  )
})

