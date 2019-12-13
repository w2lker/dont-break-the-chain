import React from 'react';

import { mount, shallow } from 'enzyme';
// import cases from 'jest-in-case';

import HabitCreate, { IHabitCreateProps } from './HabitCreate';
import HabitCreateDecorated from './HabitCreate.decorators';
import habitCreateStyles from './HabitCreate.styles';

const testSetup = () => {
  const classes = {
    root: 'habitCreate-wrapper',
  };
  const classesKeys = Object.keys(classes);
  const emptyProps: IHabitCreateProps = {
    classes,
  };
  const sampleProps: IHabitCreateProps = {
    classes,
  };

  return { classes, classesKeys, emptyProps, sampleProps };
};

describe('HabitCreate component', () => {

  it('match snapshot', () => {
    const { sampleProps } = testSetup();
    const component = shallow(<HabitCreate {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('sampleTest', () => {
    expect(true).toBe(true);
  });

  test.todo('sample placeholder');
});

describe('HabitCreate styles', () => {
  it('contains principle classes', () => {
    const { classesKeys } = testSetup();
    expect(habitCreateStyles).toBeDefined();
    classesKeys.forEach((keyValue) => {
      // @ts-ignore
      expect(habitCreateStyles[keyValue]).toBeDefined();
    });
  });
  test.todo('sample placeholder');
});

describe('HabitCreate decorators', () => {
  it('provides styled classes from decorators', () => {
    const { sampleProps, classesKeys } = testSetup();
    const component = mount(<HabitCreateDecorated {...sampleProps} />);
    // @ts-ignore
    const assignedClasses = component.find('HabitCreate').props().classes;
    classesKeys.forEach(keyValue => {
      expect(assignedClasses[keyValue]).toBeDefined();
    });
  });
  test.todo('sample placeholder');
});
