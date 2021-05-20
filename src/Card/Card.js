import React from 'react'

export default function Card(props) {
  return (
    <article className="Card">
      {
        <div>
          {props.name && <h4>{props.name}</h4>}

          {/* people */}
          {/* {props.species && <h6>Species: {props.species}</h6>} */}
          {props.homeworld && <h6>Homeworld: {props.homeworld}</h6>}
          {props.hairColor && <h6>Hair Color: {props.hairColor}</h6>}
          {props.eyeColor && <h6>Eye Color: {props.eyeColor}</h6>}
          {props.skinColor && <h6>Skin Color: {props.skinColor}</h6>}
          {props.birthYear && <h6>Birth Year: {props.birthYear}</h6>}

          {/* vehicle/starship */}
          {props.model && <h6>Model: {props.model}</h6>}
          {props.manufacturer && <h6>Manufacturer: {props.manufacturer}</h6>}
          {props.vehicleClass && <h6>Vehicle Class: {props.vehicleClass}</h6>}
          {props.cost && <h6>Cost: {props.cost}</h6>}
          {props.crew && <h6>Crew: {props.crew}</h6>}
          {props.passengerCount && <h6>Passenger Count: {props.passengerCount}</h6>}
          {props.starshipClass && <h6>Class: {props.starshipClass}</h6>}
          {props.hyperdriveRating && <h6>Hyperdrive Rating: {props.hyperdriveRating}</h6>}
          {props.MGLT && <h6>{props.MGLT} Megalight Per Hour</h6>}
          
          {/* film */}
          {props.title && <h4>{props.title}</h4>}
          {props.episode_id && <h6>Episode {props.episode_id}</h6>}
          {props.director && <h6>Director: {props.director}</h6>}
          {props.producer && <h6>Producer: {props.producer}</h6>}
          {props.release_date && <h6>Released: {props.release_date}</h6>}

          {/* planet */}
          {props.population && <h6>Population: {props.population}</h6>}
          {props.terrain && <h6>Terrain: {props.terrain}</h6>}
          {props.climate && <h6>Climate: {props.climate}</h6>}
          {props.orbitalPeriod && <h6>Orbital Period (in Days): {props.orbitalPeriod}</h6>}
          {props.surfaceWater && <h6>Surface Water: {props.surfaceWater}%</h6>}

          {/* species */}
          {props.classification && <h6>Classification: {props.classification}</h6>}
          {props.designation && <h6>Designation: {props.designation}</h6>}
          {props.hairColors && <h6>Hair Colors: {props.hairColors}</h6>}
          {props.eyeColors && <h6>Eye Colors: {props.eyeColors}</h6>}
          {props.skinColors && <h6>Skin Colors: {props.skinColors}</h6>}
          {props.language && <h6>Language: {props.language}</h6>}
        </div>
      }
      {/* {
        props.favorite && <h6><i onClick={() => props.favoriteItem(props) } className="fas fa-star"></i></h6>
      }
      {
        !props.favorite && <h6><i onClick={() => props.favoriteItem(props) } className="far fa-star"></i></h6>
      } */}
    </article>
  )
}
