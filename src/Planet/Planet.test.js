import React from 'react';
import { shallow } from 'enzyme';
import Planet from './Planet';

describe('Planet', () => {

  let wrapper;

  let mockName = 'Mordor';
  let mockPopulation = 299999;
  let mockTerrain = 'rocky';
  let mockResidents = ['Sauron'];
  let mockClimate = 'burning hot';

  beforeEach(() => {
    wrapper = shallow (
      <Planet name={mockName} population={mockPopulation} terrain={mockTerrain} residents={mockResidents} climate={mockClimate} />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot in absence of data', () => {
    mockResidents = [];
    expect(wrapper).toMatchSnapshot();
  })
})