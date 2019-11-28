import * as React from 'react';

import { mount, shallow } from 'enzyme';

import { avatarPlaceholder } from '../../../../contants/ui';
import ProfileInfo, { IProfileInfoProps } from './ProfileInfo';
import profileInfoStyles from './ProfileInfo.styles';

const classes = {
  wrapper: 'profile-info-wrapper',
  avatar: 'profile-info-avatar',
  name: 'profile-info-name',
  email: 'profile-info-email',
};

const classesKeys = Object.keys(classes);

describe('ProfileInfo component', () => {
  const emptyProps: IProfileInfoProps = {
    classes,
  };

  const sampleProps: IProfileInfoProps = {
    classes,
    avatar: './some-avatar.png',
    name: 'Sandra Adams',
    email: 'purchasenow@gmail.com',
  };

  it('match snapshot', () => {
    const component = mount(<ProfileInfo {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

  describe('renders with empty props', () => {
    const component = shallow(<ProfileInfo {...emptyProps} />);
    it('renders wrapper', () => {
      const wrapper = component.find(`.${classes.wrapper}`);
      expect(wrapper.length).toBe(1);
    });

    it('renders avatar with placeholder', () => {
      const avatar = component.find(`.${classes.avatar}`);
      expect(avatar.length).toBe(1);
      const a = 3;
      // @ts-ignore
      expect(avatar.props().style.backgroundImage).toEqual(expect.stringContaining(avatarPlaceholder));
    });

    it('renders with empty name', () => {
      const name = component.find(`.${classes.name}`);
      expect(name.length).toBe(1);
      expect(name.text()).toBe('');
    });

    it('renders with empty email', () => {
      const email = component.find(`.${classes.email}`);
      expect(email.length).toBe(1);
      expect(email.text()).toBe('');
    });
  });

  describe('renders with sample props', () => {
    const component = shallow(<ProfileInfo {...sampleProps} />);
    it('renders wrapper', () => {
      const wrapper = component.find(`.${classes.wrapper}`);
      expect(wrapper.length).toBe(1);
    });
    it('renders avatar', () => {
      const avatar = component.find(`.${classes.avatar}`);
      expect(avatar.length).toBe(1);
      // @ts-ignore
      expect(avatar.props().style.backgroundImage).toEqual(expect.stringContaining(sampleProps.avatar));
    });

    it('renders name', () => {
      const name = component.find(`.${classes.name}`);
      expect(name.length).toBe(1);
      expect(name.text()).toBe(sampleProps.name);
    });

    it('renders with email', () => {
      const email = component.find(`.${classes.email}`);
      expect(email.length).toBe(1);
      expect(email.text()).toBe(sampleProps.email);
    });
  });
});

describe('ProfileInfo styles', () => {
  it('should contain principle classes', () => {
    expect(profileInfoStyles).toBeDefined();
    classesKeys.forEach((keyValue) => {
      // @ts-ignore
      expect(profileInfoStyles[keyValue]).toBeDefined();
    });
  });
});

describe('ProfileInfo decorators', () => {
  test.todo('Check classes to be passed to the child component');
  test.todo('Check data to be passed from redux store (avatar, name, mail)');
});
