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
    <button className="asc-desc-filter" onClick={handleOnClick}>
      <p>{children}</p>
      {icon}
    </button>
  );
};

export default AscDsc
