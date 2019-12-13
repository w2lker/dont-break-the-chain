import React from 'react';

import { mount, shallow } from 'enzyme';
// import cases from 'jest-in-case';

import HabitsPage, { IHabitsPageProps } from './HabitsPage';
import HabitsPageDecorated from './HabitsPage.decorators';
import habitsPageStyles from './HabitsPage.styles';

const testSetup = () => {
  const classes = {
    root: 'habitsPage-wrapper',
  };
  const classesKeys = Object.keys(classes);
  const sampleProps: IHabitsPageProps = { classes };

  return { classes, classesKeys, sampleProps };
};

describe('HabitsPage component', () => {

  it('match snapshot', () => {
    const { sampleProps } = testSetup();
    const component = shallow(<HabitsPage {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('Renders header', () => {
    const { sampleProps } = testSetup();
    const component = mount(<HabitsPage {...sampleProps} />);
    const header = component.find('HabitsHeader');
    expect(header.length).toBe(1);
  });
});

describe('HabitsPage styles', () => {
  it('contains principle classes', () => {
    const { classesKeys } = testSetup();
    expect(habitsPageStyles).toBeDefined();
    classesKeys.forEach((keyValue) => {
      // @ts-ignore
      expect(habitsPageStyles[keyValue]).toBeDefined();
    });
  });
});

describe('HabitsPage decorators', () => {
  it('provides styled classes from decorators', () => {
    const { classesKeys } = testSetup();
    const component = mount(<HabitsPageDecorated />);
    // @ts-ignore
    const assignedClasses = component.find('HabitsPage').props().classes;
    classesKeys.forEach(keyValue => {
      expect(assignedClasses[keyValue]).toBeDefined();
    });
  });
});
