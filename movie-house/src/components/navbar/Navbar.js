import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/icons/clapperboard_cinema.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-logo" />
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="link">
            Афиша
          </Link>   
        </li>
        <li className="nav-item">
          <Link to="/moviehouses" className="link">
            Кинотеатры
          </Link>   
        </li>
      </ul>
      <div className="cart-button-wrapper">
        <Link to="/cart">
          <button className="cart-button">
            <i className="fas fa-cart-plus"></i>
            <span className="cart-button-txt">My Cart</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;