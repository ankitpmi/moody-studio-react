 import React from 'react'
 import clsx from 'clsx';
 import { Category } from '../../services';
 import styles from './ProductCard.module.css'

 interface ProductCardProps {  
  name: string;
  category: Category;
  price: number;
  color: string[];
  img: string;
  p_id: number
 }
 
export const ProductCard = React.memo(({name,p_id,
   img
}: ProductCardProps) => {
   return (
     <div className={clsx(styles.card_view)}>
      <img src={img} alt={`img-${p_id}`} />
{name}
     </div>
   )
 })
 
