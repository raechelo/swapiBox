import React, { Component } from 'react';
import { fetchCalls } from '../apiCalls';


export default class Films extends Component {
  constructor() {
    super()
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    const filmsUrl = 'https://swapi.co/api/films';
    return fetchCalls(filmsUrl)
      .then(data => data.results.sort((a, b) => a.episode_id - b.episode_id))
      .then(data => this.setState( {films: data} ) )
      .catch(err => { throw new Error(err) } )
  }
  

  render() {
    const displayFilms = this.state.films.map(film => (
      <Card />
      <article className="Card">
        <h4>{film.title}</h4>
        <h6>Episode {film.episode_id}</h6>
        <h6>director: {film.director}</h6>
        <h6>Producer: {film.producer}</h6>
        <h6>Released: {film.release_date}</h6>
        <h6><i onClick={() => this.props.favoriteItem( film ) } class="far fa-star"></i></h6>
      </article>
    ));

    return (
      <section className="Card-Container">
        {displayFilms}
      </section>
    )
  }
}
