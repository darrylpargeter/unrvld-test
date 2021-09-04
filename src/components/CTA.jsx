import React from 'react';
import PropTypes from 'prop-types';
import Filters from '@components/Filters';

const CTA = ({
  data,
  Component,
  filterByName,
  filterByIngredient,
  filterByAbv,
  handleSelect
}) => {
  return (
    <div className="cta">
      <Filters
        filterByAbv={filterByAbv}
        filterByName={filterByName}
        filterByIngredient={filterByIngredient} 
      />
      <div className="cta__grid">
      {data.map(d => <Component beer={d} handleSelect={handleSelect} key={d.id} />)}
      </div>
    </div>
  );
}

CTA.propTypes = {
  data: PropTypes.object,
  Component: PropTypes.elementType,
  filterByName: PropTypes.func,
  filterByIngredient: PropTypes.func,
  filterByAbv: PropTypes.func,
  handleSelect: PropTypes.func,
}

export default CTA;
