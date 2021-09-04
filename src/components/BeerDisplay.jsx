import React from 'react';
import PropTypes from 'prop-types';

const BeerDisplay = ({ beer }) => {
  const fallBackUrl = "https://images.punkapi.com/v2/keg.png";

  return beer ? (
    <div className="beer-display">
      <div className="beer-display__image">
        <picture className="">
          <source className="" srcSet={beer.image_url} alt={beer.name} />
          <img className="" src={fallBackUrl} alt={beer.name} />
        </picture>
      </div>
      <div className="beer-display__copy">
        <h2 className="beer-display__title">{beer.name}</h2>
        <p className="beer-display__description">{beer.description}</p>
      </div>
      <div className="beer-display__item beer-display__item--first">
        <h4>{beer.first_brewed}</h4>
      </div>
      <div className="beer-display__item beer-display__item--ibu">
        <h4>IBU {beer.ibu}</h4>
      </div>
      <div className="beer-display__item beer-display__item--abv">
        <h4>ABV {beer.abv}%</h4>
      </div>
      <div className="beer-display__item beer-display__item--price">
        <h4>£{beer.abv.toFixed(2)}</h4>
      </div>
    </div>
  ) : null;
};

BeerDisplay.propTypes = {
  beer: PropTypes.object,
}

export default BeerDisplay;
