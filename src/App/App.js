import React, { Component } from 'react';
import Loader from '../Loader/Loader'
import CardContainer from '../CardContainer/CardContainer';
import Starfield from '../Starfield/Starfield'
import propTypes from 'prop-types';
import { fetchCalls } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      movie: {},
      people: [],
      planets: [], 
      vehicles: [],
      favorites: [],
      currentChoice: '',
    }
  }

  componentDidMount() {
    const movieUrl = 'https://swapi.co/api/films/';
    return fetchCalls(movieUrl)
      .then(data => data.results.sort(() => 0.5 - Math.random()).pop()  )
      .then(movie => this.setState( { movie } ) )
      .then(() =>  this.fetchPeople())
      .then(() => this.fetchVehicles())
      .then(() => this.fetchPlanets())
  }

  handleClick = (e) => {
    switch(e.target.textContent) {
      case 'people' :
        this.setState( { currentChoice: 'people' } )
      break;
      case 'vehicles':
        this.setState( { currentChoice: 'vehicles' } )
      break;
      case 'planets':
        this.setState( { currentChoice: 'planets' } )
      break;
      case 'crawl':
        this.setState( { currentChoice: 'crawl' } )
      break;
      default:
        this.setState( { currentChoice: 'favorites' } )
    }
  }

  fetchPeople = () => {
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
    this.setState( {people } );
  }

  fetchVehicles = () => {
    const vehicleUrl = 'https://swapi.co/api/vehicles/';
    return fetchCalls(vehicleUrl)
      .then(data => this.setState( {vehicles: data.results} ) )
      .catch(err => { throw new Error(err) } )
  }

  addPlanetInfo = (arr) => {
    let planets = this.state.planets.map((p, i) => {
        return Object.assign(p, { residents: arr[i] } )
    })
    this.setState( { planets } )
  }

  fetchResidents = (arr) => {
    let residents = arr.map(p => {
      return p.residents.reduce((acc, r) => {
        fetchCalls(r)
        .then(data => acc.push( data.name ) )
        .catch(err => { throw new Error(err) } ) 
        return acc
      }, [] )
    })
    this.addPlanetInfo(residents);
    return Promise.all(residents);
  }

  fetchPlanets = () => {
    const planetUrl = 'https://swapi.co/api/planets/';
    return fetchCalls(planetUrl)
      .then(data => this.setState( { planets: data.results } ) )
      .then(() => this.fetchResidents(this.state.planets) )
      .catch(err => { throw new Error(err) } )
  }

  favoriteItem = (item) => {
    if (!this.state.favorites.includes(item)) {
      const { favorites } = this.state;
      this.setState( { favorites: [...favorites, item] } );
    } else {
      this.removeFavorites(item.name)
    }
  }

  removeFavorites = (name) => {
    const newFaves = this.state.favorites.filter(f => f.name !== name)
    this.setState( { favorites: newFaves } )
  }

  render() {

    return (
      <div className="App">
      <Starfield className="Starfield" />
        <h1 className="header"><img src="https://fontmeme.com/permalink/190502/5dfed28f102f9d81a68ccee2d51fa26a.png" alt="swapiboxi" border="0" />
        </h1>
        <nav>
          <button className="people" onClick={this.handleClick} >people</button>
          <button className="planets" onClick={this.handleClick} >planets</button>
          <button className="vehicles" onClick={this.handleClick} >vehicles</button>
          <button className="favorites" onClick={this.handleClick} >favorites<span className="fave-count">{this.state.favorites.length}</span></button>
        </nav>
        {
          this.state.isLoading === true ? 
          <Loader /> : 
          <CardContainer rendered={this.state} favoriteItem={this.favoriteItem} />
        }
      </div>
    );
  }
}



App.protoTypes = {
  people: propTypes.array,
  isLoading: propTypes.bool,
  movie: propTypes.objct,
  planets: propTypes.array,
  vehicles: propTypes.array,
  favorites: propTypes.array,
  currentChoice: propTypes.string
}


export default App;