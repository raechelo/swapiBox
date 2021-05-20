import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { fetchCalls } from '../apiCalls';

describe('App', () => {


  let wrapper;
  let mockFetchPlanets = jest.fn();
  let mockFetchPeople = jest.fn();
  let mockFetchVehicles = jest.fn();
  let mockAddPlanetInfo = jest.fn();

  let peopleArr = [
        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "https://swapi.dev/api/planets/1/",
            "films": [
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/6/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/7/"
            ],
            "species": [
                "https://swapi.dev/api/species/1/"
            ],
            "vehicles": [
                "https://swapi.dev/api/vehicles/14/",
                "https://swapi.dev/api/vehicles/30/"
            ],
            "starships": [
                "https://swapi.dev/api/starships/12/",
                "https://swapi.dev/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.dev/api/people/1/"
        }
    ]

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve()
      })
    })
  })

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have proper default state', () => {
    expect(wrapper.state()).toEqual( { isLoading: true, movie: {}, people: [], planets: [], vehicles: [], favorites: [], currentChoice: '' } )
  });

  
  it('should pull in the data with the correct movie url', () => {
    const expected = [ 'https://swapi.dev/api/films/', { method: 'GET' } ];
    const wrapper = shallow(<App />);
    
    expect(window.fetch).toHaveBeenCalledWith(...expected);
    
    // expect(mockFetchPeople).toHaveBeenCalledTimes(1);
    // expect(mockFetchVehicles).toHaveBeenCalledTimes(1);
    // expect(mockFetchPlanets).toHaveBeenCalledTimes(1);
  });

  it('should handle any clicks', () => {
    expect(wrapper.state('currentChoice')).toEqual('');

    wrapper.instance().handleClick( { target: { textContent: 'people' } } );
    expect(wrapper.state('currentChoice')).toEqual('people');

    wrapper.instance().handleClick( { target: { textContent: 'planets' } } );
    expect(wrapper.state('currentChoice')).toEqual('planets');

    wrapper.instance().handleClick( { target: { textContent: 'vehicles' } } );
    expect(wrapper.state('currentChoice')).toEqual('vehicles');

    wrapper.instance().handleClick( { target: { textContent: 'favorites' } } );
    expect(wrapper.state('currentChoice')).toEqual('favorites');
  });

  it('should pull in the data with the correct people url', async () => {
    const expected = ['https://swapi.dev/api/people/', {
      method: 'GET'
    }];

    wrapper.instance().fetchPeople()
    expect(window.fetch).toHaveBeenCalledWith(...expected);
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(wrapper.state('people')).toEqual( [] )
  });

  it('should pull in the data with the correct homeworld name and population', () => {
    const expected = ['https://swapi.dev/api/planets/1/', { method: 'GET' } ];

    wrapper.setState({people: peopleArr})
    wrapper.instance().fetchHomeworlds(peopleArr);
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });

  it('should combine homeworld information', () => {
    const person = [ {name: 'Thanos' } ];
    
    wrapper.setState( { people: person } )
    wrapper.instance().addHomeworldInfo('Titan', 9)
    expect(wrapper.state('people')).toEqual( [ { name:'Thanos', homeworld: 'Titan', homeworldPopulation: 9 } ] ) 
  })

  it.skip('should set state after pulling in correct data', async () => {
    expect(wrapper.state('people')).toEqual([]);

    await wrapper.instance().fetchPeople();
    
    expect(wrapper.state('isLoading')).toEqual(false);
    expect(wrapper.state('currentChoice')).toEqual('crawl');
    expect(wrapper.state('people')).toEqual(peopleArr)
  })

  it('should pull in the data with the correct species name', () => {
    const expected = [['https://swapi.dev/api/species/1/'], { method: 'GET' } ];

    wrapper.instance().fetchSpecies(peopleArr);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should combine any species info', () => {
    const person = [ {name: 'Thanos' } ];

    wrapper.setState( { people: person } );
    wrapper.instance().addSpeciesInfo('Titan');
    expect(wrapper.state('people')).toEqual( [ { name: 'Thanos', species: 'Titan' } ] )
  });

  it('should pull in all correct data for the vehicles', async () => {
    const expected = ['https://swapi.dev/api/vehicles/', { method: 'GET' } ]

    wrapper.instance().fetchVehicles();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should combine the planet information', () => {
    const planet = [ { name: 'Mordor' } ];
    let info = ['Sauron'];
    
    wrapper.setState( { planets: planet } );
    wrapper.instance().addPlanetInfo([info]);
    expect(wrapper.state('planets')).toEqual( [ { name: 'Mordor', residents: info } ] );
  });

  it('should fetch any residents', () => {
    const planet = [ { name: 'Mordor', residents: ['https://swapi.dev/api/people/1/'] } ];
    const expected = ['https://swapi.dev/api/people/1/', { method: 'GET' } ];

    wrapper.setState( { planets: planet } )    
    wrapper.instance().fetchResidents(planet);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
    expect(wrapper.state('planets')).toEqual( [ { name: 'Mordor', residents: [] } ] );
    // expect(mockAddPlanetInfo).toHaveBeenCalledTimes(1);
  })

  it('should pull in the planet data, including resident links', () => {
    const expected = ['https://swapi.dev/api/planets/', { method: 'GET' } ]

    wrapper.instance().fetchPlanets()
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should favorite any items', () => {
    const person = { name:'Buzz Lightyear' }
    
    wrapper.instance().favoriteItem(person);
    expect(wrapper.state('favorites')).toEqual([person])
  });

  it('should remove items from favorites', () => {
    const person = [ { name:'Buzz Lightyear' } ];

    wrapper.setState({favorites: person});
    wrapper.instance().removeFavorites('Buzz Lightyear');
    expect(wrapper.state('favorites')).toEqual([])
  })

  it('should return an error if fetch does not return', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    })
    await expect(fetchCalls()).rejects.toEqual(Error('Error fetching data'))
  });

})

