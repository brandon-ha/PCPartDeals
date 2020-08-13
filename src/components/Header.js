import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="container header__content">
      <Link className="header__title" to="/">
        <h1>PCPartDeals</h1>
      </Link>
    </div>
  </header>
);

export default Header;