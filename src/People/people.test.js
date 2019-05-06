import React from 'react';
import People from './People';
import { shallow } from 'enzyme';

describe('People', () => {
  
  let wrapper;

  let mockName = 'Wonder Woman';
  let mockSpecies = 'Amazon';
  let mockHomeworld = 'Themyscira';
  let mockHomeworldPopulation = '86065';

  beforeEach(() => {
    wrapper = shallow (
      <People name={mockName} sfecies={mockSpecies} homeworld={mockHomeworld} homeworldPop={mockHomeworldPopulation} />
    )
  })

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })
})