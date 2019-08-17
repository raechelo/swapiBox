import React, { Component } from 'react';
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
      <article>
        <h4>Name: {race.name}</h4>
        <h6>Classification: {race.classification}</h6>
        <h6>Designation: {race.designation}</h6>
        <h6>Skin Colors: {race.skin_colors}</h6>
        <h6>Hair Colors: {race.hair_colors}</h6>
        <h6>Eye Colors: {race.eye_colors}</h6>
        <h6>Homeworld: </h6>
        <h6>Language: {race.language}</h6>
        <h6>People: {race.people.map(person => (person))}</h6>
      </article>
    ))
    
    return (
      <section>
        {displaySpecies}
      </section>
    )
  }
}
