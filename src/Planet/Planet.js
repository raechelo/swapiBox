import React, { Component } from 'react';
import Card from '../Card/Card';
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
      <Card name={planet.name} population={planet.population} terrain={planet.terrain} climate={planet.climate} residents={planet.residents} />
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