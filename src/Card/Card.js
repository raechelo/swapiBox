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
          <h6>Hair Color: {props.hair_color}</h6>
          <h6>eye Color: {props.eye_color}</h6>
          <h6>skin Color: {props.skin_color}</h6>
          <h6>Birth year: {props.birth_year}</h6>
        </div>
      }
      {
        props.vehicle_class &&
        <div>
          <h4>{props.name}</h4>
          <h6>Model: {props.model}</h6>
          <h6>Class: {props.vehicle_class}</h6>
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
        props.starship_class &&
        <div>
          <h4>Name: {props.name}</h4>
          <h6>Model: {props.model}</h6>
          <h6>Manufacturer: {props.manufacturer}</h6>
          <h6>Class: {props.starship_class}</h6>
          <h6>Hyperdrive rating: {props.hyperdrive_rating}</h6>
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
          <h6>Residents: {props.residents}</h6>
        </div>
      }
      {
        props.designation && 
        <div>
          <h4>{props.name}</h4>
          <h6>Classification: {props.classification}</h6>
          <h6>Designation: {props.designation}</h6>
          <h6>Skin Colors: {props.skin_colors}</h6>
          <h6>Hair Colors: {props.hair_colors}</h6>
          <h6>Eye Colors: {props.eye_colors}</h6>
          <h6>Homeworld: </h6>
          <h6>Language: {props.language}</h6>
        </div>
      }
      {/* <h6><i onClick={() => props.favoriteItem( props ) } class="far fa-star"></i></h6> */}
    </article>
  )
}
