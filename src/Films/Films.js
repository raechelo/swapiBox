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
      .then(data => this.setState( {films: data.results} ) )
      .catch(err => { throw new Error(err) } )
  }
  

  render() {
    const displayFilms = this.state.films.map(film => (
      <article className="Card">
        <h4>{film.name}</h4>
        <h6>Episode: {film.episode_id}</h6>
        <h6>Producers: {film.producers}</h6>
        <h6>Released: {film.release_date}</h6>
        <h6>Characters: </h6>
        <h6>Planets: </h6>
        <h6>Starships: </h6>
        <h6>Vehicle: </h6>
        <h6>Species: </h6>
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
