import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Shop</Link>{" "}
      <Link to="/all-beers">All Beers</Link>{" "}
      <h2> Temp Header</h2>
    </nav>
  );
};

export default Nav;
