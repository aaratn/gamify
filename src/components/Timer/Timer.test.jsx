import React from 'react';
import { mount } from 'enzyme';
import Timer from './index';

describe('Timer component', () => {
  it('Should render without carshing', () => {
    mount(<Timer />);
  });
});