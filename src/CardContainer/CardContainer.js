import React, { Component } from 'react';
import Crawl from 'react-star-wars-crawl';
import "react-star-wars-crawl/lib/index.css";
import Loader from '../Loader/Loader';
import People from '../People/People';
import Vehicle from '../Vehicle/Vehicle';
import Planet from '../Planet/Planet'

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
                <People name={p.name} species={p.species} homeworld={p.homeworld} homeworldPop={p.homeworldPopulation} />
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
                <Planet name={p.name} population={p.population} terrain={p.terrain} residents={p.residents} climate={p.climate} />
              )
            })}
          </section>
        )
      case 'vehicles':
        return (
          <section className="Card-Container">
            {this.props.rendered.vehicles.map(v => {
              return (
                <Vehicle name={v.name} model={v.model} passengers={v.passengers} class={v.vehicle_class} />
              )
            })}
          </section>
        )
      case 'favorites':
      if (this.props.rendered.favorites.length === 0) {
        return (<h3 className="fave">Favorite Some Items!</h3>)
      }
      else {
        return (
          <section className="Card-Container">
              { this.props.rendered.vehicles.map(v => {
              return (
                <Vehicle name={v.name} model={v.model} passengers={v.passengers} class={v.vehicle_class} />
                )
              } ) 
              }
            }
          </section>
        )
      }
      case 'crawl':
        return (<Crawl 
          text={this.props.rendered.movie.opening_crawl}
          subtitle={this.props.rendered.movie.release_date}
        />)
      default:
        return <Loader />
    }
  }
}

export default CardContainer;