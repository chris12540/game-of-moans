import React, { Component } from 'react'
import './App.css'
import GameOfMoansDemo from './GameOfMoansDemo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      showDemo: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ showDemo: false }), 3000)
  }

  render() {
    const { showDemo } = this.state
    return (
      <div>
        {showDemo && <GameOfMoansDemo />}
      </div>
    )
  }
}

export default App
