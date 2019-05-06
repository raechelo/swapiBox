import React, { Component } from 'react';
import Crawl from 'react-star-wars-crawl';
import "react-star-wars-crawl/lib/index.css";
import Loader from '../Loader/Loader';
import People from '../People/People';
import Vehicle from '../Vehicle/Vehicle';
import Planet from '../Planet/Planet';
import propTypes from 'prop-types';

class CardContainer extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    switch(this.props.rendered.currentChoice) {
      case 'people':
        return (
        <section className="Card-Container">
          {this.props.rendered.people.map(p => {
            return (
                <People p={p} favoriteItem={this.props.favoriteItem} name={p.name} species={p.species} homeworld={p.homeworld} homeworldPop={p.homeworldPopulation} />
                )
              })
            }
        </section>
        )
      case 'planets':
        return (
          <section className="Card-Container">
            {this.props.rendered.planets.map(p => {
              return (
                <Planet p={p} favoriteItem={this.props.favoriteItem} name={p.name} population={p.population} terrain={p.terrain} residents={p.residents} climate={p.climate} />
              )
            })}
          </section>
        )
      case 'vehicles':
        return (
          <section className="Card-Container">
            {this.props.rendered.vehicles.map(v => {
              return (
                <Vehicle v={v} favoriteItem={this.props.favoriteItem} name={v.name} model={v.model} passengers={v.passengers} class={v.vehicle_class} />
              )
            })}
          </section>
        )
      case 'favorites':
      if (this.props.rendered.favorites.length === 0) {
        return (<h3 className="fave">Favorite Some Items!</h3>)
      }
       else {
       return ( <section className="Card-Container">
              { this.props.rendered.favorites.map(f => {
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
                    <People name={f.name} sfecies={f.species} homeworld={f.homeworld} homeworldPop={f.homeworldPopulation} />
                  )
                }
              } ) 
              }
          </section>
        )
       }
      case 'crawl':
        return (<Crawl 
          subTitle={this.props.rendered.movie.title}
          title={this.props.rendered.movie.release_date}
          text={this.props.rendered.movie.opening_crawl}
        />)
      default:
        return <Loader />
    }
  }
}

CardContainer.propTypes = {
  rendered: propTypes.object,
  favoriteItem: propTypes.func
}

export default CardContainer;