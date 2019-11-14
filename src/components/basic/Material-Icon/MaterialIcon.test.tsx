import React from "react";
import { shallow, render } from "enzyme";
import MaterialDesignIcon, { MaterialDesignIconProps } from "./MaterialIcon";

describe('Material Icon Component', () => {
  const props: MaterialDesignIconProps = {
    name: 'sample',
    className: '',
    style: {}
  };

  it('match snapshot', () => {
    const component = shallow(<MaterialDesignIcon {...props} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('renders with icon name', () => {
    const component = shallow(<MaterialDesignIcon {...props} />);
    expect(component.find('span').hasClass('material-icon')).toEqual(true);
    expect(component.find('span').hasClass('mdi')).toEqual(true);
    expect(component.find('span').hasClass(`mdi-${props.name}`)).toEqual(true);
  });

  it('skips render with empty icon name', () => {
    const newProps: MaterialDesignIconProps = {
      name: ''
    };
    const component = shallow(<MaterialDesignIcon {...newProps} />);
    expect(component).toEqual({});
  });

  it('renders with external class', () => {
    const newProps: MaterialDesignIconProps = {
      ...props,
      className: 'sample-class',
    };
    const component = shallow(<MaterialDesignIcon {...newProps} />);
    // @ts-ignore
    expect(component.find('span').hasClass(newProps.className)).toBe(true);
  });

  it('renders with external styles', () => {
    const attribute = 'attribute';
    const newProps: MaterialDesignIconProps = {
      ...props,
      style: {
        [attribute]: 'the-test-value'
      },
    };
    const component = render(<MaterialDesignIcon {...newProps} />);
    const styles = component.get(0).attribs.style;
    expect(styles).toBe(`${attribute}:${newProps.style[attribute]}`)
  });
});
