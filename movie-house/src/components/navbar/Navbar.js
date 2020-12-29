import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/icons/clapperboard_cinema.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <React.Fragment>
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
      <MobilMenu />
    </React.Fragment>
  )
}

const MobilMenu = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = menu ? 'open-menu': 'close-menu';
  const changeMenuVisibility = () => {
    setMenu(!menu)
  }; 
  const closeMenu = () => { 
    setMenu(false)
  }
  return (
    <div className="mobile-menu">
      <button className="menu" onClick={changeMenuVisibility}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </button>
      <ul className={"hidden-menu " + openMenu}>
        <li className="nav-item mb-2">
          <Link to="/" onClick={closeMenu}>
            Главная
          </Link>   
        </li>
        <li className="nav-item mb-2">
          <Link to="/" onClick={closeMenu}>
            Афиша
          </Link>   
        </li>
        <li className="nav-item mb-2">
          <Link to="/moviehouses" className="link" onClick={closeMenu}>
            Кинотеатры
          </Link>   
        </li>
        <li className="nav-item mb-2">
          <Link to="/cart" className="link" onClick={closeMenu}>
            Корзина
          </Link>   
        </li>
      </ul>
    </div>
  )
}

export default Navbar;