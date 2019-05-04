import React from 'react';

const Planet = (props) => {
  return (
    <article className="Card">
      <h4>{props.name}</h4>
      <h6>Population: {props.population}</h6>
      <h6>Terrain: {props.terrain}</h6>
      <h6>Climate: {props.climate}</h6>
      <h6>Residents: {props.residents}</h6>
      <h6><i class="far fa-star"></i></h6>      
    </article>
  )
}

export default Planet;