import React from 'react';
import PropTypes from 'prop-types';
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

Filters.propTypes = {
  filterByName: PropTypes.func,
  filterByIngredient: PropTypes.func,
  filterByAbv: PropTypes.func,
}

export default Filters;
