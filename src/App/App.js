import React, { Component } from 'react';
import Loader from '../Loader/Loader'
import CardContainer from '../CardContainer/CardContainer';
import Starfield from '../Starfield/Starfield'
import propTypes from 'prop-types';

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

  fetchPeople = () => {
    const peopleUrl = 'https://swapi.co/api/people/';
    fetch(peopleUrl)
      .then(response => response.json())
      .then(data => this.setState( { people: data.results, isLoading: false, currentChoice: 'crawl' } ) )
      .then(() => this.fetchHomeworlds(this.state.people))
      .catch(err => console.log(err));
  }

  fetchHomeworlds = (arr) => {
    let homeworlds = arr.map(p => {
      fetch(p.homeworld)
        .then(response => response.json())
        .then(data => this.addHomeworldInfo(data.name, data.population) )
        .catch(err => console.log(err))
    })
    this.fetchSpecies(this.state.people);
    return Promise.all(homeworlds)
  }

  addHomeworldInfo = (name, pop) => {
    const addInfo = {homeworld:name, homeworldPopulation: pop}
    const people = this.state.people.map(p => {
      return Object.assign(p, addInfo)
    })
    this.setState( { people } )
  }

  fetchSpecies = (arr) => {
    let species = arr.map(p => {
      fetch(p.species)
        .then(response => response.json())
        .then(data => this.addSpeciesInfo(data.name))
        .catch(err => console.log(err))
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

  componentDidMount() {
    const movieUrl = 'https://swapi.co/api/films/';
    fetch(movieUrl)
      .then(response => response.json())
      .then(data => data.results.sort(() => 0.5 - Math.random()).pop()  )
      .then(movie => this.setState( { movie } ) )
    this.fetchPeople();
    this.fetchVehicles();
    this.fetchPlanets();
  }

  fetchVehicles = () => {
    const vehicleUrl = 'https://swapi.co/api/vehicles/';
    fetch(vehicleUrl)
      .then(response => response.json())
      .then(data => this.setState( {vehicles: data.results} ) )
      .catch(err => console.log(err))
  }

  fetchPlanets = () => {
    const planetUrl = 'https://swapi.co/api/planets/';

    fetch(planetUrl)
      .then(response => response.json())
      .then(data => this.setState( { planets: data.results } ) )
      .catch(err => console.log(err))
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
      case 'favorites':
        this.setState( { currentChoice: 'favorites' } )
      break;
      default:
        this.setState( { currentChoice: 'crawl' } )
    }
  }


  //give button own component and do an isClicked state with ternary & inline styling to denote active state buttons

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
          <CardContainer rendered={this.state} />
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