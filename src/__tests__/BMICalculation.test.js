import React from 'react'
import { mount } from 'enzyme'
import Calculator from '../Components/Calculator'

describe('<Calculator />', () => {
  it('shows metric as the standard method', () => {
    const component = mount(<Calculator/>);
    expect(component.find('input[name="weight"]').prop('placeholder')).toEqual('kg');
    expect(component.find('input[name="height"]').prop('placeholder')).toEqual('cm');
  })
  
  it('changes placeholders if imperial method selected', () => {
    const component = mount(<Calculator/>);
    component.setState({ method: "imperial" });
    expect(component.find('input[name="weight"]').prop('placeholder')).toEqual('lbs');
    expect(component.find('input[name="height"]').prop('placeholder')).toEqual('in');
  })
})