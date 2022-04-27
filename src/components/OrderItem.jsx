import React, { useContext } from 'react'
import AppContext from '@context/AppContext'
import '@styles/OrderItem.scss'
import closeIcon from '@icons/icon_close.png'

export const OrderItem = ({product, index}) => {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className="OrderItem">
        <figure>
            <img src={product.image} alt={product.title} />
        </figure>
        <p>{product.title}</p>
        <p>${product.price}</p>
        <img 
          src={closeIcon} 
          alt="close" 
          style={{cursor: 'pointer'}}
          onClick={() => removeFromCart(product, index)}
          />
    </div>
  )
}
