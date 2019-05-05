import React from 'react';
import { shallow } from 'enzyme';
import Vehicle from './Vehicle';

describe('Vehicle', () => {

  let wrapper;

  let mockName = 'Nimbus';
  let mockModel = '2000';
  let mockPassengers = 1;
  let mockVehicle_class = 'flying broom'

  beforeEach(() => {
    wrapper = shallow (
      <Vehicle name={mockName} model={mockModel} passengers={mockPassengers} class={mockVehicle_class} />
    )
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })
})