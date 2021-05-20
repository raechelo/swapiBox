import React, { Component } from 'react';
import Loader from '../Loader/Loader'
import CardContainer from '../CardContainer/CardContainer';
import Starfield from '../Starfield/Starfield'
import propTypes from 'prop-types';
import { fetchCalls } from '../apiCalls';
import { filmsUrl } from '../assets/api-links';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      movie: {},
      favorites: [],
      currentChoice: '',
    }
  }

  componentDidMount() {
    return fetchCalls(filmsUrl)
      .then(data => data.results.sort(() => 0.5 - Math.random()).pop())
      .then(movie => this.setState( { movie } ) )
      .then(() => this.setState({ isLoading: false }))
      .catch(err => { throw new Error(err) })
  }

  handleClick = (e) => {
    switch(e.target.textContent) {
      case 'people' :
        this.setState( { currentChoice: 'people' } )
      break;
      case 'vehicles':
        this.setState( { currentChoice: 'vehicles' } )
      break;
      case 'planets':
        this.setState( { currentChoice: 'planets' } )
      break;
      case 'films':
        this.setState( {currentChoice: 'films'} )
      break;
      case 'species':
        this.setState( {currentChoice: 'species'} )
      break;
      case 'starships':
        this.setState( {currentChoice: 'starships'} )
      break;
      case 'crawl':
        this.setState( { currentChoice: 'crawl' } )
      break;
      default:
        this.setState( { currentChoice: 'favorites' } )
    }
  }


  favoriteItem = (item) => {
    if (!this.state.favorites.includes(item)) {
      const { favorites } = this.state;
      this.setState( { favorites: [...favorites, item] } );
    } else {
      this.removeFavorites(item.name)
    }
  }

  removeFavorites = (name) => {
    const newFaves = this.state.favorites.filter(f => f.name !== name)
    this.setState( { favorites: newFaves } )
  }

  render() {

    return (
      <div className="App">
      <Starfield className="Starfield" />
        <h1 className="header"><img src="https://fontmeme.com/permalink/190502/5dfed28f102f9d81a68ccee2d51fa26a.png" alt="swapiboxi" border="0" />
        </h1>
        <nav>
          <button className="people" onClick={this.handleClick} >people</button>
          {/* <button className="species" onClick={this.handleClick} >species</button> */}
          <button className="planets" onClick={this.handleClick} >planets</button>
          <button className="vehicles" onClick={this.handleClick} >vehicles</button>
          <button className="starships" onClick={this.handleClick} >starships</button>
          <button className="films" onClick={this.handleClick} >films</button>
          {/* <button className="favorites" onClick={this.handleClick} >favorites<span className="fave-count">{this.state.favorites.length}</span></button> */}
        </nav>
        {
          this.state.isLoading === true ? 
          <Loader /> : 
          <CardContainer currentChoice={this.state.currentChoice} movie={this.state.movie} favorites={this.state.favorites} favoriteItem={this.favoriteItem} />
        }
      </div>
    );
  }
}



App.propTypes = {
  people: propTypes.array,
  isLoading: propTypes.bool,
  movie: propTypes.object,
  planets: propTypes.array,
  vehicles: propTypes.array,
  favorites: propTypes.array,
  currentChoice: propTypes.string
}


export default App;