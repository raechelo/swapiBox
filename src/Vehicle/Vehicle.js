import React from 'react';

const Vehicle = (props) => {
  return (
    <div className="Card">
      <h4>{props.name}</h4>
      <h6>Model: {props.model}</h6>
      <h6>Class: {props.class}</h6>
      <h6>Passenger Count: {props.passengers}</h6>
      <h6><i class="far fa-star"></i></h6>
    </div>
  )
}

export default Vehicle;