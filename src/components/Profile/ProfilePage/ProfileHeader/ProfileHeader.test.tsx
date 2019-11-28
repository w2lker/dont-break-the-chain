import * as React from 'react';

import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import defaultTexts from '../../../../contants/defaultTexts';

import ProfileHeader, { IProfileHeaderProps } from './ProfileHeader';
import ProfileHeaderDecorated from './ProfileHeader.decorators';
import profileHeaderStyles from './ProfileHeader.styles';

const classes = {
  root: 'profile-header-root',
  title: 'profile-header-title',
  button: 'profile-header-button',
};
const classesKeys = Object.keys(classes);

describe('Profile Header Component', () => {
  const props: IProfileHeaderProps = {
    classes,
    logout: jest.fn(),
  };
  it('match snapshot', () => {
    const component = mount(<ProfileHeader {...props} />);
    expect(component.debug()).toMatchSnapshot();
  });
  it('renders', () => {
    const component = shallow(<ProfileHeader {...props} />);
    // It renders wrapper with root class
    const wrapper = component.find(`div.${classes.root}`);
    expect(wrapper.length).toBe(1);
    // It renders title with title class and text
    const title = component.find(`h3.${classes.title}`);
    expect(title.length).toBe(1);
    expect(title.text()).toBe(defaultTexts.profile.header.title);
    // It renders icon button with class and passes onClick action
    const button = component.find(`.${classes.button}`);
    expect(button.length).toBe(1);
    expect(button.hasClass(classes.button)).toBeTruthy();
    expect(button.props().onClick).toBeTruthy();
  });

  it('executes logout on click', () => {
    const component = shallow(<ProfileHeader {...props} />);
    const button = component.find(`.${classes.button}`);
    button.simulate('click');
    expect(props.logout).toBeCalledTimes(1);
  });
});

describe('Profile Header Styles', () => {
  it('should contain principle classes', () => {
    expect(profileHeaderStyles).toBeDefined();
    classesKeys.forEach((keyValue) => {
      // @ts-ignore
      expect(profileHeaderStyles[keyValue]).toBeDefined();
    });
  });
});

describe('Profile Header Decorated', () => {
  const middleWares = [thunk];
  const mockStore = configureMockStore(middleWares);

  const store = mockStore({});
  const component = mount(
    <Provider store = {store}>
      < ProfileHeaderDecorated />);
    </Provider>,
  );

  it('provides styled classes from decorators', () => {
    // @ts-ignore
    const assignedClasses = component.find('ProfileHeader').props().classes;
    classesKeys.forEach((keyValue) => {
        // @ts-ignore
      expect(assignedClasses[keyValue]).toBeDefined();
    });
  });

  it('provides dispatch function to logout', () => {
    // @ts-ignore
    const logout = component.find('ProfileHeader').props().logout;
    expect(typeof logout).toBe('function');
  });

});
