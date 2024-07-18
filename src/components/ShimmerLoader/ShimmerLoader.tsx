import React from "react"
import clsx from "clsx"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import styles from "./ShimmerLoader.module.css"

interface ShimmerLoaderProps {
  numOfRender?: number
}

export const ShimmerLoader = ({ numOfRender = 5 }: ShimmerLoaderProps) => {
  const renderCounts = Array.from({ length: numOfRender }, (_, index) => index)
  return (
    <>
      {/* {renderCounts.map((_) => { */}
        {/* return ( */}
          <div className={clsx(styles.card_view)}>
            <Skeleton className={clsx(styles.card_img)} />
            <div className={clsx(styles.card_content_view)}>
              <Skeleton className={clsx(styles.card_title)} />
              <div className={clsx(styles.color_view)}>
                {[1, 2, 3].map((col) => {
                  return <Skeleton circle className={clsx(styles.color_dot)} />
                })}
              </div>
              <Skeleton className={clsx(styles.card_amount)} />
            </div>
          </div>
        {/* ) */}
      {/* })} */}
    </>
  )
}
