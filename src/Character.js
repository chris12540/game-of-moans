import React, { Component } from 'react'
import axios from './axios'
import './Character.scss'

export default class Character extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      data: null,
    }
  }

  componentDidMount() {
    const { id } = this.props
    
    this.fetchCharacter(id)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.fetchCharacter(this.props.id)
    }
  }

  fetchCharacter(id) {
    this.setState({ loading: true })
    axios.get('https://gameofmoans.com/api/character/' + id).then(response => {
      this.setState({ data: response.data })
    }).then(() => this.setState({ loading: false }))
  }

  render() {
    const { loading, data } = this.state

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
}