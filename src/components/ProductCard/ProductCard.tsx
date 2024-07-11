import React from "react"
import clsx from "clsx"
import { Category } from "../../services"
import styles from "./ProductCard.module.css"

interface ProductCardProps {
  name: string
  category: Category
  price: number
  color: string[]
  img: string
  p_id: number
}

export const ProductCard = React.memo(
  ({ name, p_id, img, price, color }: ProductCardProps) => {
    return (
      <div className={clsx(styles.card_view)}>
        <img src={img} alt={`img-${p_id}`} className={clsx(styles.card_img)} />
        <div className={clsx(styles.card_content_view)}>
          <h1 className={clsx(styles.card_title)}>{name}</h1>
          <div className={clsx(styles.color_view)}>
            {color.map((col) => {
              return (
                <div
                  className={clsx(
                    styles.color_dot,
                    col.toLocaleLowerCase() == "white" &&
                      "border border-gray-300"
                  )}
                  style={{ backgroundColor: col }}
                />
              )
            })}
          </div>
          <h1 className={clsx(styles.card_amount)}>{price}$</h1>
        </div>
      </div>
    )
  }
)
