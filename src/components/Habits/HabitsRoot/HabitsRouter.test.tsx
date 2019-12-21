import React from 'react';

import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import HabitsRouter from './HabitsRouter';

import habits from '../../../api/fakeData/habits';
import { routing } from '../../../contants/routing';

const testSetup = () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  // TODO: add sample data for habits page
  const sampleStoreData = {
    habits: {
      habits,
    },
  };
  const store = mockStore(sampleStoreData);
  const wrappedComponent = (url: string) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={[url]}>
        <Route component={HabitsRouter} />
      </MemoryRouter>
    </Provider>
  );
  const rootUrl = routing.habits.root;
  const createUrl = routing.habits.root + routing.habits.create;
  return { wrappedComponent, rootUrl, createUrl };
};

it('Match snapshot', () => {
  const { wrappedComponent, rootUrl, createUrl } = testSetup();
  // Root habit page
  const rootComponent = mount(wrappedComponent(rootUrl));
  expect(rootComponent.debug()).toMatchSnapshot();
  // Create habit page
  const createHabitComponent = mount(wrappedComponent(createUrl));
  expect(createHabitComponent.debug()).toMatchSnapshot();
});

it('Renders Habits root page', () => {
  const { wrappedComponent, rootUrl } = testSetup();
  const component = mount(wrappedComponent(rootUrl));
  const page = component.find('HabitsPage');
  expect(page.length).toBe(1);
});

it('Renders Create Habit page', () => {
  const { wrappedComponent, createUrl } = testSetup();
  const component = mount(wrappedComponent(createUrl));
  const createPage = component.find('HabitCreate');
  expect(createPage.length).toBe(1);
});
