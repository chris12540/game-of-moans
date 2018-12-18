import React, { useState, useEffect, useRef } from 'react'
import Character from './Character'
import './GameOfMoansDemo.scss'

export default function GameOfMoansDemo() {
  const [currentId, setCurrentId] = useState(0)
  const [width, setWidth] = useState(250)
  const [isWatchingMouse, setIsWatchingMouse] = useState(false)
  const myRef = useRef()
  const watchMouse = event => {
    const left = myRef.current.getBoundingClientRect().left
    setWidth(event.x - left)
  }

  useEffect(() => {
    if (isWatchingMouse) {
      window.addEventListener('mousemove', watchMouse)
    }

    return () => {
      window.removeEventListener('mousemove', watchMouse)
    }
  }, [isWatchingMouse])

  return (
    <div ref={myRef} className="game-of-moans-demo">
      <header>
        <div><img src="/images/game_of_moans.png" alt="Game of Moans" /></div>
        <div>Oh JavaScript... ¯\_(ツ)_/¯</div>
      </header>
      <main>
        <div className="controller" style={{ width }}>
          <h2>Current ID: {currentId}</h2>
          <div className="actions">
            <button onClick={() => setCurrentId(currentId - 1)}>-</button>
            <button onClick={() => setCurrentId(currentId + 1)}>+</button>
          </div>
        </div>
        <div
          className="divider"
          onMouseDown={() => setIsWatchingMouse(true)}
          onMouseUp={() => setIsWatchingMouse(false)}
        ></div>
        {!!currentId && <Character id={currentId} />}
      </main>
    </div>
  )
}