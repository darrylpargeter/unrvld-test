import { useState, useEffect } from 'react';

export default function useEndpoint(req) {
  if (!req?.url) throw new Error('useEndpoint needs a vaild url');

  const [res, setRes] = useState({
    isLoading: false,
    isError: false,
    data: [],
  });

  const _buildQueryString = (params) => Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const _buildUrl = (req) => `${req.url}?${_buildQueryString(req.params)}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setRes({
          isLoading: true,
          isError: false,
          data: [],
        });

        const url = _buildUrl(req);

        const rawData = await fetch(url);
        const data = await rawData.json();

        setRes({
          isLoading: false,
          isError: false,
          data,
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
  }, [req.url, req.params]);

  return res;
}
