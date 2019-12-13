import React from 'react';

import { mount, shallow } from 'enzyme';
// import cases from 'jest-in-case';

import HabitCreateColor, { IHabitCreateColorProps } from './HabitCreateColor';
import HabitCreateColorDecorated from './HabitCreateColor.decorators';
import habitCreateColorStyles from './HabitCreateColor.styles';

const testSetup = () => {
  const classes = {
    root: 'habitCreateColor-wrapper',
  };
  const classesKeys = Object.keys(classes);
  const emptyProps: IHabitCreateColorProps = {
    classes,
  };
  const sampleProps: IHabitCreateColorProps = {
    classes,
  };
  return { classes, classesKeys, emptyProps, sampleProps };
};

describe('HabitCreateColor component', () => {
  it('match snapshot', () => {
    const { sampleProps } = testSetup();
    const component = shallow(<HabitCreateColor {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

  test.todo('sample placeholder');
});

describe('HabitCreateColor styles', () => {
  it('contains principle classes', () => {
    const { classesKeys } = testSetup();
    expect(habitCreateColorStyles).toBeDefined();
    classesKeys.forEach((keyValue) => {
      // @ts-ignore
      expect(habitCreateColorStyles[keyValue]).toBeDefined();
    });
  });
});

describe('HabitCreateColor decorators', () => {
  it('provides styled classes from decorators', () => {
    const { sampleProps, classesKeys } = testSetup();
    const component = mount(<HabitCreateColorDecorated {...sampleProps} />);
    // @ts-ignore
    const assignedClasses = component.find('HabitCreateColor').props().classes;
    classesKeys.forEach(keyValue => {
      expect(assignedClasses[keyValue]).toBeDefined();
    });
  });
});
