import React from 'react';
import BeerDisplay from '@components/BeerDisplay';
import { ArrowIcon } from '@components/icons';
import useAccordion from '@hooks/useAccordion';

const Accordion = ({ data }) => {
  const accordion = useAccordion(data);

  return (
    <div className="accordion">
      <button className="accordion__button button-effect" onClick={accordion.toggleAll}>
        {accordion.areAllOpen ? 'Close all' : 'Open all' }
      </button>
      {accordion.items.map(item => (
        <div className="accordion__item" key={item.data.id}>
          <input className="accordion__input" type="checkbox" checked={item.isOpen} readOnly />
          <label className="accordion__label" onClick={() => accordion.toggle(item.data.id)}>
            {item.data.name}
            <ArrowIcon className={`accordion__icon ${item.isOpen ? 'accordion__icon--down' : ''}`} />
          </label>
          <div className="accordion__content">
            <BeerDisplay beer={item?.data ?? {}} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
