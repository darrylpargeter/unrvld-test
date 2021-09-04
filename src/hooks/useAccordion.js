import React from 'react';

/*
 * a hook that follows a headless UI pattern, allowing the ability to decouple the UI from the logic
 * more info on this pattern:
 * https://www.merrickchristensen.com/articles/headless-user-interface-components/
 * https://react-table.tanstack.com/docs/overview
 */

export default function useAccordion(data) {
  if (!Array.isArray(data)) throw new Error('Accordion: passed in data needs to be in an array format');

  const [state, setState] = React.useState({ areAllOpen: false, items: {} });

  React.useEffect(() => {
    const newState = data.reduce((acc, curr) => {
      return {
        ...acc,
        items: {
          ...acc.items,
          [curr.id]: {
            isOpen: false,
            data: curr,
          },
        }
        
      }
    }, { areAllOpen: false, items: {} });

    setState(newState);
  }, [data]);

  const _convertToArray = (data) => Object.values(data).map(d => d);

  const toggleAll = () => {
    setState(prev => {
      return {
        ...prev,
        areAllOpen: !prev.areAllOpen,
        items: _convertToArray(data).reduce((acc, curr) => {
          return {
            ...acc,
            [curr.id]: {
              isOpen: !prev.areAllOpen,
              data: curr,
            }
          }
        }, {}),
      }
    });
  };

  const toggle = (id) => {
    setState(prev => {
      return {
        ...prev,
        items: {
          ...prev.items,
          [id]: {
            ...prev.items[id],
            isOpen: !prev.items[id].isOpen,
          },
        }
        
      }
    });
  };

  return {
    toggle,
    toggleAll,
    areAllOpen: state.areAllOpen,
    items: _convertToArray(state.items),
  }
}
