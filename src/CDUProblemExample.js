import React, { Component } from 'react';
import './CDUProblemExample.css';

const delays = [
  0,
  500,
  3000
];

function getProfile(id) {
  return new Promise(resolve => {
    // The id is just milliseconds
    const ms = id;
    setTimeout(() => {
      if (id === delays[0]) {
        resolve({ id, name: 'Joe'});
      } else {
        resolve({ id, name: 'Jane' });
      }
    }, ms);
  });
}

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: null
    }
  }

  componentDidMount() {
    this.fetchProfile()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.profileId !== prevProps.profileId) {
      this.fetchProfile();
    }
  }

  fetchProfile() {
    getProfile(this.props.profileId).then(data => {
      this.setState({ profile: data });
    })
  }

  render() {
    if (!this.state.profile) {
      return 'Loading profile ' + this.props.profileId
    }

    const { profile: { id, name } } = this.state
    
    return (
      <div>
        <h1>Profile</h1>
        <div>ID: {id}</div>
        <div>Name: {name}</div>
      </div>
    )
  }
}

export default class CDUProblemExample extends Component {
  constructor() {
    super();
    this.state = {
      selectedDelay: delays[0]
    }
  }
  
  render() {
    const { selectedDelay } = this.state;
    
    return (
      <div>
        <h1>componentDidUpdate Problem Example</h1>
        <div className="cdupe-layout">
          <div className="list">
            <header><strong>Select a delay</strong></header>
            <div>Selected delay: {selectedDelay}</div>
            {delays.map(x => <div
              key={x}
              className="item"
              onClick={() => this.setState({ selectedDelay: x })}
            >{x} ms</div>)}
          </div>
          <div className="detail">
            {selectedDelay
              ? <Profile profileId={selectedDelay} />
              : 'Select a non-zero delay...'
            }
          </div>
        </div>
      </div>
    );
  }
}