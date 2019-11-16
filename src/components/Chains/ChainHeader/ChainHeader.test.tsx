import { mount, render, shallow } from 'enzyme';
import { List } from 'immutable';
import React from 'react';

import ChainHeader from './ChainHeader';

import { colors } from '../../../contants/colors';
import { IHabit } from '../../../models/habit';

describe('Chain Header Component', () => {
  const propsEmpty: IHabit = {
    id: undefined,
    name: '',
    // @ts-ignore
    color: '',
    icon: '',
    currentChain: undefined,
    longestChain: undefined,
    dates: List(),
  };

  const propsSample: IHabit = {
    id: 1,
    name: 'Sample name',
    color: 'cyan',
    icon: 'sample',
    currentChain: 1,
    longestChain: 15,
    dates: List(),
  };

  it('match snapshot', () => {
    const component = mount(<ChainHeader {...propsSample} />);
    expect(component.debug()).toMatchSnapshot();
  });

  describe('testing default props', () => {
    const component = shallow(<ChainHeader {...propsEmpty} />);

    it('renders default name', () => {
      expect(component.find('.name').text()).toBe('The habit');
    });

    it('renders default icon props', () => {
      const defaultStyle = {
        color: colors.blue[500],
      };
      const defaultName = 'ninja';
      const iconComponent = component.find('MaterialDesignIcon');
      const iconProps = iconComponent.props();
      expect(iconProps.name).toBe(defaultName);
      expect(iconProps.style).toEqual(defaultStyle);
    });

    it('renders without stats', () => {
      expect(component.find('.stats')).toEqual({});
    });
  });

  describe('testing custom props', () => {
    const component = shallow(<ChainHeader {...propsSample} />);

    it('renders custom name', () => {
      expect(component.find('.name').text()).toBe(propsSample.name);
    });

    it('renders custom icon props', () => {
      const sampleStyle = {
        // @ts-ignore
        color: colors[propsSample.color][500],
      };
      const sampleName = propsSample.icon;
      const iconComponent = component.find('MaterialDesignIcon');
      const iconProps = iconComponent.props();
      expect(iconProps.name).toBe(sampleName);
      expect(iconProps.style).toEqual(sampleStyle);
    });

    it('renders custom stats', () => {
      const sampleStats = `${propsSample.currentChain}/${propsSample.longestChain}`;
      expect(component.find('.stats').text()).toEqual(sampleStats);
    });
  });

});
