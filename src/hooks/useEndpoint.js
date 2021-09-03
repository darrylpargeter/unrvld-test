import { useState, useEffect } from 'react';

export default function useEndpoint(req) {
  if (!req?.url) throw new Error('useEndpoint needs a vaild url');

  const [request, setRequest] = useState(req);

  const [res, setRes] = useState({
    isLoading: false,
    isError: false,
    data: [],
    cache: {},
  });

  const _buildQueryString = (params) => Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const _buildUrl = (req) => `${req.url}?${_buildQueryString(req.params)}`;

  const _existsInCache = (key) => !!res.cache?.[key];

  const makeRequest = (params) => {
    setRequest({
      ...request,
      params: {
        per_page: request.params.per_page,
        ...params,
      }
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setRes({
          isLoading: true,
          isError: false,
          data: [],
        });

        const url = _buildUrl(request);

        const isInCache = _existsInCache(url);
        let data = [];

        if (isInCache) {
          data = res.cache[url];
        } else {
          const rawData = await fetch(url);
          data = await rawData.json();
        }


        setRes({
          isLoading: false,
          isError: false,
          data,
          cache: {
            ...res.cache,
            [url]: data,
          }
        });
      } catch (error) {
        console.error(error);
        setRes({
          isLoading: false,
          isError: true,
          data: [],
        });
      } 
    }

    fetchData();
  }, [request.url, request.params]);

  const { isLoading, isError, data } = res;
  return { isLoading, isError, data, makeRequest };
}
