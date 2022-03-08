import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shopping_cart from '@icons/icon_shopping_cart.svg';

export const Header = () => {
  return (
    <nav>
        <img src={menu} alt="menu" className="menu" />
        <div className="navbar-left">
            <img src={logo} alt="logo" className="nav-logo" />
            <ul>
                <li>
                    <Link to="/">All</Link>
                </li>
                <li>
                    <Link to="/">Clothes</Link>
                </li>
                <li>
                    <Link to="/">Electronics</Link>
                </li>
                <li>
                    <Link to="/">Furnitures</Link>
                </li>
                <li>
                    <Link to="/">Toys</Link>
                </li>
                <li>
                    <Link to="/">Others</Link>
                </li>
            </ul>
        </div>
        <div className="navbar-right">
            <ul>
                <li className="navbar-email">platzi@example.com</li>
                <li className="navbar-shopping-cart">
                    <img src={shopping_cart} alt="shopping cart" />
                    <div>2</div>
                </li>
            </ul>
        </div>
    </nav>
  )
}
