import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import Card from '../Card/Card';
import { fetchCalls } from '../apiCalls';
import {filmsUrl} from '../assets/api-links';


export default class Films extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      films: []
    }
  }

  componentDidMount() {
    return fetchCalls(filmsUrl)
      .then(data => data.results.sort((a, b) => a.episode_id - b.episode_id))
      .then(data => this.setState( {films: data, isLoading: false} ) );
  }
  

  render() {
    const displayFilms = this.state.films.map(film => (
      <Card title={film.title} 
      episode_id={film.episode_id} 
      director={film.director} 
      producer={film.producer} 
      release_date={film.release_date}
      favoriteItem={this.props.favoriteItem}
      key={film.title} />
    ));

    return (
      <section className="Card-Container">
        {displayFilms}
       {/* {!this.state.isLoading && <button className="page-btn">Next Page</button>} */}

        {this.state.isLoading && <Loader />}
      </section>
    )
  }
}
