import React from 'react';

const BeerCard = ({ beer, handleSelect }) => {
  const fallBackUrl = "https://images.punkapi.com/v2/keg.png";

  return (
    <div className="beer-card" onClick={() => handleSelect(beer)}>
      <picture className="beer-card__item">
        <source className="beer-card__image" srcSet={beer.image_url} alt={beer.name} />
        <img className="beer-card__image" src={fallBackUrl} alt={beer.name} />
      </picture>
      <div className="beer-card__copy">
        <h2 className="beer-card__copy--title">{beer.name}</h2>
        <p className="beer-card__copy--body">IBU {beer.ibu} ABV {beer.abv}%</p>
      </div>
    </div>
  );
}

export default BeerCard;
