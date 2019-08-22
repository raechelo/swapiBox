import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import Card from '../Card/Card';
import { fetchCalls } from '../apiCalls';


export default class Films extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      films: []
    }
  }

  componentDidMount() {
    const filmsUrl = 'https://swapi.co/api/films';
    return fetchCalls(filmsUrl)
      .then(data => data.results.sort((a, b) => a.episode_id - b.episode_id))
      .then(data => this.setState( {films: data, isLoading: false} ) )
      .catch(err => { throw new Error(err) } )
  }
  

  render() {
    const displayFilms = this.state.films.map(film => (
      <Card title={film.title} 
      episode_id={film.episode_id} 
      director={film.director} 
      producer={film.producer} 
      release_date={film.release_date}
      favoriteItem={this.props.favoriteItem}  />
    ));

    return (
      <section className="Card-Container">
        {displayFilms}
       {!this.state.isLoading && <button class="page-btn">Next Page</button>}

        {this.state.isLoading && <Loader />}
      </section>
    )
  }
}
