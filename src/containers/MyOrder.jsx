import React,{ useContext } from 'react'
import AppContext from '@context/AppContext'
import { OrderItem } from '@components/OrderItem'
import '@styles/MyOrder.scss'

export const MyOrder = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        let total = 0;
        state.cart.forEach(item => {
            total += item.price;
        });
        return total;
    }
    
  return (
    <aside className="MyOrder">
        <div className="title-container">
            <img src="./icons/flechita.svg" alt="arrow" />
            <p className="title">My order</p>
        </div>
        <div className="my-order-content">
            {state.cart.map((product) => (
                <OrderItem key={`orderItem-${product.id}`} product={product} />
            ))}
            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>${sumTotal()}</p>
            </div>
            <button className="primary-button">
                Checkout
            </button>
        </div>
    </aside>
  )
}
