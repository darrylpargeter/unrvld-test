import React from 'react';
import useBeerData from '@hooks/useBeerData';
import { Router, Link } from '@reach/router';
import Shop from '@containers/Shop';
import AllBeers from '@containers/AllBeers';

const App = () => {
  const beers = useBeerData();
  console.log('beers', beers);

  const handleNextPageClick = () => beers.nextPage()
  const handlePrevPageClick = () => beers.prevPage();

  return (
    <div>
      <h2> Temp Header</h2>
      <nav>
        <Link to="/">Shop</Link>{" "}
        <Link to="/all-beers">All Beers</Link>{" "}
      </nav>

      <Router>
        <Shop path="/" />
        <AllBeers path="all-beers" />
      </Router>

      <button onClick={handleNextPageClick}>Next Page</button>
      <button onClick={handlePrevPageClick}>Prev Page</button>
    </div>
  );
}

export default App;
