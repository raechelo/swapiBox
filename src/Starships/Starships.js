import React, { Component } from 'react';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { fetchCalls } from '../apiCalls';


export default class Starships extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      starships: []
    }
  }

  componentDidMount() {
    const starshipsUrl = 'https://swapi.co/api/starships';
    return fetchCalls(starshipsUrl)
      .then(data => this.setState( { starships: data.results, isLoading: false } ) )
      .catch(err => {throw new Error(err) } )
  }
  

  render() {
    const displayStarships = this.state.starships.map(starship => (
      <Card name={starship.name} 
      model={starship.model} 
      manufacturer={starship.manufacturer} 
      starshipClass={starship.starship_class} 
      passengerCount={starship.passengers} 
      hyperdriveRating={starship.hyperdrive_rating}
      MGLT={starship.MGLT} 
      cost={starship.cost_in_credits}
      favoriteItem={this.props.favoriteItem}  />
    ))

    return (
      <section className="Card-Container">
        {displayStarships}
       {!this.state.isLoading && <button class="page-btn">Next Page</button>}

        {this.state.isLoading && <Loader />}
      </section>
    )
  }
}
