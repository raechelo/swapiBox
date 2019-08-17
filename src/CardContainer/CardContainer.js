import React, { Component } from 'react';
import Crawl from 'react-star-wars-crawl';
import "react-star-wars-crawl/lib/index.css";
import People from '../People/People';
import Vehicle from '../Vehicle/Vehicle';
import Planet from '../Planet/Planet';
import Species from '../Species/Species';
import Starships from '../Starships/Starships';
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
              { this.props.favorites.map(f => {
              if (f.climate) {
                return (
                  <Planet name={f.name} population={f.population} terrain={f.terrain} residents={f.residents} climate={f.climate} />
                )
              }
                else if (f.model) {
                  return(
                    <Vehicle name={f.name} model={f.model} passengers={f.passengers} class={f.vehicle_class} />
                  )
                }
                else if (f.species) {
                  return(
                    <People name={f.name} species={f.species} homeworld={f.homeworld} homeworldPop={f.homeworldPopulation} />
                  )
                }
                else if (f.director) {
                  return(
                    <Films name={f.title} />
                  )
                }
                else if (f.MGLT) {
                  return(
                    <Starships />
                  )
                }
                else if (f.language) {
                  return(
                    <Species  />
                  )
                }
              } ) 
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