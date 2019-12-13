import React from 'react';

import { mount, shallow } from 'enzyme';
// import cases from 'jest-in-case';

import HabitsHeader, { IHabitsHeaderProps } from './HabitsHeader';
import HabitsHeaderDecorated from './HabitsHeader.decorators';
import habitsHeaderStyles from './HabitsHeader.styles';

const testSetup = () => {
  const classes = {
    root: 'habitsHeader-root',
    title: 'habitsHeader-title',
  };
  const classesKeys = Object.keys(classes);
  const sampleProps: IHabitsHeaderProps = {
    classes,
  };
  return { classes, classesKeys, sampleProps };
};

describe('HabitsHeader component', () => {

  it('match snapshot', () => {
    const { sampleProps } = testSetup();
    const component = shallow(<HabitsHeader {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

});

describe('HabitsHeader styles', () => {
  it('contains principle classes', () => {
    const { classesKeys } = testSetup();
    expect(habitsHeaderStyles).toBeDefined();
    classesKeys.forEach((keyValue) => {
      // @ts-ignore
      expect(habitsHeaderStyles[keyValue]).toBeDefined();
    });
  });
});

describe('HabitsHeader decorators', () => {
  it('provides styled classes from decorators', () => {
    const { classesKeys } = testSetup();
    const component = mount(<HabitsHeaderDecorated />);
    // @ts-ignore
    const assignedClasses = component.find('HabitsHeader').props().classes;
    classesKeys.forEach(keyValue => {
      expect(assignedClasses[keyValue]).toBeDefined();
    });
  });
});
