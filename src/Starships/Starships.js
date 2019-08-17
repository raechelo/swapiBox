import React, { Component } from 'react';
import Card from '../Card/Card';
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
      <Card name={starship.name} 
      model={starship.model} 
      manufacturer={starship.manufacturer} 
      starship_class={starship.starship_class} 
      passengerCount={starship.passengers} 
      hyperdrive_rating={starship.hyperdrive_rating}
      MGLT={starship.MGLT}  />
    ))

    return (
      <section className="Card-Container">
        {displayStarships}
      </section>
    )
  }
}
