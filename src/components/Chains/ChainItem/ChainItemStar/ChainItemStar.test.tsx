import { mount, shallow } from 'enzyme';
import React from 'react';

import ChainItemStar, { IChainItemStarProps } from './ChainItemStar';

import { colors } from '../../../../contants/colors';

describe('Chain Item Score', () => {
  const emptyProps: IChainItemStarProps = {
    // @ts-ignore
    color: null,
    // @ts-ignore
    value: null,
  };

  const sampleProps: IChainItemStarProps = {
    color: 'green',
    value: 6,
  };

  it('matches snapshot', () => {
    const component = mount(<ChainItemStar {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('skips render without value', () => {
    const newProps: IChainItemStarProps = {
      ...sampleProps,
      // @ts-ignore
      value: null,
    };
    const component = shallow(<ChainItemStar {...newProps} />);
    expect(component.isEmptyRender()).toBe(true);
  });

  it('renders with default color', () => {
    const newProps: IChainItemStarProps = {
      ...sampleProps,
        // @ts-ignore
      color: null,
    };
    const sampleStyle = {
      color: colors.blue[500],
    };
    const component = shallow(<ChainItemStar {...newProps} />);
    expect(component.find('MaterialDesignIcon').props().style).toEqual(sampleStyle);
  });

  describe('Sample props rendering', () => {
    const component = shallow(<ChainItemStar {...sampleProps}/>);
    it('renders icon component ', () => {
      expect(component.find('MaterialDesignIcon').props().name).toBe('star');
    });
    it('assigns correct color', () => {
      const sampleStyle = {
        color: colors[sampleProps.color][500],
      };
      expect(component.find('MaterialDesignIcon').props().style).toEqual(sampleStyle);
    });
  });
});
