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
        <header>
          <div><img src="/images/game_of_moans.png" alt="Game of Moans" /></div>
          <div>Oh JavaScript... ¯\_(ツ)_/¯</div>
        </header>
        <main>
          <div className="controller">
            <h2>Current ID: {currentId}</h2>
            <div className="actions">
              <button onClick={() => this.setState({ currentId: currentId - 1 })}>-</button>
              <button onClick={() => this.setState({ currentId: currentId + 1 })}>+</button>
            </div>
          </div>
          {!!currentId && <Character id={currentId} />}
        </main>
      </div>
    )
  }
}