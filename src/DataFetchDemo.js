import React, { useState } from 'react';
import { useDataFetcher } from './effects';

export default function DataFetchDemo() {
  const [pageNum, setPageNum] = useState(0);
  const [data, isLoading, error, doFetch] = useDataFetcher('https://swapi.co/api/people?page=' + pageNum);

  return <div>
    <h1>useDataFetcher Demo</h1>
    <div>Page {pageNum}</div>
    {isLoading
      ? <div>Loading...</div>
      : error
        ? <div><strong>There was an error!</strong> {error.message}</div>
        : <div>
            <button onClick={() => {
              setPageNum(pageNum - 1);
              doFetch();
            }}>Previous page</button>
            <button onClick={() => {
              setPageNum(pageNum + 1);
              doFetch();
            }}>Next page</button>
            <div></div>
            {data && data.results.map(person => <div key={person.url}>
              <div>Name: {person.name}</div>
            </div>)}
          </div>
    }
  </div>
}
