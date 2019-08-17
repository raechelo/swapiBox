import React, { Component } from 'react';
import Card from '../Card/Card';
import { fetchCalls } from '../apiCalls';

export default class Species extends Component {
  constructor() {
    super()
    this.state = {
      species: []
    }
  }

  componentDidMount() {
    const speciesUrl = 'https://swapi.co/api/species';
    return fetchCalls(speciesUrl)
      .then(data => this.setState( {species: data.results} ) )
      .catch(err => { throw new Error(err) } )
  }
  
  render() {
    const displaySpecies = this.state.species.map(race => (
      <Card name={race.name} classification={race.classification} designation={race.designation} skin_colors={race.skin_colors} hair_colors={race.hair_colors} eye_colors={race.eye_colors} homeworld={race.homeworld} language={race.language} people={race.people} />
    ))

    return (
      <section className="Card-Container">
        {displaySpecies}
      </section>
    )
  }
}
