import React from 'react';
import Accordion from '@components/Accordion';
import useBeerData from '@hooks/useBeerData';

const AllBeers = () => {
  const res = useBeerData();

  return (
    <div className="all-beer">
      <div className="all-beer__content">
        <h2 className="all-beer__title">View All Beer</h2>
        <p className="all-beer__copy">
          A Guiness borrows money from a slow Wolverine Beer. The Heineken beyond a jersey cow makes love to a crispy Rolling Rock. Another bottle toward the Ipswich Ale slyly trades baseball cards with a Budweiser Select inside a Stella Artois. 
        </p>
      </div>
      <div className="all-beer__accordion">
        <Accordion data={res.data} />
        <div className="all-beer__controls">
          {res.hasPrevPage ? (
            <button className="all-beer__button  button-effect" onClick={res.prevPage}>Prev Page</button>
          ) : null}
          {res.hasNextPage ? (
            <button className="all-beer__button all-beer__button--right button-effect" onClick={res.nextPage}>Next Page</button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AllBeers;
