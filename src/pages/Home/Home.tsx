import React from 'react'
import clsx from 'clsx';
import { useHome } from './useHome'
import styles from './Home.module.css'
import ProductView from './views/ProductView';
import FilterMenu from './views/FilterMenu';

const Home = () => {
  const {productList,filterMenuList,handleToggle} = useHome()
  
  return (
    <div className={clsx(styles.home_container)}>
        <div className={clsx(styles.grid_layout)}>
          <div className={styles.filter_view_column}>
            <FilterMenu filterMenuList={filterMenuList}  handleToggle={handleToggle} />
          </div>
          <div className={styles.contain_view_columns}>           
            <h1 className={clsx(styles.page_heading)}>Products</h1>
            <p className={clsx(styles.content_Text, 'my-9')}>ITS EASY TO TRANSFORM YOUR BEDROOM INTERIOR WITH OUR GREAT SELECTION OF ACCESSORIES.</p>
            {
              productList.length > 0 ?
              <ProductView products={productList} />
              :
              <h1>No data found</h1>
            }
            
          </div>
        </div>
    </div>
  )
}

export default Home