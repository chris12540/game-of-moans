import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Character.scss'

export default function Character(props) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  const { id } = props

  function fetchCharacter(characterId) {
    setLoading(true)
    axios.get('https://gameofmoans.com/api/character/' + characterId).then(response => {
      setData(response.data)
    }).then(() => setLoading(false))
  }

  useEffect(() => {
    fetchCharacter(id)
  }, [id])

  return (
    <div className="character">
      {data && <div>
        <h1>{data.name}</h1>
        <div><img src={data.imageUrl} alt={data.name} /></div>
      </div>}
      {loading && <div><em>Loading...</em></div>}
    </div>
  )
}