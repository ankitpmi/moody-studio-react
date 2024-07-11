import React from 'react'
import clsx from 'clsx'
import styles from '../Home.module.css'

const ProductView = () => {
  return (
    <div className={clsx(styles.product_view_container)}>
      <div className={clsx(styles.grid_layout, styles.product_grid_layout)}>
        {
         Array.from(Array(10).keys()).map((val) => {
          return (
            <div className={clsx(styles.product_container_columns)}>
          Product - {val}
        </div>
          )
         })
        }       
      </div>
    </div>
  )
}

export default React.memo(ProductView)