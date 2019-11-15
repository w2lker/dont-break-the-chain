import React from "react";
import { shallow, mount, render } from "enzyme";
import ChainItemWrapper, {IChainItemWrapper} from "./ChainItemWrapper";
import {colors} from "../../../../contants/colors";
import {habitStatus} from "../../../../models/habit";
import {arrayWithout} from "../../../../utils/testUtils";

describe('Chain Item Wrapper', () => {
  const emptyProps: IChainItemWrapper = {
    // @ts-ignore
    status: null,
    // @ts-ignore
    color: null
  };

  const wrapperClassNames = ['incomplete', 'complete', 'paused', 'start', 'end', 'incomplete-today'];
  const triangleClasses = ['.triangleLeft', '.triangleRight', '.custom-background'];

  it('match snapshot', () => {
    const snapshotProps: IChainItemWrapper = {
      status: habitStatus.incompleteToday,
      color: "deepPurple",
    };
    const component = mount(<ChainItemWrapper {...snapshotProps} />);
    expect(component.debug()).toMatchSnapshot();
  });
  describe('Renders with empty props', () => {
    const component = shallow(<ChainItemWrapper {...emptyProps} />);
    it('renders wrapper', () => {
      expect(component.find('div.habit-chain-wrapper').exists()).toBeTruthy();
    });
    it("doesn't render wrapper classes", () => {
      const habitWrapper = component.find('.habit-chain-wrapper');
      wrapperClassNames.forEach( className => {
        expect(habitWrapper.hasClass(className)).toBeFalsy();
      });
    });
    it('skips triangles render', () => {
      triangleClasses.forEach( className => {
        expect(component.find(className).exists()).toBeFalsy();
      });
    });
    it('applies default color value', () => {
        const defaultStyle = {
          backgroundColor: colors['blue'][100],
        };
        expect(component.find('.habit-chain-wrapper').props().style).toEqual(defaultStyle);
    });
  });
  describe('Renders incomplete today status', () => {
    const newProps: IChainItemWrapper = {
      status: habitStatus.incompleteToday,
      color: "green",
    };
    const component = shallow(<ChainItemWrapper {...newProps} />);
    it('renders wrapper', () => {
      expect(component.find('div.habit-chain-wrapper').exists()).toBeTruthy();
      expect(component.find('.habit-chain-wrapper').hasClass('incomplete-today')).toBeTruthy();
    });
    it("doesn't render wrapper classes", () => {
      const habitWrapper = component.find('.habit-chain-wrapper');
      const incompleteClasses = arrayWithout(wrapperClassNames, 'incomplete-today');
      incompleteClasses.forEach( className => {
        expect(habitWrapper.hasClass(className)).toBeFalsy();
      });
    });
    it("executes triangles render", () => {
      triangleClasses.forEach( className => {
        expect(component.find(className).exists()).toBeTruthy();
      });
    });
  });
  it('Renders other statuses', () => {
      const getProps = (status: number): IChainItemWrapper => ({
        status,
        color: 'green'
      });

      const statuses = ['incomplete', 'complete', 'paused', 'start', 'end'];
      statuses.forEach( status => {
        // @ts-ignore
        const component = shallow(<ChainItemWrapper {...getProps(habitStatus[status])} />);
        const otherClasses = arrayWithout(wrapperClassNames, status);
        otherClasses.forEach( className => {
          expect(component.find('.habit-chain-wrapper').hasClass(className)).toBeFalsy();
        });
        triangleClasses.forEach( className => {
          expect(component.find(className).exists()).toBeFalsy();
        });
      });
    })
});