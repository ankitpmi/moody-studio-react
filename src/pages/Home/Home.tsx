import React from 'react'
import clsx from 'clsx';
import { useHome } from './useHome'
import styles from './Home.module.css'
import ProductView from './views/ProductView';

const Home = () => {
  const {productList} = useHome()
  console.log('productList-1: ', productList);
  return (
    <div className={clsx(styles.home_container)}>
        <div className={clsx(styles.grid_layout)}>
          <div className={styles.filter_view_column}>
            Filter view
          </div>
          <div className={styles.contain_view_columns}>           
            <h1 className={clsx(styles.page_heading)}>BEDROOM</h1>
            <p className={clsx(styles.content_Text, 'my-9')}>ITS EASY TO TRANSFORM YOUR BEDROOM INTERIOR WITH OUR GREAT SELECTION OF ACCESSORIES.</p>
            <ProductView products={productList} />
          </div>
        </div>
    </div>
  )
}

export default Home