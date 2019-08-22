import React, { Component } from 'react';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import propTypes from 'prop-types';
import { fetchCalls } from '../apiCalls';


class People extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      people: []
    }
  }

  componentDidMount() {
    const peopleUrl = 'https://swapi.co/api/people/';
    return fetchCalls(peopleUrl)
      .then(data => this.setState( { people: data.results, isLoading: false, currentChoice: 'crawl' } ) )
      .then(() => this.fetchHomeworlds(this.state.people))
      .catch(err => { throw new Error(err) } );
  }
  
  fetchHomeworlds = (arr) => {
    let homeworlds = arr.map(p => {
      return fetchCalls(p.homeworld)
        .then(data => this.addHomeworldInfo(data.name, data.population) )
        .catch(err => { throw new Error(err) } )
    })
    this.fetchSpecies(this.state.people);
    return Promise.all(homeworlds)
  }

  addHomeworldInfo = (name, pop) => {
    const addInfo = { homeworld:name, homeworldPopulation: pop }
    const people = this.state.people.map(p => {
      return Object.assign(p, addInfo)
    })
    this.setState( { people } )
  }

  fetchSpecies = (arr) => {
    let species = arr.map(p => {
      return fetchCalls(p.species)
        .then(data => this.addSpeciesInfo(data.name ) )
        .catch(err => { throw new Error(err) } )
    })
    return Promise.all(species)
  }

  addSpeciesInfo = (species) => {
    const addSpecies = {species:species}
    const people = this.state.people.map(p => {
      return Object.assign(p, addSpecies)
    })
    this.setState( { people, isLoading: false } );
  }

  render() {
    const displayPeople = this.state.people.map(person => (
      <Card name={person.name} species={person.species} 
      homeworld={person.homeworld} 
      homeworldPopulation={person.homeworldPopulation} 
      hairColor={person.hair_color} 
      eyeColor={person.eye_color} 
      skinColor={person.skin_color} 
      birthYear={person.birth_year}
      favoriteItem={this.props.favoriteItem}  />
    ))

    return (
     <section className="Card-Container">
       {displayPeople}
       { this.state.isLoading && 
        <Loader /> }
     </section>
    )
  }
}

People.propTypes = {
  p: propTypes.object,
  favoriteItem: propTypes.func,
  name: propTypes.string,
  species: propTypes.string,
  homeworld: propTypes.string,
  homeworldPop: propTypes.string
}

export default People;