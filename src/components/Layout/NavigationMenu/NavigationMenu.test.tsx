import React from 'react';

import { mount, render, shallow } from 'enzyme';
import cases from 'jest-in-case';
import { MemoryRouter } from 'react-router-dom';

import NavigationMenu from './NavigationMenu';
import NavigationMenuDecorated from './NavigationMenu.decorators';

import defaultTexts from '../../../contants/defaultTexts';
import { routing } from '../../../contants/routing';
import { defaultIcons } from '../../../contants/ui';
import navigationMenuStyles from './NavigationMenu.styles';

const classes = {
  root: 'navigation-menu-root',
};

const classesKeys = Object.keys(classes);

describe('NavigationMenu', () => {
  const props = {
    classes,
  };

  const wrappedComponent = mount(
    <MemoryRouter>
      <NavigationMenu {...props} />
    </MemoryRouter>,
  );

  it('match snapshot', () => {
    expect(wrappedComponent.debug()).toMatchSnapshot();
  });

  it('renders 3 menu items', () => {
    const menuItems = wrappedComponent.find('NavigationMenuItem');
    expect(menuItems.length).toBe(3);
  });

  const texts = defaultTexts.navigationMenu;
  const icons = defaultIcons.navigationMenu;

  const casesTitle = 'Testing rendering props of MenuItems';

  const casesTester = (opts: typeof casesData[0]) => {
    const item = wrappedComponent.find('NavigationMenuItem').at(opts.id);
    expect(item).toBeDefined();
    expect(item.props()).toMatchObject({
      // @ts-ignore
      url: routing[opts.def],
      // @ts-ignore
      label: texts[opts.def],
      // @ts-ignore
      icon: icons[opts.def],
    });
  };

  const casesData = [
    { name: 'Chains is rendered', id: 0, def: 'chains' },
    { name: 'Habits is rendered', id: 1, def: 'habits' },
    { name: 'Profile is rendered', id: 2, def: 'profile' },
  ];

  cases(casesTitle, casesTester, casesData);
});

describe('NavigationMenu Styles', () => {
  it('has root class', () => {
    expect(navigationMenuStyles.root).toBeDefined();
  });
});

describe('NavigationMenu Decorated', () => {
  const wrappedComponent = mount(
      <MemoryRouter>
        <NavigationMenuDecorated />
      </MemoryRouter>,
    );
  const component = wrappedComponent.find('NavigationMenu');
  it('has root object', () => {
    expect(component.length).toBe(1);
  });
    // @ts-ignore
  const assignedClasses = component.props().classes;
  it('has root class in classes map', () => {
    expect(assignedClasses.root).toBeDefined();
  });
});
