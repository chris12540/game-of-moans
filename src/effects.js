import { useState, useEffect } from 'react';
import React, { Component } from 'react';
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

// Compare the above to the same thing using a higher order component (HOC).
// To use, you'd need to use props, rather than the simplicity of local variables.
function dataFetcher(url) {
  return function(WrappedComponent) {
    return class extends Component {
      constructor() {
        super();
        this.state = {
          data: null,
          isLoading: true,
          error: null
        }
      }

      componentDidMount() {
        axios.get(url).then(response => {
          this.setState({ data: response.data })
        })
          .catch(error => this.setState({ error }))
          .then(() => this.setState({ isLoading: false }));
      }

      render() {
        const { data, isLoading, error } = this.state;

        return <WrappedComponent
          data={data}
          isLoading={isLoading}
          error={error}
        />
      }
    }
  }
}