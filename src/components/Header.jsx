import React from 'react';
import { Link } from '@reach/router';
import { UserIcon, CartIcon } from '@components/icons';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__navLink" to="/">Shop</Link>{" "}
        <Link className="header__navLink" to="/all-beers">All Beers</Link>{" "}
      </nav>
      <div className="header__logo">
        <h1>Brew Dog</h1>
      </div>
      <div className="header__shopping">
        <UserIcon />
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
