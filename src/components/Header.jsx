import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '@components/Menu';
import { MyOrder } from '@containers/MyOrder';
import AppContext from '@context/AppContext';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import '@styles/Header.scss';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [toggleOrder, useToggleOrder] = useState(false);

    const { state} = useContext(AppContext);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
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
                <li className="navbar-email" onClick={handleToggleMenu}>
                    platzi@example.com
                </li>
                <li 
                    className="navbar-shopping-cart"
                    onClick={() => useToggleOrder(!toggleOrder)}
                    >
                    <img src={shoppingCart} alt="shopping cart" />
                    {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                </li>
            </ul>
        </div>
        {menuOpen && <Menu />}
        {toggleOrder && <MyOrder/>}
    </nav>
  )
}
