import { mount, shallow } from 'enzyme';
import React from 'react';

import ChainItemIncomplete, { IChainItemIncompleteProps } from './ChainItemIncomplete';

import { colors, colorsKeys } from '../../../../contants/colors';
import { habitStatus } from '../../../../models/habit';

describe('Chain Item Incomplete', () => {
  const emptyProps: IChainItemIncompleteProps = {
    // @ts-ignore
    status: undefined,
    // @ts-ignore
    color: undefined,
    onAdd: jest.fn(),
  };

  const sampleProps: IChainItemIncompleteProps = {
    // @ts-ignore
    status: habitStatus.incompleteToday,
    color: 'deepPurple',
    onAdd: jest.fn(),
  };

  it('match snapshot', () => {
    const component = mount(<ChainItemIncomplete {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('skips render with empty props passed', () => {
    const component = shallow(<ChainItemIncomplete {...emptyProps} />);
    expect(component.isEmptyRender()).toBe(true);
  });

  it('skip render with status !== incompleteToday', () => {
    const otherStatuses = Object.values(habitStatus).filter(item => item !== habitStatus.incompleteToday);
    otherStatuses.forEach((status) => {
      const newProps: IChainItemIncompleteProps = {
        ...sampleProps,
        // @ts-ignore
        status,
      };
      const component = shallow(<ChainItemIncomplete {...newProps} />);
      expect(component.isEmptyRender()).toBe(true);
    });
  });

  describe('testing color assignment', () => {
    function testColorAssignment(color: colorsKeys) {
      const newProps: IChainItemIncompleteProps = {
        ...sampleProps,
        // @ts-ignore
        color,
      };

      const sampleStyle = {
        color: colors[color || 'blue'][500],
      };

      const component = shallow(<ChainItemIncomplete {...newProps} />);
      const iconComponent = component.find('MaterialDesignIcon');
      expect(iconComponent.props().style).toEqual(sampleStyle);
    }

    it('renders with default color', () => testColorAssignment('blue'));
    it('renders with provided color', () => {
      const colorKeys = Object.keys(colors);
      // @ts-ignore
      colorKeys.forEach(testColorAssignment);
    });
  });

  it('fires click callback', () => {
    const mockAddClick = jest.fn();
    const newProps: IChainItemIncompleteProps = {
      ...sampleProps,
      onAdd: mockAddClick,
    };
    const component = shallow(<ChainItemIncomplete {...newProps} />);
    component.simulate('click');
    expect(mockAddClick.mock.calls.length).toEqual(1);
  });
});
