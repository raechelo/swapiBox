import React, { Component } from 'react';
import propTypes from 'prop-types';
import { fetchCalls } from '../apiCalls';

class Planet extends Component {
  constructor() {
    super()
    this.state = {
      planets: []
    }
  }

  componentDidMount() {
      const planetUrl = 'https://swapi.co/api/planets/';
      return fetchCalls(planetUrl)
        .then(data => this.setState( { planets: data.results } ) )
        .then(() => this.fetchResidents(this.state.planets) )
        .catch(err => { throw new Error(err) } )
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

  addPlanetInfo = (arr) => {
    let planets = this.state.planets.map((p, i) => {
        return Object.assign(p, { residents: arr[i] } )
    })
    this.setState( { planets } )
  }
  

  render() {
    const displayPlanets = this.state.planets.map(planet => (
      <article className="Card">
        <h4>{planet.name}</h4>
        <h6>Population: {planet.population}</h6>
        <h6>Terrain: {planet.terrain}</h6>
        <h6>Climate: {planet.climate}</h6>
        <h6>Residents: {planet.residents.length === 0 ? ('Unknown') : planet.residents.map(r => ' -' + r) }</h6>
        <h6><i onClick={() => this.props.favoriteItem( planet ) } class="far fa-star"></i></h6>      
      </article>
    ))
    return (
      <section className="Card-Container">
        {displayPlanets}
      </section>
    )
  }
}

Planet.propTypes = {
  p: propTypes.object,
  favoriteItem: propTypes.func,
  name: propTypes.string,
  population: propTypes.string,
  terrain: propTypes.string,
  residents: propTypes.array,
  climate: propTypes.string
}

export default Planet;