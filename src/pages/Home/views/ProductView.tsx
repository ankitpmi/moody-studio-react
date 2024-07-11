import React from "react"
import clsx from "clsx"
import styles from "../Home.module.css"
import { ProductCard } from "../../../components"
import { ProductsRes } from "../../../services"

interface ProductViewProps {
  products: [] | ProductsRes[]
}

const ProductView = ({ products }: ProductViewProps) => {
  return (
    <div className={clsx(styles.product_view_container)}>
      <div className={clsx(styles.grid_layout, styles.product_grid_layout)}>
        {products.map((val) => {
          return (
            <div className={clsx(styles.product_container_columns)}>
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
        })}
      </div>
    </div>
  )
}

export default React.memo(ProductView)
