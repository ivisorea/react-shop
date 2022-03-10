import React from 'react'
import '@styles/OrderItem.scss'
import closeIcon from '@icons/icon_close.png'
import { ProductItem } from './ProductItem'

export const OrderItem = ({product}) => {
  return (
    <div className="OrderItem">
        <figure>
            <img src={product.images[0]} alt={product.title} />
        </figure>
        <p>{product.title}</p>
        <p>${product.price}</p>
        <img src={closeIcon} alt="close" />
    </div>
  )
}
