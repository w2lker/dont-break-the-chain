import React from 'react';

import { mount, shallow } from 'enzyme';
import { List } from 'immutable';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fakeApi from '../../../api/fakeApi';
import { IHabit } from '../../../models/habit';

import HabitsPage, { IHabitsPageProps } from './HabitsPage';
import HabitsPageDecorated from './HabitsPage.decorators';
import habitsPageStyles from './HabitsPage.styles';

const testSetup = () => {
  const classes = {
    root: 'habitsPage-wrapper',
  };
  const classesKeys = Object.keys(classes);
  const sampleProps: IHabitsPageProps = {
    classes,
    habits: List(),
    getHabits: jest.fn(),
  };

  const sampleHabits = List([1, 2, 3]);

  const sampleStoreData = {
    habits: {
      habits: List(),
    },
  };
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  const store = mockStore(sampleStoreData);

  return { classes, classesKeys, sampleProps, sampleHabits, sampleStoreData, mockStore, store };
};

describe('HabitsPage component', () => {

  it('match snapshot', () => {
    const { sampleProps } = testSetup();
    const component = shallow(<HabitsPage {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('creates getHabits request', () => {
    const { sampleProps } = testSetup() as { sampleProps: Required<IHabitsPageProps> };
    mount(<HabitsPage {...sampleProps} />);
    expect(sampleProps.habits.size).toBe(0);
    expect(sampleProps.getHabits).toBeCalledTimes(1);
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
    const { classesKeys, store } = testSetup();
    const component = mount(
      <Provider store={store}>
        <HabitsPageDecorated />
      </Provider>,
    );
    // @ts-ignore
    const assignedClasses = component.find('HabitsPage').props().classes;
    classesKeys.forEach(keyValue => {
      expect(assignedClasses[keyValue]).toBeDefined();
    });
  });
  it('provides habits list from connected store', () => {
    const { mockStore, sampleHabits } = testSetup();
    const storeWithData = {
      habits: {
        habits: sampleHabits,
      },
    };
    const store = mockStore(storeWithData);
    const component = mount(
        <Provider store={store}>
          <HabitsPageDecorated />
        </Provider>,
      );
    const { habits } = component.find('HabitsPage').props() as { habits: List<IHabit> };
    expect(List.isList(habits)).toBeTruthy();
    expect(habits.toObject()).toEqual(sampleHabits.toObject());
  });
  it('dispatch getHabits request', () => {
    const { store, sampleHabits } = testSetup();
    const spy = jest.spyOn(fakeApi, 'getHabits').mockImplementation(() => {
      return new Promise((resolve) => (resolve({
        data: sampleHabits,
      })));
    });
    mount(
      <Provider store={store}>
        <HabitsPageDecorated />
      </Provider>,
    );
    expect(fakeApi.getHabits).toBeCalledTimes(1);
    spy.mockRestore();
  });
});
