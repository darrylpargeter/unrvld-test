import React from 'react';
import Accordion from '@components/Accordion';
import useBeerData from '@hooks/useBeerData';

const AllBeers = () => {
  const res = useBeerData();
  console.log('res', res);

  return (
    <div className="all-beer">
      <button onClick={res.prevPage}>Prev Page</button>
      <button onClick={res.nextPage}>nextPage</button>
      <Accordion data={res.data} />
    </div>
  );
};

export default AllBeers;
