import React from 'react';
import People from './People';
import { shallow } from 'enzyme';

describe('People', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <People />
    )
  })

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })
})