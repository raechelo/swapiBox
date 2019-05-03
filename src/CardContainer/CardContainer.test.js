import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {

  let rendered = {
    isLoading: true,
    movie: {},
    people: [],
    planets: [], 
    vehicles: [],
    favorites: [],
    currentChoice: '',
  }

  let wrapper;

  beforeEach(()=> {
    wrapper = shallow(
      <CardContainer rendered={rendered} />
    )
  })

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
})