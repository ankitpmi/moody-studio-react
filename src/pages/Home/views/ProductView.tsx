import React, { useCallback } from "react"
import clsx from "clsx"
import styles from "../Home.module.css"
import { ProductCard, ShimmerLoader } from "../../../components"
import { ProductsRes } from "../../../services"
import { IMG } from "../../../assets"

interface ProductViewProps {
  products: [] | ProductsRes[]
  isLoading: boolean
}

const ProductView = ({ products, isLoading }: ProductViewProps) => {
  const renderProductList = useCallback(() => {
    return products.map((val) => {
      return (
        <div key={val.id.toString()} className={clsx(styles.product_container_columns)}>
          <ProductCard
            key={val.id.toString()}
            category={val.category}
            color={val.color}
            img={val.img}
            name={val.name}
            price={val.price}
            p_id={val.id}
          />
        </div>
      )
    })
  }, [products])

  const renderSkaletonLoader = useCallback(() => {
    return Array.from({ length: 10 }, (_, index) => index).map((val) => {
      return (
        <div key={val.toString()} className={clsx(styles.product_container_columns)}>
          <ShimmerLoader />
        </div>
      )
    })
  }, [])

  const renderNoDataFound = useCallback(
    () => {
      return(
        <div className={clsx(styles.no_data_container)}>
          <img src={IMG.NoDataFound} alt="no_data_found" className={clsx(styles.no_data_found_img)} />
          <h1 className={clsx(styles.no_data_title)}>No data found!!!</h1>
        </div>
      )
    },
    [],
  )
  

  return (
    <div className={clsx(styles.product_view_container)}>
      <div className={clsx(styles.grid_layout, styles.product_grid_layout)}>
        {!isLoading && products.length > 0 ? renderProductList() : !isLoading && products.length < 1 ? renderNoDataFound() : renderSkaletonLoader()}
      </div>
    </div>
  )
}

export default React.memo(ProductView)
