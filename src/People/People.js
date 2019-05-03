import React from 'react';

const People = (props) => {
  return (
    <div className="People">
      <h4>{props.name}</h4>
      <h6>char homeworld</h6>
      <h6>homeworld population</h6>
      <h6>char species</h6>
    </div>
  )
}

export default People;