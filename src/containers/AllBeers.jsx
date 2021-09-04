import React from 'react';
import Accordion from '@components/Accordion';
import useBeerData from '@hooks/useBeerData';

const AllBeers = () => {
  const res = useBeerData();

  return (
    <div className="all-beer">
      <Accordion data={res.data} />
    </div>
  );
};

export default AllBeers;
