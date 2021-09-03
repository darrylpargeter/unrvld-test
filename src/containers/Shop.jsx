import React from 'react';
import CTA from '@components/CTA'; 
import BeerCard from '@components/BeerCard';
import useBeerData from '@hooks/useBeerData';
import { sortArray } from '@utils/sortArray';

// TODO create CTA comp 
// TODO create AscDsc comp
// TODO create methods to sort beer data
// TODO add in click event to update shop display from cta
// TODO create a AddToCart button
// TODO create display comp

const Shop = () => {
  const [data, setData] = React.useState([]);
  const res = useBeerData({ per_page: 8 });

  React.useEffect(() => setData(res.data), [res.data]);

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

  return (
    <div className="shop">
      <div className="shop__display">
        <h1>Shop display</h1>
      </div>
      <div className="shop__cta">
        <CTA 
          data={data}
          Component={BeerCard}
          filterByName={filterByName}
          filterByIngredient={filterByIngredient}
          filterByAbv={filterByAbv}
        />
      </div>
    </div>
  );
};

export default Shop;
