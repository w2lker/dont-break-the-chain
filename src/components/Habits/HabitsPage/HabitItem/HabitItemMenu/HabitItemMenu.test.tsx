import cases from 'jest-in-case';
import React from 'react';

import { mount, shallow } from 'enzyme';
import { List } from 'immutable';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { colors } from '../../../../../contants/colors';
import HabitItemMenu, { IHabitItemMenuProps } from './HabitItemMenu';
import HabitItemMenuDecorated from './HabitItemMenu.decorators';
import habitItemMenuStyles from './HabitItemMenu.styles';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const setupTests = () => {
  const classes = {
    wrapper: 'habitItemMenu-wrapper',
  };
  const classesKeys = Object.keys(classes);
  const emptyProps: IHabitItemMenuProps = {
    classes,
    onCheck: jest.fn(),
    onUncheck: jest.fn(),
    onPause: jest.fn(),
    onDelete: jest.fn(),
  };

  const sampleProps: IHabitItemMenuProps = {
    ...emptyProps,
    content: {
      id: 1,
      name: 'Sample habit',
      color: colors.blue,
      icon: 'sample-icon',
      currentChain: 1,
      longestChain: 2,
      dates: List(),
    },
  };

  const propsCleaner = {
    classes: null,
    onCheck: null,
    onUncheck: null,
    onPause: null,
    onDelete: null,
  };

  const wrappedComponent = (props: IHabitItemMenuProps) => (
    <MemoryRouter>
      <HabitItemMenu {...props} />
    </MemoryRouter>
  );

  const store = mockStore({});

  const wrappedComponentDecorated = (props: IHabitItemMenuProps) => (
    <MemoryRouter>
      <Provider store={store}>
        <HabitItemMenuDecorated {...props} />
      </Provider>
    </MemoryRouter>
  );

  return { classes, classesKeys, emptyProps, sampleProps, propsCleaner, wrappedComponentDecorated };
};

describe('HabitItemMenu component', () => {

  it('match snapshot', () => {
    const { sampleProps } = setupTests();
    const component = shallow(<HabitItemMenu {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('skips render with empty props', () => {
    const { emptyProps } = setupTests();
    const component = shallow(<HabitItemMenu {...emptyProps} />);
    expect(component.type()).toEqual(null);
  });

  const menuCasesTitle = 'Renders checked menu';
  const menuCasesTester = (opts: typeof menuCasesData[0]) => {
    const { sampleProps } = setupTests();
    const component = shallow(<HabitItemMenu {...sampleProps} />);
    // @ts-ignore
    const menu = component.find(`#habit-menu-${sampleProps.content.id}`).children();
    const menuItemProps = menu.get(opts.index);
    expect(menuItemProps.props.icon).toBe(opts.icon);
  };

  const menuCasesData = [
    { name: 'Status menu item is rendered', index: 0, icon: 'check' },
    { name: 'Edit menu item is rendered', index: 1, icon: 'pencil' },
    { name: 'Pause menu item is rendered', index: 2, icon: 'pause' },
    { name: 'Delete menu item is rendered', index: 3, icon: 'delete' },
  ];

  cases(menuCasesTitle, menuCasesTester, menuCasesData);

});

describe('HabitItemMenu styles', () => {
  it('contains principle classes', () => {
    const { classesKeys } = setupTests();
    expect(habitItemMenuStyles).toBeDefined();
    classesKeys.forEach((keyValue) => {
      // @ts-ignore
      expect(habitItemMenuStyles[keyValue]).toBeDefined();
    });
  });
});

describe('HabitItemMenu decorators', () => {
  test.todo('provides classes to the component');
});
