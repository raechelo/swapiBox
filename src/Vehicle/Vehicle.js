import React, { Component } from 'react';
import Card from '../Card/Card';
import propTypes from 'prop-types';
import { fetchCalls } from '../apiCalls';


class Vehicle extends Component {
  constructor() {
    super()
    this.state = {
      vehicles: []
    }
  }

  componentDidMount() {
    const vehicleUrl = 'https://swapi.co/api/vehicles/';
    return fetchCalls(vehicleUrl)
      .then(data => this.setState( {vehicles: data.results} ) )
      .catch(err => { throw new Error(err) } )
  }
  

  render() {
    const displayVehicles = this.state.vehicles.map(vehicle => (
      <Card name={vehicle.name} 
      model={vehicle.model} 
      vehicle_class={vehicle.vehicle_class} 
      passengerCount={vehicle.passengers} 
      crew={vehicle.crew} 
      cost={vehicle.cost_in_credits} />
    ))

    return (
      <section className="Card-Container">
        {displayVehicles}
      </section>
    )
  }
}

Vehicle.propTypes = {
  v: propTypes.object,
  favoriteItem: propTypes.func,
  name: propTypes.string,
  model: propTypes.string,
  passengers: propTypes.number,
  class: propTypes.string
}

export default Vehicle;