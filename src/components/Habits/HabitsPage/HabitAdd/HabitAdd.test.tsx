import React from 'react';

import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import HabitAdd, { IHabitAddProps } from './HabitAdd';
import HabitAddDecorated from './HabitAdd.decorators';
import habitAddStyles from './HabitAdd.styles';

const testSetup = () => {
  const classes = {
    root: 'habitAdd-wrapper',
  };

  const classesKeys = Object.keys(classes);

  const sampleProps: IHabitAddProps = {
    classes,
  };

  return { classes, classesKeys, sampleProps };
};

describe('HabitAdd component', () => {

  it('match snapshot', () => {
    const { sampleProps } = testSetup();
    const component = shallow(<HabitAdd {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

});

describe('HabitAdd styles', () => {
  it('contains principle classes', () => {
    const { classesKeys } = testSetup();
    expect(habitAddStyles).toBeDefined();
    classesKeys.forEach((keyValue) => {
      // @ts-ignore
      expect(habitAddStyles[keyValue]).toBeDefined();
    });
  });
});

describe('HabitAdd decorators', () => {
  it('provides styled classes from decorators', () => {
    const { classesKeys } = testSetup();
    const wrappedComponent = (
      <MemoryRouter>
        <HabitAddDecorated />
      </MemoryRouter>
    );
    const component = mount(wrappedComponent);
    // @ts-ignore
    const assignedClasses = component.find('HabitAdd').props().classes;
    classesKeys.forEach(keyValue => {
      expect(assignedClasses[keyValue]).toBeDefined();
    });
  });
});
