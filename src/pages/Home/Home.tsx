import React from 'react'
import clsx from 'clsx';
import { useHome } from './useHome'
import styles from './Home.module.css'
import ProductView from './views/ProductView';
import FilterMenu from './views/FilterMenu';
import { OfferBanner } from '../../components';

const Home = () => {
  const {productList,filterMenuList,handleToggle, isLoading, onClickCartBtn} = useHome()
  
  return (
    <div className={clsx(styles.home_container)}>
      <OfferBanner />
      <div className={clsx(styles.grid_container)}>
        <div className={clsx(styles.grid_layout)}>
          <div className={styles.filter_view_column}>
            <FilterMenu filterMenuList={filterMenuList}  handleToggle={handleToggle} />
          </div>
          <div className={styles.contain_view_columns}>           
            <h1 className={clsx(styles.page_heading)}>Products</h1>
            <p className={clsx(styles.content_Text, 'my-9')}>Its easy to transform your bedroom interior with our great selection of accessories.</p>            
              <ProductView products={productList} isLoading={isLoading} onClickCartBtn={onClickCartBtn} />                                    
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home