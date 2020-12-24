import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/icons/clapperboard_cinema.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="header-navbar">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={logo} alt="logo" className="header-navbar-logo mr-3" />
        </Link>
      </div>
      <ul className="header-navbar-nav">
        <li className="nav-item">
          <Link to="/">
            Афиша
          </Link>   
        </li>
        <li className="nav-item">
          <Link to="/moviehouses" className="link">
            Кинотеатры
          </Link>   
        </li>
      </ul>
      <div className="cart-button-wrapper ml-auto">
        <Link to="/cart">
          <button className="cart-button">
            <i className="fas fa-cart-plus"></i>
            <span className="cart-button-txt">Корзина</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;