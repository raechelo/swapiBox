import React, { Component } from 'react';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { fetchCalls } from '../apiCalls';

export default class Species extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      species: []
    }
  }

  componentDidMount() {
    const speciesUrl = 'https://swapi.co/api/species';
    return fetchCalls(speciesUrl)
      .then(data => this.setState( {species: data.results, isLoading: false} ) )
      .catch(err => { throw new Error(err) } )
  }
  
  render() {
    const displaySpecies = this.state.species.map(race => (
      <Card name={race.name} 
      classification={race.classification} 
      designation={race.designation}
      skinColors={race.skin_colors} 
      hairColors={race.hair_colors} 
      eyeColors={race.eye_colors} 
      homeworld={race.homeworld} 
      language={race.language} 
      people={race.people}
      favoriteItem={this.props.favoriteItem}  />
    ))

    return (
      <section className="Card-Container">
        {displaySpecies}
        {this.state.isLoading && <Loader />}
      </section>
    )
  }
}
