import React from 'react';
import { SortAscendingIcon, SortDesendingIcon } from '@components/icons';

const AscDsc = ({ filterFn, children }) => {
  const [sortType, setSortType] = React.useState(true);

  const handleOnClick = () => {
    filterFn(sortType);
    setSortType(!sortType);
  }

  const icon = sortType ? <SortAscendingIcon /> : <SortDesendingIcon />

  return (
    <button className="asc-desc-filter button-effect" onClick={handleOnClick}>
      <p className="asc-desc-filter__copy">{children}</p>
      {icon}
    </button>
  );
};

export default AscDsc
