import React from 'react';
import { shallow } from 'enzyme';
import Starfield from './Starfield';

describe('Starfield', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Starfield />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  });

})