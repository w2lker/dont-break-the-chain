import { List } from 'immutable';
import React from 'react';

import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { MemoryRouter } from 'react-router-dom';
import HabitItem, { IHabitItemProps } from './HabitItem';
import { habitItemStyles } from './HabitItem.styles';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const testSetup = () => {
  const classes = {
    wrapper: 'habitItem-wrapper',
    lastWrapper: 'habitItem-last-wrapper',
    icon: 'habitItem-icon',
    checkMark: 'habitItem-check-mark',
    description: 'habitItem-description',
    title: 'habitItem-title',
    subtitle: 'habitItem-subtitle',
  };

  const classesKeys = Object.keys(classes);

  const sampleProps: IHabitItemProps = {
    content: {
      id: 1,
      name: 'Sample habit',
      color: 'blue',
      icon: 'sample-icon',
      currentChain: 1,
      longestChain: 2,
      dates: List(),
    },
    isLast: false,
  };

  const store = mockStore({});

  const wrappedComponent = (props: IHabitItemProps) => (
    <MemoryRouter>
      <Provider store={store}>
        <HabitItem {...props}/>
      </Provider>
    </MemoryRouter>
  );

  return { classes, classesKeys, sampleProps, wrappedComponent };
};

describe('HabitItem component', () => {

  it('match snapshot', () => {
    const { sampleProps, wrappedComponent } = testSetup();
    const component = mount(wrappedComponent(sampleProps));
    expect(component.debug()).toMatchSnapshot();
  });

  it('skips render with incorrect habit', () => {
    const { sampleProps, wrappedComponent } = testSetup();
    const props = {
      ...sampleProps,
      content: {
        ...sampleProps.content,
        name: '',
      },
    };
    const component = shallow(<HabitItem {...props} />);
    expect(component.type()).toEqual(null);
  });
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
});
