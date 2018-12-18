import React, { Component } from 'react'
import Character from './Character'
import './GameOfMoansDemo.scss'

export default class GameOfMoansDemo extends Component {
  constructor() {
    super()
    this.state = {
      currentId: 0
    }
  }
  
  render() {
    const { currentId } = this.state
    
    return (
      <div className="game-of-moans-demo">
        <div className="controller">
          <div>Current ID: {currentId}</div>
          <div className="actions">
            <button onClick={() => this.setState({ currentId: currentId - 1 })}>-</button>
            <button onClick={() => this.setState({ currentId: currentId + 1 })}>+</button>
          </div>
        </div>
        {!!currentId && <Character id={currentId} />}
      </div>
    )
  }
}