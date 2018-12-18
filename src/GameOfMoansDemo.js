import React, { Component, createRef } from 'react'
import Character from './Character'
import './GameOfMoansDemo.scss'

export default class GameOfMoansDemo extends Component {
  constructor() {
    super()
    this.state = {
      currentId: 0,
      width: 250,
    }
    this.activateWatchMouse = this.activateWatchMouse.bind(this)
    this.deactivateWatchMouse = this.deactivateWatchMouse.bind(this)
    this.myRef = createRef()
    this.setWidth = event => {
      const left = this.myRef.current.getBoundingClientRect().left
      this.setState({ width: event.x - left })
    }
  }

  activateWatchMouse() {
    window.addEventListener('mousemove', this.setWidth)
  }

  deactivateWatchMouse() {
    window.removeEventListener('mousemove', this.setWidth);
  }
  
  render() {
    const { currentId, width } = this.state
    
    return (
      <div ref={this.myRef} className="game-of-moans-demo">
        <header>
          <div><img src="/images/game_of_moans.png" alt="Game of Moans" /></div>
          <div>Oh JavaScript... ¯\_(ツ)_/¯</div>
        </header>
        <main>
          <div className="controller" style={{ width }}>
            <h2>Current ID: {currentId}</h2>
            <div className="actions">
              <button onClick={() => this.setState({ currentId: currentId - 1 })}>-</button>
              <button onClick={() => this.setState({ currentId: currentId + 1 })}>+</button>
            </div>
          </div>
          <div
            className="divider"
            onMouseDown={this.activateWatchMouse}
            onMouseUp={this.deactivateWatchMouse}
          ></div>
          {!!currentId && <div className="character-container"><Character id={currentId} /></div>}
        </main>
      </div>
    )
  }
}