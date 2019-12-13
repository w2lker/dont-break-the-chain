import React from 'react';

import { mount } from 'enzyme';
import cases from 'jest-in-case';
import { MemoryRouter } from 'react-router-dom';

import NavigationMenu from './NavigationMenu';
import NavigationMenuDecorated from './NavigationMenu.decorators';

import defaultTexts from '../../../contants/defaultTexts';
import { routing } from '../../../contants/routing';
import { defaultIcons } from '../../../contants/ui';
import navigationMenuStyles from './NavigationMenu.styles';

const testSetup = () => {
  const classes = {
    root: 'navigation-menu-root',
  };
  const classesKeys = Object.keys(classes);
  const props = {
    classes,
  };
  const wrappedComponent = mount(
    <MemoryRouter>
      <NavigationMenu {...props} />
    </MemoryRouter>,
  );
  return { classes, classesKeys, wrappedComponent };
};

describe('NavigationMenu', () => {

  it('match snapshot', () => {
    const { wrappedComponent } = testSetup();
    expect(wrappedComponent.debug()).toMatchSnapshot();
  });

  it('renders 3 menu items', () => {
    const { wrappedComponent } = testSetup();
    const menuItems = wrappedComponent.find('NavigationMenuItem');
    expect(menuItems.length).toBe(3);
  });

  const texts = defaultTexts.navigationMenu;
  const icons = defaultIcons.navigationMenu;

  const casesTitle = 'Testing rendering props of MenuItems';

  const casesTester = (opts: typeof casesData[0]) => {
    const { wrappedComponent } = testSetup();
    const item = wrappedComponent.find('NavigationMenuItem').at(opts.id);
    expect(item).toBeDefined();
    expect(item.props()).toMatchObject({
      // @ts-ignore
      url: opts.url || routing[opts.def],
      // @ts-ignore
      label: texts[opts.def],
      // @ts-ignore
      icon: icons[opts.def],
    });
  };

  const casesData = [
    { name: 'Chains is rendered', id: 0, def: 'chains' },
    { name: 'Habits is rendered', id: 1, def: 'habits', url: routing.habits.root },
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
