import React, { Component } from 'react';
import { fetchCalls } from '../apiCalls';


export default class Starships extends Component {
  constructor() {
    super()
    this.state = {
      starships: []
    }
  }

  componentDidMount() {
    const starshipsUrl = 'https://swapi.co/api/starships';
    return fetchCalls(starshipsUrl)
      .then(data => this.setState( { starships: data.results } ) )
      .catch(err => {throw new Error(err) } )
  }
  

  render() {
    const displayStarships = this.state.starships.map(starship => (
      <article>
        <h4>Name: {starship.name}</h4>
        <h6>Model: {starship.model}</h6>
        <h6>Manufacturer: {starship.manufacturer}</h6>
        <h6>Crew count: {starship.crew}</h6>
        <h6>Passenger count: {starship.passengers}</h6>
        <h6>Hyperdrive rating: {starship.hyperdrive.rating}</h6>
        <h6>Class: {starship.starship_class}</h6>
        <h6>Megalight per hour: {starship.mglt}</h6>
      </article>
    ))

    return (
      <section>
        {displayStarships}
      </section>
    )
  }
}
