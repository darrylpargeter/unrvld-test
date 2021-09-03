import React from 'react';
import AscDesc from '@components/AscDesc';

const Filters = ({ filterByName, filterByIngredient, filterByAbv }) => {
  return (
    <div className="filter">
      <AscDesc filterFn={filterByAbv}>ABV</AscDesc>
      <input className="filter__input" placeholder="filter by name" onChange={filterByName} />
      <input className="filter__input" placeholder="filter by ingredient" onChange={filterByIngredient} />
    </div>
  );
}

export default Filters;
