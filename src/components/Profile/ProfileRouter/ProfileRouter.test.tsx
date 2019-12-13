import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ProfileRouter from './ProfileRouter';

const testSetup = () => {

  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  const sampleStoreData = {
    profile: {
      id: 3423,
      name: 'Test User',
      avatar: './img.png',
      email: 'tester@gmail.com',
      points: 245,
      longestChain: 12,
    },
  };
  const store = mockStore(sampleStoreData);
  const wrappedComponent = (
    <Provider store={store}>
      <MemoryRouter>
        <Route component={ProfileRouter} />
      </MemoryRouter>
    </Provider>
  );
  return { wrappedComponent };
};

it('Match snapshot', () => {
  const { wrappedComponent } = testSetup();
  const component = mount(wrappedComponent);
  expect(component.debug()).toMatchSnapshot();
});

test.todo('Add profile router snapshot');
test.todo('Check profile page rendering');
