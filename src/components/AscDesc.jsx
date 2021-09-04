import React from 'react';
import PropTypes from 'prop-types';
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

AscDsc.propTypes = {
  filterFn: PropTypes.func,
  children: PropTypes.elementType,
}

export default AscDsc
