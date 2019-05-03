import React, { Component } from 'react';
import Crawl from 'react-star-wars-crawl';
import "react-star-wars-crawl/lib/index.css";
import Loader from '../Loader/Loader';
import People from '../People/People'

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
              <People name={p.name} />
              )
            })
          }
      </section>
      )
      case 'planets':
      break;
      case 'vehicles':
      break;
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