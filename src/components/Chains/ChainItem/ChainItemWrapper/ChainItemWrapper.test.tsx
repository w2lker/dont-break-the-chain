import { mount, shallow } from 'enzyme';
import React from 'react';

import ChainItemWrapper, { IChainItemWrapper } from './ChainItemWrapper';
import chainItemWrapperStyles from './ChainItemWrapper.styles';

import { keys } from '@material-ui/core/styles/createBreakpoints';
import { colors } from '../../../../contants/colors';
import { habitStatus } from '../../../../models/habit';
import { arrayWithout } from '../../../../utils/testingUtils';

const classes = {
  wrapper: 'chain-item-wrapper',
  wrapperStart: 'chain-item-wrapper-start',
  wrapperEnd: 'chain-item-wrapper-end',
  wrapperIncompleteToday: 'chain-item-wrapper-incomplete-today',
  wrapperComplete: 'chain-item-wrapper-complete',
  customBackground: 'chain-item-wrapper-custom-background',
  triangleItem: 'chain-item-wrapper-triangle-item',
  triangleLeft: 'chain-item-wrapper-triangle-left',
  triangleRight: 'chain-item-wrapper-triangle-right',
};

describe('Chain Item Wrapper', () => {
  const emptyProps: IChainItemWrapper = {
    classes,
    // @ts-ignore
    status: null,
    // @ts-ignore
    color: null,
  };

  const wrapperClassNames = [
    'incomplete',
    classes.wrapperComplete,
    'paused',
    classes.wrapperStart,
    classes.wrapperEnd,
    classes.wrapperIncompleteToday,
  ];

  const triangleClasses = [classes.triangleLeft, classes.triangleRight, classes.customBackground].map(item => `.${item}`);

  it('match snapshot', () => {
    const snapshotProps: IChainItemWrapper = {
      classes,
      // @ts-ignore
      status: habitStatus.incompleteToday,
      color: 'deepPurple',
    };
    const component = mount(<ChainItemWrapper {...snapshotProps} />);
    expect(component.debug()).toMatchSnapshot();
  });
  describe('Renders with empty props', () => {
    const component = shallow(<ChainItemWrapper {...emptyProps} />);
    it('renders wrapper', () => {
      expect(component.find(`div.${classes.wrapper}`).exists()).toBeTruthy();
    });
    it("doesn't render wrapper classes", () => {
      const habitWrapper = component.find(`.${classes.wrapper}`);
      wrapperClassNames.forEach(className => {
        expect(habitWrapper.hasClass(className)).toBeFalsy();
      });
    });
    it('skips triangles render', () => {
      triangleClasses.forEach(className => {
        expect(component.find(className).exists()).toBeFalsy();
      });
    });
    it('applies default color value', () => {
      const defaultStyle = {
        backgroundColor: colors.blue[100],
      };
      expect(component.find(`.${classes.wrapper}`).props().style).toEqual(defaultStyle);
    });
  });
  describe('Renders incomplete today status', () => {
    const newProps: IChainItemWrapper = {
      classes,
      // @ts-ignore
      status: habitStatus.incompleteToday,
      color: 'green',
    };
    const component = shallow(<ChainItemWrapper {...newProps} />);
    it('renders wrapper', () => {
      expect(component.find(`div.${classes.wrapper}`).exists()).toBeTruthy();
      expect(component.find(`.${classes.wrapper}`).hasClass(classes.wrapperIncompleteToday)).toBeTruthy();
    });
    it("doesn't render wrapper classes", () => {
      const habitWrapper = component.find(`.${classes.wrapper}`);
      const incompleteClasses = arrayWithout(wrapperClassNames, classes.wrapperIncompleteToday);
      incompleteClasses.forEach(className => {
        expect(habitWrapper.hasClass(className)).toBeFalsy();
      });
    });
    it('executes triangles render', () => {
      triangleClasses.forEach(className => {
        expect(component.find(className).exists()).toBeTruthy();
      });
    });
  });
  it('Renders other statuses', () => {
    const getProps = (status: number): IChainItemWrapper => ({
      classes,
      // @ts-ignore
      status,
      color: 'green',
    });

    const mapOtherStatusesToClasses = {
      incomplete: 'incomplete',
      complete: 'wrapperComplete',
      paused: 'paused',
      start: 'wrapperStart',
      end: 'wrapperEnd',
    };
    const getClassname = (status: string) => {
      // @ts-ignore
      const mappedStatus = mapOtherStatusesToClasses[status];
      // @ts-ignore
      const statusToClass = classes[mappedStatus];
      return statusToClass || status;
    };

    Object.keys(mapOtherStatusesToClasses).forEach(status => {
        // @ts-ignore
      const component = shallow(<ChainItemWrapper {...getProps(habitStatus[status])} />);
      const otherClasses = arrayWithout(wrapperClassNames, getClassname(status));
      otherClasses.forEach(className => {
        expect(component.find(`.${classes.wrapper}`).hasClass(className)).toBeFalsy();
      });
      triangleClasses.forEach(className => {
        expect(component.find(className).exists()).toBeFalsy();
      });
    });
  });
});

describe('Chain Item Wrapper Styles', () => {
  it('should contain principle classes', () => {
    expect(chainItemWrapperStyles).toBeDefined();
    Object.keys(classes).forEach(item => {
      // @ts-ignore
      expect(chainItemWrapperStyles[item]).toBeDefined();
    });
  });
});

describe('Chain Item Wrapper Decorated', () => {
  const props: IChainItemWrapper = {
    classes,
    // @ts-ignore
    status: habitStatus.incompleteToday,
    color: 'deepPurple',
  };
  it('provides styled classes from decorators', () => {
    const component = mount(<ChainItemWrapper {...props} />);
      // @ts-ignore
    const assignedClasses = component.find('ChainItemWrapper').props().classes;
    expect(assignedClasses).toBeDefined();
    Object.keys(classes).forEach(item => {
      expect(assignedClasses[item]).toBeDefined();
    });
  });
});
