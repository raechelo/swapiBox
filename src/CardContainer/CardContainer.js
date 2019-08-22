import React, { Component } from 'react';
import Crawl from 'react-star-wars-crawl';
import "react-star-wars-crawl/lib/index.css";
import People from '../People/People';
import Vehicle from '../Vehicle/Vehicle';
import Planet from '../Planet/Planet';
import Species from '../Species/Species';
import Starships from '../Starships/Starships';
import Card from '../Card/Card';
import Films from '../Films/Films';
import propTypes from 'prop-types';

class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch(this.props.currentChoice) {
      case 'people':
        return <People favoriteItem={this.props.favoriteItem}  /> 
      case 'planets':
        return <Planet favoriteItem={this.props.favoriteItem}  />
      case 'vehicles':
        return <Vehicle favoriteItem={this.props.favoriteItem}  />
      case 'species':
        return <Species favoriteItem={this.props.favoriteItem}  />
      case 'starships':
        return <Starships favoriteItem={this.props.favoriteItem}  />
      case 'films':
        return <Films favoriteItem={this.props.favoriteItem} />
      case 'favorites':
        if (this.props.favorites.length === 0) {
          return (<h3 className="fave">Favorite Some Items!</h3>)
        }
       else {
       return ( <section className="Card-Container">
              { this.props.favorites.map(fave => (
                <Card 
                name={fave.name} 
                title={fave.title}
                species={fave.species}
                homeworld={fave.homeworld}
                population={fave.population}
                terrain={fave.terrain}
                climate={fave.climate}
                residents={fave.residents}
                vehicle_class={fave.vehicle_class}
                starship_class={fave.starship_class}
                model={fave.model}
                manufacturer={fave.manufacturer}
                hyperdrive_rating={fave.hyperdrive_rating}
                MGLT={fave.MGLT}
                cost={fave.cost}
                crew={fave.crew}
                passengerCount={fave.passengerCount}
                classification={fave.classification}
                designation={fave.designation}
                skin_colors={fave.skin_colors} 
                hair_colors={fave.hair_colors} 
                eye_colors={fave.eye_colors} 
                homeworld={fave.homeworld} 
                language={fave.language} 
                people={fave.people}
                episode_id={fave.episode_id}
                director={fave.director}
                producer={fave.producer}
                release_date={fave.release_date} />
                ))
              }
          </section>
        )
       }
      default:
        return (<Crawl 
          subTitle={this.props.movie.title}
          title={this.props.movie.release_date}
          text={this.props.movie.opening_crawl}
        />)
    }
  }
}

CardContainer.propTypes = {
  rendered: propTypes.object,
  favoriteItem: propTypes.func
}

export default CardContainer;