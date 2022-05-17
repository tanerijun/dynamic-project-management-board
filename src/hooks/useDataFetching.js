import React, { useState, useEffect } from 'react';

function useDataFetching(dataSource) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const data = await fetch(dataSource);
        const result = await data.json();

        if (result) {
          setData(result);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    }

    fetchData();
  }, [dataSource]);

  return [loading, error, data];
}

export default useDataFetching;
