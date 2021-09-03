import React from 'react';
import useBeerData from '@hooks/useBeerData';

const App = () => {
  const beers = useBeerData();
  console.log('beers', beers);

  const handleNextPageClick = () => beers.nextPage()
  const handlePrevPageClick = () => beers.prevPage();

  return (
    <div>
      <h2> Temp Header</h2>
      <button onClick={handleNextPageClick}>Next Page</button>
      <button onClick={handlePrevPageClick}>Prev Page</button>
    </div>
  );
}

export default App;
