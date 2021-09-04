import React from 'react';
import BeerDisplay from '@components/BeerDisplay';
import useAccordion from '@hooks/useAccordion';

const Accordion = ({ data }) => {
  const accordion = useAccordion(data);

  return (
    <div className="accordion">
      <button className="accordion__button" onClick={accordion.toggleAll}>
        {accordion.areAllOpen ? 'Close all' : 'Open all' }
      </button>
      {accordion.items.map(item => (
        <div className="accordion__item" key={item.data.id}>
          <input className="accordion__input" type="checkbox" checked={item.isOpen} readOnly />
          <label className="accordion__label" onClick={() => accordion.toggle(item.data.id)}>{item.data.name}</label>
          <div className="accordion__content">
            <BeerDisplay beer={item?.data ?? {}} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
