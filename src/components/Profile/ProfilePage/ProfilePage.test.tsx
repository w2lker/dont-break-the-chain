import React from 'react';

import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fakeApi from '../../../api/fakeApi';
import ProfilePage, { IProfilePageProps } from './ProfilePage';
import ProfilePageDecorated from './ProfilePage.decorators';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const testSetup = () => {
  const sampleProps: IProfilePageProps = {
    id: 123,
    getProfile: jest.fn(),
  };
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
  return { sampleProps, sampleStoreData, store };
};

describe('ProfilePage component', () => {

  it('matches snapshot', () => {
    const { store, sampleProps } = testSetup();
    const component = mount(
      <Provider store={store}>
        <ProfilePage {...sampleProps} />
      </Provider>,
    );
    expect(component.debug()).toMatchSnapshot();
  });

  it('skips render without id', () => {
    const { sampleProps } = testSetup();
    const props = {
      ...sampleProps,
      id: null,
    };
    // @ts-ignore
    const component = shallow(<ProfilePage {...props} />);
    expect(Object.entries(component).length).toBe(0);
    expect(sampleProps.getProfile).toBeCalledTimes(1);
  });

  it('renders with props', () => {
    const { store, sampleProps } = testSetup();
    const component = mount(
      <Provider store={store}>
        <ProfilePage {...sampleProps} />);
      </Provider>,
    );
    expect(component.find('ProfileHeader').length).toBe(1);
    expect(component.find('ProfileInfo').length).toBe(1);
    expect(component.find('ProfileStats').length).toBe(1);
    expect(sampleProps.getProfile).toBeCalledTimes(0);
  });
});

describe('ProfilePage decorators', () => {

  it('provides id from connected store', () => {
    const storeWithID = {
      profile: {
        id: 14532,
      },
    };
    const store = mockStore(storeWithID);
    const component = mount(
      <Provider store={store}>
        <ProfilePageDecorated/>
      </Provider>,
    );
    const props = component.find('ProfilePage').props();
    expect(props.id).toBe(storeWithID.profile.id);
  });

  it('dispatches getProfile request', () => {
    const storeState = {
      profile: {
        id: 0,
      },
    };
    const store = mockStore(storeState);
    const sampleProfile = {
      id: 3423,
    };
    const spy = jest.spyOn(fakeApi, 'getProfile').mockImplementation(() => {
      return new Promise((resolve) => (resolve({
        data: sampleProfile,
      })),
      );
    });
    mount(
      <Provider store={store}>
        <ProfilePageDecorated/>
      </Provider>,
    );
    expect(fakeApi.getProfile).toBeCalledTimes(1);
    spy.mockRestore();
  });
});
