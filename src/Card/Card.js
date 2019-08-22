import React from 'react'

export default function Card(props) {
  return (
    <article className="Card">
      {
        props.species && 
        <div>
          <h4>{props.name}</h4>
          <h6>Species: {props.species}</h6>
          <h6>Homeworld: {props.homeworld}</h6>
          <h6>Hair Color: {props.hairColor}</h6>
          <h6>eye Color: {props.eyeColor}</h6>
          <h6>skin Color: {props.skinColor}</h6>
          <h6>Birth year: {props.birthYear}</h6>
        </div>
      }
      {
        props.vehicleClass &&
        <div>
          <h4>{props.name}</h4>
          <h6>Model: {props.model}</h6>
          <h6>Manufacturer: {props.manufacturer}</h6>
          <h6>Class: {props.vehicle_class}</h6>
          <h6>Cost: {props.cost}</h6>
          <h6>Crew Count: {props.crew}</h6>
          <h6>Passenger Count: {props.passengerCount}</h6>
        </div>
      }
      {
        props.director && 
        <div>
          <h4>{props.title}</h4>
          <h6>Episode {props.episode_id}</h6>
          <h6>director: {props.director}</h6>
          <h6>Producer: {props.producer}</h6>
          <h6>Released: {props.release_date}</h6>
        </div>
      }
      {
        props.starshipClass &&
        <div>
          <h4>{props.name}</h4>
          <h6>Model: {props.model}</h6>
          <h6>Manufacturer: {props.manufacturer}</h6>
          <h6>Class: {props.starshipClass}</h6>
          <h6>Hyperdrive rating: {props.hyperdriveRating}</h6>
          <h6>{props.MGLT} Megalight per hour</h6>
          <h6>Cost: {props.cost}</h6>
          <h6>Crew count: {props.crew}</h6>
          <h6>Passenger count: {props.passengerCount}</h6>
        </div>
      }
      {
        props.terrain && 
        <div>
          <h4>{props.name}</h4>
          <h6>Population: {props.population}</h6>
          <h6>Terrain: {props.terrain}</h6>
          <h6>Climate: {props.climate}</h6>
          <h6>Orbital Period (in Days): {props.orbitalPeriod}</h6>
          <h6>Surface Water: {props.surfaceWater}%</h6>
        </div>
      }
      {
        props.designation && 
        <div>
          <h4>{props.name}</h4>
          <h6>Classification: {props.classification}</h6>
          <h6>Designation: {props.designation}</h6>
          <h6>Skin Colors: {props.skinColors}</h6>
          <h6>Hair Colors: {props.hairColors}</h6>
          <h6>Eye Colors: {props.eyeColors}</h6>
          <h6>Homeworld: </h6>
          <h6>Language: {props.language}</h6>
        </div>
      }
      <h6><i onClick={() => props.favoriteItem( props ) } class="far fa-star"></i></h6>
    </article>
  )
}
