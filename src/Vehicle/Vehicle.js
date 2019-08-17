import React, { Component } from 'react';
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
      <article className="Card">
        <h4>{vehicle.name}</h4>
        <h6>Model: {vehicle.model}</h6>
        <h6>Class: {vehicle.class}</h6>
        <h6>Passenger Count: {vehicle.passengers}</h6>
        <h6><i onClick={() => this.props.favoriteItem( vehicle ) } class="far fa-star"></i></h6>
      </article>
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