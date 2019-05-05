import React from 'react';
import { shallow } from 'enzyme';
import Vehicle from './Vehicle';

describe('Vehicle', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Vehicle />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })
})