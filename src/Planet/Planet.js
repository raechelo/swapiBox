import React from 'react';
import propTypes from 'prop-types';

const Planet = (props) => {
  return (
    <article className="Card">
      <h4>{props.name}</h4>
      <h6>Population: {props.population}</h6>
      <h6>Terrain: {props.terrain}</h6>
      <h6>Climate: {props.climate}</h6>
      <h6>Residents: {props.residents.length === 0 ? ('Unknown') : props.residents.map(r => ' -' + r) }</h6>
      <h6><i onClick={() => props.favoriteItem( props.p ) } class="far fa-star"></i></h6>      
    </article>
  )
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