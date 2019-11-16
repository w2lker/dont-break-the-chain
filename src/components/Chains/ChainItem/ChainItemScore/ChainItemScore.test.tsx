import { mount, shallow } from 'enzyme';
import React from 'react';

import ChainItemScore, { IChainItemScoreProps } from './ChainItemScore';

import { colors } from '../../../../contants/colors';
import { habitStatus } from '../../../../models/habit';

describe('Chain Item Score', () => {
  const emptyProps: IChainItemScoreProps = {
      // @ts-ignore
    status: null,
      // @ts-ignore
    color: null,
      // @ts-ignore
    value: null,
  };

  const sampleProps: IChainItemScoreProps = {
      // @ts-ignore
    status: habitStatus.complete,
    // @ts-ignore
    color: 'green',
    value: 3,
  };

  it('matches snapshot', () => {
    const component = mount(<ChainItemScore {...sampleProps} />);
    expect(component.debug()).toMatchSnapshot();
  });

  describe('Empty props rendering', () => {
    const component = shallow(<ChainItemScore {...emptyProps} />);
    it('assigns hidden classname', () => {
      expect(component.find('span').hasClass('score-wrapper')).toBe(true);
      expect(component.find('span').hasClass('hidden')).toBe(true);
      expect(component.find('span').hasClass('bright')).toBe(false);
    });

    it('assigns default color', () => {
      const emptyStateStyles = {
        color: colors.blue[400],
      };
      const spanStyles = component.find('.score-wrapper').props().style;
      expect(spanStyles).toEqual(emptyStateStyles);
    });

    it('hides score value output', () => {
      expect(component.find('.score-wrapper').text()).toBe('');
    });
  });

  describe('Sample props rendering', () => {
    const component = shallow(<ChainItemScore {...sampleProps}/>);
    it("doesn't assign hidden class", () => {
      expect(component.find('span').hasClass('score-wrapper')).toBe(true);
      expect(component.find('span').hasClass('hidden')).toBe(false);
    });
    it('outputs score value', () => {
      expect(component.find('.score-wrapper').text()).toBe(`+${sampleProps.value}`);
    });
    it('assigns correct color', () => {
      const sampleStyle = {
        color: colors[sampleProps.color][400],
      };
      expect(component.find('.score-wrapper').props().style).toEqual(sampleStyle);
    });
  });

  describe('Rendering with high score value', () => {
    const newProps = {
      ...sampleProps,
      value: 15,
    };
    const component = shallow(<ChainItemScore {...newProps}/>);
    it('assigns accent class', () => {
      expect(component.find('span').hasClass('score-wrapper')).toBe(true);
      expect(component.find('span').hasClass('hidden')).toBe(false);
      expect(component.find('span').hasClass('bright')).toBe(true);
    });

    it('assigns correct color', () => {
      const sampleStyle = {
        color: colors[sampleProps.color][500],
      };
      expect(component.find('.score-wrapper').props().style).toEqual(sampleStyle);
    });
  });
});
