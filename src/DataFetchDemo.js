import React from 'react';
import { useDataFetcher } from './effects';

export default function DataFetchDemo() {
  const [data, isLoading] = useDataFetcher('https://swapi.co/api/people');

  return <div>
    <h1>useDataFetcher Demo</h1>
    {isLoading
      ? <div>Loading...</div>
      : <div>
          {data.results.map(person => <div key={person.url}>
            <div>Name: {person.name}</div>
        </div>)}
      </div>
    }
  </div>
}

// export default function DataFetchDemo() {
//   const [data, isLoading, error] = useDataFetcher('https://swapi.co/api/people');

//   return <div>
//     <h1>useDataFetcher Demo</h1>
//     {isLoading
//       ? <div>Loading...</div>
//       : error
//         ? <div><strong>There was an error!</strong> {error.message}</div>
//         : <div>
//             {data.results.map(person => <div key={person.url}>
//               <div>Name: {person.name}</div>
//             </div>)}
//           </div>
//     }
//   </div>
// }
