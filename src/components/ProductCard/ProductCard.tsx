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
  cartBtnHandler: () => void
}

export const ProductCard = React.memo(
  ({ name, p_id, img, price, color, cartBtnHandler }: ProductCardProps) => {
    return (
      <div className={clsx(styles.card_view)}>
        <img src={img} alt={`img-${p_id}`} className={clsx(styles.card_img)} />
        <div className={clsx(styles.card_content_view)}>
          <h1 className={clsx(styles.card_title)}>{name}</h1>
          <div className={clsx(styles.color_view)}>
            {color.map((col) => {
              return (
                <div
                key={col.toString()}
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
          <div className="flex justify-between items-center ">

          <h1 className={clsx(styles.card_amount)}>{price}$</h1>
          <button onClick={cartBtnHandler} type="button" className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200  hover:text-red-600 focus:z-10">
            Add to cart
            </button>
          </div>
        </div>
      </div>
    )
  }
)
