import React from 'react';
import CTA from '@components/CTA'; 
import BeerCard from '@components/BeerCard';
import BeerDisplay from '@components/BeerDisplay';
import useBeerData from '@hooks/useBeerData';
import { sortArray } from '@utils/sortArray';

// TODO add in click event to update shop display from cta

const Shop = () => {
  const [data, setData] = React.useState([]);
  const [selectedBeer, setSelectedBeer] = React.useState();
  const res = useBeerData({ per_page: 8 });

  // TODO add in click event to update selectedBeer
  React.useEffect(() => {
    setSelectedBeer(res.data[0]);
    setData(res.data)
  }, [res.data]);

  const _makeRequest = (key, value) => {
    const formatedValue = value.replace(' ', '_');
    if (formatedValue !== '') {
      res.makeRequest({ [key]: formatedValue });
    } else {
      res.makeRequest({});
    }
  }

  const filterByName = (e) => {
    _makeRequest('beer_name', e.target.value);
  }

  const filterByIngredient = (e) => {
    _makeRequest('malt', e.target.value);
  }

  const filterByAbv = (sortType) => {
    setData([...sortArray(data, 'abv', sortType)]);
  }

  const handleBeerSelect = (beer) => {
    setSelectedBeer(beer);
  }

  return (
    <div className="shop">
      <div className="shop__display">
        <BeerDisplay beer={selectedBeer} />
      </div>
      <div className="shop__cta">
        <CTA 
          data={data}
          Component={BeerCard}
          filterByName={filterByName}
          filterByIngredient={filterByIngredient}
          filterByAbv={filterByAbv}
          handleSelect={handleBeerSelect}
        />
      </div>
    </div>
  );
};

export default Shop;
