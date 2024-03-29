import React from 'react';
import { Router } from '@reach/router';
import Shop from '@containers/Shop';
import AllBeers from '@containers/AllBeers';

const RouterContainer = () => {
  return (
    <div className="layout__router">
      <Router>
        <Shop path="/" />
        <AllBeers path="all-beers" />
      </Router>
    </div>
  );
}

export default RouterContainer
