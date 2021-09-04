import { useReducer, useEffect } from 'react';
import useEndpoint from '@hooks/useEndpoint';

const initState = {
  page: 1,
  per_page: 25,
};

const nextPageAction = 'next-page';
const prevPageAction = 'prev-page';

function reducer(state, action) {
  switch(action.type) {
    case nextPageAction: {
      return {
        ...state,
        page: ++state.page, 
      };
    }
    case prevPageAction: {
      const newPage = --state.page;
      const page = newPage <= 0 ? 1 : newPage;

      return {
        ...state,
        page: page
      };
    }
    default:
      return state;
  }
}

export default function useBeerData(customParams) {
  const mergedState = { ...initState, ...customParams };
  const [state, dispatch] = useReducer(reducer, mergedState);
  const endpoint = 'https://api.punkapi.com/v2/beers';

  const request = useEndpoint({ url: endpoint, params: state });

  useEffect(() => request.makeRequest(state), [state]);

  const nextPage = () => dispatch({ type: nextPageAction });
  const prevPage = () => dispatch({ type: prevPageAction });

  const hasNextPage = request.data.length >= state.per_page;
  const hasPrevPage = state.page > 1;

  return {
    ...request,
    nextPage,
    prevPage,
    hasNextPage,
    hasPrevPage,
  };
}
