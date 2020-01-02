import React from 'react';

import { mount, shallow } from 'enzyme';

import { MemoryRouter } from 'react-router-dom';
import HabitItemMenuContent, { IHabitItemMenuContentProps } from './HabitItemMenuContent';
import HabitItemMenuContentDecorated from './HabitItemMenuContent.decorators';
import habitItemMenuContentStyles from './HabitItemMenuContent.styles';

const setupTests = () => {
  const classes = {
    root: 'habitItemMenuContent-wrapper',
    icon: 'habitItemMenuContent-icon',
    text: 'habitItemMenuContent-text',
  };

  const classesKeys = Object.keys(classes);

  const sampleProps: IHabitItemMenuContentProps = {
    classes,
    icon: 'sample-icon',
    title: 'sample-text',
    action: jest.fn(),
  };

  const sampleLinkProps: IHabitItemMenuContentProps = {
    ...sampleProps,
    action: undefined,
    url: 'some-link',
  };

  const wrappedComponent = (props: IHabitItemMenuContentProps) => (
    <MemoryRouter>
      <HabitItemMenuContent {...props}/>
    </MemoryRouter>
  );

  return { classes, classesKeys, sampleProps, sampleLinkProps, wrappedComponent };
};

describe('HabitItemMenuContent component', () => {

  it('match snapshot', () => {
    const { sampleProps, sampleLinkProps, wrappedComponent } = setupTests();
    const componentWithAction = mount(wrappedComponent(sampleProps));
    expect(componentWithAction.debug()).toMatchSnapshot();
    const componentWithLink = mount(wrappedComponent(sampleLinkProps));
    expect(componentWithLink.debug()).toMatchSnapshot();
  });

  it('renders icon', () => {
    const { sampleProps, classes } = setupTests();
    const component = shallow(<HabitItemMenuContent {...sampleProps} />);
    const iconProps = component.find('MaterialDesignIcon').props();
    expect(iconProps.className).toBe(classes.icon);
  });

  it('renders title', () => {
    const { sampleProps, classes } = setupTests();
    const component = shallow(<HabitItemMenuContent {...sampleProps} />);
    const title = component.find(`.${classes.text}`);
    expect(title.length).toBe(1);
    const content = title.props().children;
    expect(content).toBe(sampleProps.title);
  });

  it('perform click', () => {
    const { sampleProps } = setupTests();
    const component = shallow(<HabitItemMenuContent {...sampleProps} />);
    const menuItem = component.find('WithStyles(ForwardRef(MenuItem))');
    expect(menuItem.length).toBe(1);
    menuItem.simulate('click');
    expect(sampleProps.action).toBeCalledTimes(1);
  });

  it('creates link', () => {
    const { sampleLinkProps, wrappedComponent } = setupTests();
    const component = mount(wrappedComponent(sampleLinkProps));
    const link = component.find('Link');
    const dest = link.props().to;
    expect(dest).toBe(sampleLinkProps.url);
  });
});

describe('HabitItemMenuContent styles', () => {
  it('contains principle classes', () => {
    const { classesKeys } = setupTests();
    expect(habitItemMenuContentStyles).toBeDefined();
    classesKeys.forEach((keyValue) => {
      // @ts-ignore
      expect(habitItemMenuContentStyles[keyValue]).toBeDefined();
    });
  });
});

describe('HabitItemMenuContent decorators', () => {

  it('provides styled classes from decorators', () => {
    const { sampleProps, classesKeys } = setupTests();
    const props = {
      ...sampleProps,
      classes: undefined,
    };

    const component = mount(<HabitItemMenuContentDecorated {...props} />);
    // @ts-ignore
    const assignedClasses = component.find('HabitItemMenuContent').props().classes;
    classesKeys.forEach(keyValue => {
      expect(assignedClasses[keyValue]).toBeDefined();
    });
  });
});
