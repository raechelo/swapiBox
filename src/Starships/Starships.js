import React, { Component } from 'react';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { fetchCalls } from '../apiCalls';
import {starshipsUrl} from '../assets/api-links';


export default class Starships extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      starships: []
    }
  }

  componentDidMount() {
    return fetchCalls(starshipsUrl)
      .then(data => this.setState( { starships: data.results, isLoading: false } ) );
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
      favoriteItem={this.props.favoriteItem}
      key={starship.name} />
    ))

    return (
      <section className="Card-Container">
        {displayStarships}
       {/* {!this.state.isLoading && <button className="page-btn">Next Page</button>} */}

        {this.state.isLoading && <Loader />}
      </section>
    )
  }
}
