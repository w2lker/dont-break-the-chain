import React from 'react';

import { mount, shallow } from 'enzyme';
// import cases from 'jest-in-case';

import HabitCreateIcon, { IHabitCreateIconProps } from './HabitCreateIcon';
import HabitCreateIconDecorated from './HabitCreateIcon.decorators';
import habitCreateIconStyles from './HabitCreateIcon.styles';

const testSetup = () => {
  const classes = {
    root: 'habitCreateIcon-wrapper',
  };

  const classesKeys = Object.keys(classes);

  const emptyProps: IHabitCreateIconProps = {
    classes,
  };

  const sampleProps: IHabitCreateIconProps = {
    classes,
  };

  return { classes, classesKeys, emptyProps, sampleProps };
};

describe('HabitCreateIcon component', () => {
  it('match snapshot', () => {
    const { sampleProps } = testSetup();
    const component = shallow(<HabitCreateIcon {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

  test.todo('sample placeholder');
});

describe('HabitCreateIcon styles', () => {
  it('contains principle classes', () => {
    const { classesKeys } = testSetup();
    expect(habitCreateIconStyles).toBeDefined();
    classesKeys.forEach((keyValue) => {
      // @ts-ignore
      expect(habitCreateIconStyles[keyValue]).toBeDefined();
    });
  });
});

describe('HabitCreateIcon decorators', () => {
  it('provides styled classes from decorators', () => {
    const { sampleProps, classesKeys } = testSetup();
    const component = mount(<HabitCreateIconDecorated {...sampleProps} />);
    // @ts-ignore
    const assignedClasses = component.find('HabitCreateIcon').props().classes;
    classesKeys.forEach(keyValue => {
      expect(assignedClasses[keyValue]).toBeDefined();
    });
  });
});
