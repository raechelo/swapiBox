import React from 'react';
import { shallow } from 'enzyme';
import Planet from './Planet';

describe('Planet', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Planet />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
})