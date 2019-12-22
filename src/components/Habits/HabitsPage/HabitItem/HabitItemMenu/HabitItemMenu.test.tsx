import React from 'react';

import { mount, shallow } from 'enzyme';
import cases from 'jest-in-case';

import HabitItemMenu, { IHabitItemMenuProps } from './HabitItemMenu';
import HabitItemMenuDecorated from './HabitItemMenu.decorators';
import habitItemMenuStyles from './HabitItemMenu.styles';

const classes = {
  root: 'habitItemMenu-wrapper',
};

const classesKeys = Object.keys(classes);

describe('HabitItemMenu component', () => {

  const emptyProps: IHabitItemMenuProps = {
    classes,
  };

  const sampleProps: IHabitItemMenuProps = {
    classes,
  };

  it('match snapshot', () => {
    const component = shallow(<HabitItemMenu {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('sampleTest', () => {
    expect(true).toBe(true);
  });

  test.todo('sample placeholder');
});

describe('HabitItemMenu styles', () => {
  it('contains principle classes', () => {
    expect(habitItemMenuStyles).toBeDefined();
    classesKeys.forEach((keyValue) => {
      // @ts-ignore
      expect(habitItemMenuStyles[keyValue]).toBeDefined();
    });
  });
  test.todo('sample placeholder');
});

describe('HabitItemMenu decorators', () => {
  const sampleProps: IHabitItemMenuProps = {
    classes,
  };

  it('provides styled classes from decorators', () => {
    const component = mount(<HabitItemMenuDecorated {...sampleProps} />);
    // @ts-ignore
    const assignedClasses = component.find('HabitItemMenu').props().classes;
    classesKeys.forEach(keyValue => {
      expect(assignedClasses[keyValue]).toBeDefined();
    });
  });
  test.todo('sample placeholder');
});
