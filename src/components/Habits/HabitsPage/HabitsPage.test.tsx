import React from 'react';

import { mount, shallow } from 'enzyme';
import { List } from 'immutable';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fakeApi from '../../../api/fakeApi';
import fakeDataHabits from '../../../api/fakeData/habits';
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

  const sampleHabits = fakeDataHabits;

  const sampleStoreData: IHabitsPageProps = {
    habits: {
      // @ts-ignore
      habits: List(),
    },
  };
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  const store = mockStore(sampleStoreData);

  const wrappedComponent = (props: IHabitsPageProps, testingStore: typeof store) => (
    <MemoryRouter>
      <Provider store={testingStore}>
        <HabitsPage {...props} />
      </Provider>
    </MemoryRouter>
  );

  return { classes, classesKeys, sampleProps, sampleHabits, sampleStoreData, mockStore, store, wrappedComponent };
};

describe('HabitsPage component', () => {

  it('match snapshot', () => {
    const { sampleProps } = testSetup();
    const component = shallow(<HabitsPage {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('creates getHabits request', () => {
    const { sampleProps, store, wrappedComponent } = testSetup();
    mount(wrappedComponent(sampleProps, store));

    expect(sampleProps.habits && sampleProps.habits.size).toBe(0);
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
      <MemoryRouter>
        <Provider store={store}>
          <HabitsPageDecorated />
        </Provider>
      </MemoryRouter>,
      );
    const habits = component.find('HabitsPage').props().habits as List<IHabit> ;
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
