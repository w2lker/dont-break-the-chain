import { mount, shallow } from 'enzyme';
import React from 'react';

import ChainItemScore, { IChainItemScoreProps } from './ChainItemScore';
import ChainItemScoreDecorated from './ChainItemScore.decorators';
import chainItemScoreStyles from './ChainItemScore.styles';

import { colors } from '../../../../contants/colors';
import { habitStatus } from '../../../../models/habit';

const classes = {
  root: 'chain-item-score-root',
};

describe('Chain Item Score', () => {
  const emptyProps: IChainItemScoreProps = {
    classes,
      // @ts-ignore
    status: null,
      // @ts-ignore
    color: null,
      // @ts-ignore
    value: null,
  };

  const sampleProps: IChainItemScoreProps = {
    classes,
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
      expect(component.find('span').hasClass(classes.root)).toBe(true);
      expect(component.find('span').hasClass('hidden')).toBe(true);
      expect(component.find('span').hasClass('bright')).toBe(false);
    });

    it('assigns default color', () => {
      const emptyStateStyles = {
        color: colors.blue[400],
      };
      const spanStyles = component.find(`.${classes.root}`).props().style;
      expect(spanStyles).toEqual(emptyStateStyles);
    });

    it('hides score value output', () => {
      expect(component.find(`.${classes.root}`).text()).toBe('');
    });
  });

  describe('Sample props rendering', () => {
    const component = shallow(<ChainItemScore {...sampleProps}/>);
    it("doesn't assign hidden class", () => {
      expect(component.find('span').hasClass(classes.root)).toBe(true);
      expect(component.find('span').hasClass('hidden')).toBe(false);
    });
    it('outputs score value', () => {
      expect(component.find(`.${classes.root}`).text()).toBe(`+${sampleProps.value}`);
    });
    it('assigns correct color', () => {
      const sampleStyle = {
        color: colors[sampleProps.color][400],
      };
      expect(component.find(`.${classes.root}`).props().style).toEqual(sampleStyle);
    });
  });

  describe('Rendering with high score value', () => {
    const newProps = {
      ...sampleProps,
      value: 15,
    };
    const component = shallow(<ChainItemScore {...newProps}/>);
    it('assigns accent class', () => {
      expect(component.find('span').hasClass(classes.root)).toBe(true);
      expect(component.find('span').hasClass('hidden')).toBe(false);
      expect(component.find('span').hasClass('bright')).toBe(true);
    });

    it('assigns correct color', () => {
      const sampleStyle = {
        color: colors[sampleProps.color][500],
      };
      expect(component.find(`.${classes.root}`).props().style).toEqual(sampleStyle);
    });
  });
});

describe('Chain Item Score Styles', () => {
  it('should contain principle fields', () => {
    expect(chainItemScoreStyles).toBeDefined();
    expect(chainItemScoreStyles.root).toBeDefined();
  });
});

describe('Chain Item Score Decorated', () => {
  const props: IChainItemScoreProps = {
    // @ts-ignore
    status: habitStatus.complete,
    // @ts-ignore
    color: 'green',
    value: 3,
  };
  it('provides styled classes from decorators', () => {
    const component = mount(<ChainItemScoreDecorated {...props} />);
    // @ts-ignore
    const assignedClasses = component.find('ChainItemScore').props().classes;
    expect(assignedClasses).toBeDefined();
    expect(assignedClasses.root).toBeDefined();
  });
});
