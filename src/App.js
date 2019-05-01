import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import People from './People/People';
import Loader from './Loader/Loader'
import CardContainer from './CardContainer/CardContainer';
import Starfield from './Starfield/Starfield'
import Crawl from './Crawl/Crawl'

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      isLoading: true,
      movie: {}
    }
  }

  fetchFilms = () => {
    const movieUrl = 'https://swapi.co/api/films/';
    fetch(movieUrl)
      .then(response => response.json())
      .then(data => data.results.sort(() => 0.5 - Math.random()).pop()  )
      .then(movie => this.setState( {movie} ) )
  }

  componentDidMount() {
    const peopleUrl = 'https://swapi.co/api/people/';
    fetch(peopleUrl)
      .then(response => response.json())
      .then(data => this.setState( { people: data.results, isLoading: false } ) )
      .then(data => this.fetchFilms())
      .catch(err => console.log(err))
  }



  render() {

    return (
      <div className="App">
      <Starfield className="Starfield" />
        <h1 className="header">swapiboxi</h1>
        <nav>
          <button>People</button>
          <button>Planets</button>
          <button>Vehicles</button>
          <button>Favorites</button>
        </nav>
        {
          this.state.isLoading === true ? 
          <Loader /> : 
          <Crawl 
          crawl={this.state.movie.opening_crawl} 
          release={this.state.movie.release_date} 
          />
        }
      </div>
    );
  }
}

export default App;
