import React from 'react'
import { useHome } from './useHome'

const Home = () => {
  const {productList} = useHome()
  console.log('productList-1: ', productList);
  return (
    <div className='bg-pink-300 '>Home page</div>
  )
}

export default Home