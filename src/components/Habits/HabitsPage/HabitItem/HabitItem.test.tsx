import React from 'react';

import { mount, shallow } from 'enzyme';
// import cases from 'jest-in-case';

import HabitItem, { IHabitItemProps } from './HabitItem';
import habitItemStyles from './HabitItem.styles';

const testSetup = () => {
  const classes = {
    root: 'habitItem-wrapper',
  };

  const classesKeys = Object.keys(classes);

  const emptyProps: IHabitItemProps = {
    classes,
  };

  const sampleProps: IHabitItemProps = {
    classes,
  };

  return { classes, classesKeys, emptyProps, sampleProps };
};

describe('HabitItem component', () => {

  it('match snapshot', () => {
    const { sampleProps } = testSetup();
    const component = shallow(<HabitItem {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

  test.todo('sample placeholder');
});

describe('HabitItem styles', () => {
  it('contains principle classes', () => {
    const { classesKeys } = testSetup();
    expect(habitItemStyles).toBeDefined();
    classesKeys.forEach((keyValue) => {
      // @ts-ignore
      expect(habitItemStyles[keyValue]).toBeDefined();
    });
  });
  test.todo('sample placeholder');
});
