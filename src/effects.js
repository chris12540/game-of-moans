import { useState, useEffect } from 'react';
import axios from 'axios';

export function useDataFetcher(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url).then(response => {
      setData(response.data);
    })
      .catch(setError)
      .then(() => setIsLoading(false))
  }, []);
  
  return [data, isLoading, error];
}
