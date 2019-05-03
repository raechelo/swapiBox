import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {


  let wrapper;

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
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/",
                "https://swapi.co/api/films/7/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/14/",
                "https://swapi.co/api/vehicles/30/"
            ],
            "starships": [
                "https://swapi.co/api/starships/12/",
                "https://swapi.co/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.co/api/people/1/"
        }
    ]

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
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

  it('should pull in the data with the correct movie url', () => {
    const expected = 'https://swapi.co/api/films/';

    const wrapper = shallow(<App />);

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should pull in the data with the correct people url', () => {
    const expected = 'https://swapi.co/api/people/';

    wrapper.instance().fetchPeople()

    expect(window.fetch).toHaveBeenCalledWith(expected);
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });

  it('should pull in the data with the correct homeworld name and population', () => {
    const expected = 'https://swapi.co/api/planets/1/';

    wrapper.setState({people: peopleArr})

    wrapper.instance().fetchHomeworlds(peopleArr);
    expect(window.fetch).toHaveBeenCalledWith(expected)
  });

  it('should pull in the data with the correct species name', () => {
    const expected = ['https://swapi.co/api/species/1/'];

    wrapper.instance().fetchSpecies(peopleArr);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return an error if fetch does not return', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
  });

})

