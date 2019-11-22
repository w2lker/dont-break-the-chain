import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { mount, render, shallow } from 'enzyme';

import NavigationMenuItem, { DecoratedNavLink, INavMenuItemProps } from './NavigationMenuItem';
import NavigationMenuItemDecorated from './NavigationMenuItem.decorators';
import navigationMenuItemStyles from './NavigationMenuItem.styles';

const classes = {
  root: 'nav-menu-item-root',
  label: 'nav-menu-item-label',
  icon: 'nav-menu-item-icon',
};

const classesKeys = Object.keys(classes);

describe('DecoratedNavLink component renders', () => {
  const definedActiveClass = 'Mui-selected';
  // @ts-ignore
  const componentWithRouter = mount(
    <MemoryRouter>
      <DecoratedNavLink to="some-url"/>
    </MemoryRouter>,
  );
  const navLink = componentWithRouter.find('NavLink');

  it('match snapshot', () => {
    expect(componentWithRouter.debug()).toMatchSnapshot();
  });

  it('navLink receive activeClass', () => {
    // @ts-ignore
    const activeClass = navLink.props().activeClassName;
    expect(activeClass).toBe(definedActiveClass);
  });
});

describe('NavigationMenuItem Component', () => {

  const propsSample: INavMenuItemProps = {
    classes,
    label: 'habits',
    url: '/habits',
    icon: 'flag-checkered',
  };

  it('match snapshot', () => {
    const wrappedComponent = mount(
      <MemoryRouter>
        <NavigationMenuItem {...propsSample}/>
      </MemoryRouter>,
    );
    expect(wrappedComponent.debug()).toMatchSnapshot();
  });

  describe('Renders with empty props', () => {
    const props: INavMenuItemProps = {
      classes,
      label: '',
      url: '/',
      icon: '',
    };
    const wrappedComponent = mount(
      <MemoryRouter>
        <NavigationMenuItem {...props}/>
      </MemoryRouter>,
    );

    it('pass NavLink wrapper to BottomNavigationAction component', () => {
      // Depend on BottomNavigationAction root class
      const navLink = wrappedComponent.find('DecoratedNavLink');
      expect(navLink.length).toBe(1);
      expect(navLink.hasClass('MuiBottomNavigationAction-root')).toBeTruthy();
    });

    it('pass MaterialDesignIcon component', () => {
      const icon = wrappedComponent.find('MaterialDesignIcon');
      expect(icon.length).toBe(1);
      expect(icon.hasClass(classes.icon)).toBeTruthy();
    });

    it('pass classes to BottomNavigationAction', () => {
      const bottomNavigation = wrappedComponent.find('WithStyles(ForwardRef(BottomNavigationAction))');
      expect(bottomNavigation.length).toBe(1);
      // @ts-ignore
      expect(bottomNavigation.props().classes).toMatchObject({
        root: classes.root,
        label: classes.label,
      });
    });
  });

  describe('Renders with sample props', () => {

    const wrappedComponent = mount(
      <MemoryRouter>
        <NavigationMenuItem {...propsSample}/>
      </MemoryRouter>,
    );

    it('passes NavLink wrapper to BottomNavigationAction component', () => {
      // Depend on BottomNavigationAction root class
      const navLink = wrappedComponent.find('DecoratedNavLink');
      expect(navLink.length).toBe(1);
    });

    it('passes icon to MaterialDesignIcon component', () => {
      const icon = wrappedComponent.find('MaterialDesignIcon');
      expect(icon.length).toBe(1);
      expect(icon.hasClass(classes.icon)).toBeTruthy();
      expect(icon.props().name).toBe(propsSample.icon);
    });

  });

});

describe('NavigationMenuItem Styles', () => {
  it('exists', () => {
    expect(navigationMenuItemStyles).toBeDefined();
  });
  classesKeys.forEach((keyValue) => {
    it(`has ${keyValue} class styles`, () => {
      // @ts-ignore
      expect(navigationMenuItemStyles[keyValue]).toBeDefined();
    });
  });
});

describe('NavigationMenuItem Decorated', () => {
  const props: INavMenuItemProps = {
    label: 'habits',
    url: '/habits',
    icon: 'flag-checkered',
  };

  const wrappedComponent = mount(
    <MemoryRouter>
      <NavigationMenuItemDecorated {...props}/>
    </MemoryRouter>,
  );
  const component = wrappedComponent.find('NavigationMenuItem');
  it('has root object', () => {
    expect(component.length).toBe(1);
  });
  // @ts-ignore
  const assignedClasses = component.props().classes;
  it('has classes map', () => {
    expect(assignedClasses).toBeDefined();
  });
  classesKeys.forEach((keyValue) => {
    it(`has ${keyValue} class attribute`, () => {
      expect(assignedClasses[keyValue]).toBeDefined();
    });
  });
});
