import React, { Component } from 'react';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { fetchCalls } from '../apiCalls';
import {speciesUrl} from '../assets/api-links';

export default class Species extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      species: []
    }
  }

  componentDidMount() {
    return fetchCalls(speciesUrl)
      .then(data => this.setState( {species: data.results, isLoading: false} ) )
      .then(() => this.setHomeworlds());
  }

  setHomeworlds() {
    const species = this.state.species.map(specie => {
      const homeworld = fetchCalls(specie.homeworld);
      return {
        ...specie,
        homeworld: homeworld.name
      }
    });
    this.setState({species, isLoading: false});
  }
  
  render() {
    const displaySpecies = this.state.species.map(specie => (
      <Card name={specie.name} 
      classification={specie.classification} 
      designation={specie.designation}
      skinColors={specie.skin_colors} 
      hairColors={specie.hair_colors} 
      eyeColors={specie.eye_colors} 
      homeworld={specie.homeworld} 
      language={specie.language} 
      people={specie.people}
      favoriteItem={this.props.favoriteItem}
      key={specie.name} />
    ))

    return (
      <section className="Card-Container">
        {displaySpecies}
       {/* {!this.state.isLoading && <button className="page-btn">Next Page</button>} */}

        {this.state.isLoading && <Loader />}
      </section>
    )
  }
}
