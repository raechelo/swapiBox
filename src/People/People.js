import React, { Component } from 'react';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import propTypes from 'prop-types';
import { fetchCalls } from '../apiCalls';
import {peopleUrl} from '../assets/api-links';


class People extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      people: []
    }
  }

  componentDidMount() {
    return fetchCalls(peopleUrl)
      .then(people => this.setState({people: people.results}))
      .then(() => this.fetchHomeworlds());
  }
  
  
  fetchHomeworlds = () => {
    this.state.people.map(person => {
      fetchCalls(person.homeworld)
        .then(data =>  this.addHomeworldInfo(data.name, person))
        .then(() => this.setState({ isLoading: false}))
    });
  }

  addHomeworldInfo = (homeworld, person) => {
    const updatedPerson = { ...person, homeworld };
    const filteredPeople = this.state.people.filter(person => person.name !== updatedPerson.name);
    const people = [...filteredPeople, updatedPerson];
    this.setState({ people });
  }

  fetchSpecies = () => {
    this.state.people.map(person => {
      if (person.species.length) {
        return fetchCalls(person.species)
          .then(species => this.addSpeciesInfo(species.name, person) );
      }
    })
  }

  addSpeciesInfo = (species, person) => {
    const updatedPerson = {...person, species};
    const filteredPeople = this.state.people.filter(person => person.name !== updatedPerson.name);
    const people = [...filteredPeople, updatedPerson];
    this.setState( { people, isLoading: false } );
  }

  render() {
    const displayPeople = this.state.people.map(person => (
      <Card name={person.name}
      species={person.species} 
      homeworld={person.homeworld} 
      hairColor={person.hair_color} 
      eyeColor={person.eye_color} 
      skinColor={person.skin_color} 
      birthYear={person.birth_year}
      favoriteItem={this.props.favoriteItem}
      key={person.name} />
    ))

    return (
     <section className="Card-Container">
       {!this.state.isLoading && displayPeople}
       {/* {!this.state.isLoading && <button className="page-btn">Next Page</button>} */}
       { this.state.isLoading && <Loader /> }
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