import React from 'react';

import { mount, shallow } from 'enzyme';
// import cases from 'jest-in-case';

import HabitCreateName, { IHabitCreateNameProps } from './HabitCreateName';
import HabitCreateNameDecorated from './HabitCreateName.decorators';
import habitCreateNameStyles from './HabitCreateName.styles';

const testSetup = () => {
  const classes = {
    root: 'habitCreateName-wrapper',
  };
  const classesKeys = Object.keys(classes);
  const emptyProps: IHabitCreateNameProps = {
    classes,
  };
  const sampleProps: IHabitCreateNameProps = {
    classes,
  };
  return { classes, classesKeys, emptyProps, sampleProps };
};

describe('HabitCreateName component', () => {
  it('match snapshot', () => {
    const { sampleProps } = testSetup();
    const component = shallow(<HabitCreateName {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

  test.todo('sample placeholder');
});

describe('HabitCreateName styles', () => {
  it('contains principle classes', () => {
    const { classesKeys } = testSetup();
    expect(habitCreateNameStyles).toBeDefined();
    classesKeys.forEach((keyValue) => {
      // @ts-ignore
      expect(habitCreateNameStyles[keyValue]).toBeDefined();
    });
  });
});

describe('HabitCreateName decorators', () => {
  it('provides styled classes from decorators', () => {
    const { sampleProps, classesKeys } = testSetup();
    const component = mount(<HabitCreateNameDecorated {...sampleProps} />);
    // @ts-ignore
    const assignedClasses = component.find('HabitCreateName').props().classes;
    // @ts-ignore
    classesKeys.forEach(keyValue => {
      expect(assignedClasses[keyValue]).toBeDefined();
    });
  });
});
