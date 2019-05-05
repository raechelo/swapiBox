import React from 'react';

const People = (props) => {
  return (
    <article className="Card">
      <h4>{props.name}</h4>
      <h6>Species: {props.species}</h6>
      <h6>Homeworld: {props.homeworld}</h6>
      <h6>Population: {props.homeworldPop}</h6>
      <h6><i class="far fa-star"></i></h6>
    </article>
  )
}

export default People;