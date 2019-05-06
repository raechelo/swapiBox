import React from 'react';
import propTypes from 'prop-types';

const People = (props) => {
  return (
    <article className="Card">
      <h4>{props.name}</h4>
      <h6>Species: {props.species}</h6>
      <h6>Homeworld: {props.homeworld}</h6>
      <h6>Homeworld Population: {props.homeworldPop}</h6>
      <h6><i onClick={() => props.favoriteItem( props.p ) } class="far fa-star"></i></h6>
    </article>
  )
}

People.propTypes = {
  p: propTypes.object,
  favoriteItem: propTypes.func,
  name: propTypes.string,
  species: propTypes.string,
  homeworld: propTypes.string,
  homeworldPop: propTypes.string
}

export default People;