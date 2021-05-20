import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import Card from '../Card/Card';
import propTypes from 'prop-types';
import { fetchCalls } from '../apiCalls';
import { planetUrl } from '../assets/api-links';

class Planet extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      planets: []
    }
  }

  componentDidMount() {
      return fetchCalls(planetUrl)
        .then(data => this.setState( { planets: data.results } ) )
        .then(() => this.fetchResidents(this.state.planets) );
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
    this.setState( { planets, isLoading: false } )
  }
  

  render() {
    const displayPlanets = this.state.planets.map(planet => (
      <Card name={planet.name} 
      population={planet.population} 
      terrain={planet.terrain} 
      climate={planet.climate}
      residents={planet.residents}
      orbitalPeriod={planet.orbital_period}
      surfaceWater={planet.surface_water}
      favoriteItem={this.props.favoriteItem}
      key={planet.name} />
    ))

    return (
      <section className="Card-Container">
        {displayPlanets}
       {/* {!this.state.isLoading && <button className="page-btn">Next Page</button>} */}
        {this.state.isLoading && <Loader />}
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