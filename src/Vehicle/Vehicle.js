import React from 'react';
import propTypes from 'prop-types';

const Vehicle = (props) => {
  return (
    <div className="Card">
      <h4>{props.name}</h4>
      <h6>Model: {props.model}</h6>
      <h6>Class: {props.class}</h6>
      <h6>Passenger Count: {props.passengers}</h6>
      <h6><i onClick={() => props.favoriteItem( props.v ) } class="far fa-star"></i></h6>
    </div>
  )
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