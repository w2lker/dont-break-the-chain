import React from 'react';

import { mount, render, shallow } from 'enzyme';
import MaterialDesignIcon, { IMaterialDesignIconProps } from './MaterialIcon';

describe('Material Icon Component', () => {
  const props: IMaterialDesignIconProps = {
    name: 'sample',
    className: '',
    style: {},
  };

  it('match snapshot', () => {
    const component = mount(<MaterialDesignIcon {...props} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('renders with icon name', () => {
    const component = shallow(<MaterialDesignIcon {...props} />);
    expect(component.find('span').hasClass('material-icon')).toEqual(true);
    expect(component.find('span').hasClass('mdi')).toEqual(true);
    expect(component.find('span').hasClass(`mdi-${props.name}`)).toEqual(true);
  });

  it('skips render with empty icon name', () => {
    const newProps: IMaterialDesignIconProps = {
      name: '',
    };
    const component = shallow(<MaterialDesignIcon {...newProps} />);
    expect(component).toEqual({});
  });

  it('renders with external class', () => {
    const newProps: IMaterialDesignIconProps = {
      ...props,
      className: 'sample-class',
    };
    const component = shallow(<MaterialDesignIcon {...newProps} />);
    // @ts-ignore
    expect(component.find('span').hasClass(newProps.className)).toBe(true);
  });

  it('renders with external styles', () => {
    const attribute = 'attribute';
    const newProps: IMaterialDesignIconProps = {
      ...props,
      style: {
        [attribute]: 'the-test-value',
      },
    };
    const component = render(<MaterialDesignIcon {...newProps} />);
    const styles = component.get(0).attribs.style;
    expect(styles).toBe(`${attribute}:${newProps.style[attribute]}`);
  });
});
