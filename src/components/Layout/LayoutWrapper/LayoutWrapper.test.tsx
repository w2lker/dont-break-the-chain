import React from 'react';

import { mount, render, shallow } from 'enzyme';
import LayoutWrapper from './LayoutWrapper';
import LayoutWrapperDecorated from './LayoutWrapper.decorators';
import layoutWrapperStyles from './LayoutWrapper.styles';

const classes = {
  root: 'layout-wrapper-root',
  body: 'layout-wrapper-body',
};
const classesKeys = Object.keys(classes);

describe('LayoutWrapper', () => {
  const props = {
    classes,
    children: <div className="test-child" />,
  };

  const component = shallow(<LayoutWrapper {...props} />);
  it('render child component', () => {
    expect(component.find('.test-child').length).toBe(1);
  });
  it('has styles classes', () => {
    expect(component.find(`.${classes.root}`).length).toBe(1);
    expect(component.find(`.${classes.body}`).length).toBe(1);
  });
});

describe('LayoutWrapper styles', () => {
  classesKeys.forEach((classKey) => {
    it(`has "${classKey}" property`, () => {
      // @ts-ignore
      expect(layoutWrapperStyles[classKey]).toBeDefined();
    });
  });
});

describe('LayoutWrapper decorators', () => {
  const decoratedComponent = shallow(<LayoutWrapperDecorated />);

  const component = decoratedComponent.find('LayoutWrapper');
  it('renders decorated component', () => {
    expect(component.length).toBe(1);
  });
  // @ts-ignore
  const assignedClasses = component.props().classes;
  it('has classes props assigned', () => {
    expect(assignedClasses).toBeDefined();
  });

  classesKeys.forEach((classKey) => {
    it(`classes has "${classKey}" property`, () => {
      // @ts-ignore
      expect(assignedClasses[classKey]).toBeDefined();
    });
  });

});
