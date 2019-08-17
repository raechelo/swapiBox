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
      <article className="Card">
        <h4>Name: {starship.name}</h4>
        <h6>Model: {starship.model}</h6>
        <h6>Manufacturer: {starship.manufacturer}</h6>
        <h6>Class: {starship.starship_class}</h6>
        <p>Crew count: {starship.crew}</p>
        <p>Passenger count: {starship.passengers}</p>
        <p>Hyperdrive rating: {starship.hyperdrive_rating}</p>
        <p>{starship.MGLT} Megalight per hour</p>
        <h6><i onClick={() => this.props.favoriteItem( starship ) } class="far fa-star"></i></h6>
      </article>
    ))

    return (
      <section className="Card-Container">
        {displayStarships}
      </section>
    )
  }
}
