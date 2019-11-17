import { mount, render, shallow } from 'enzyme';
import React from 'react';

import ChainItem, { IChainItemProps } from './ChainItem';

import { habitStatus } from '../../../models/habit';

describe('Chain Component', () => {
  describe('Chain Component statuses snapshots', () => {
    const sampleProps: IChainItemProps = {
      // @ts-ignore
      status: 0,
      color: 'green',
      value: 6,
      onAdd: jest.fn(),
    };

    it('match snapshot statuses', () => {
      const statuses = Object.values(habitStatus);
      statuses.forEach(status => {
        const props = {
          ...sampleProps,
          // @ts-ignore
          status,
        };
        // @ts-ignore
        const component = mount(<ChainItem {...props} />);
        expect(component.debug()).toMatchSnapshot();
      });
    });
    // @ts-ignore
    const getClasses = (instance, componentName) => instance.find(componentName).props().classes;

    const mapOtherStatusesToClasses = {
      incomplete: 'incomplete',
      complete: 'wrapperComplete',
      paused: 'paused',
      start: 'wrapperStart',
      end: 'wrapperEnd',
    };
    const getStatusClassname = (status: string, classes) => {
      // @ts-ignore
      const mappedStatus = mapOtherStatusesToClasses[status];
      // @ts-ignore
      const statusToClass = classes[mappedStatus];
      return statusToClass || status;
    };

    function testSingleStatus(status: string) {
      const props: IChainItemProps = {
        ...sampleProps,
        // @ts-ignore
        status: habitStatus[status],
      };

      const component = mount(<ChainItem {...props}/>);
      const wrapperItemClasses = getClasses(component, 'ChainItemWrapper');
      expect(component.find(`.${wrapperItemClasses.wrapper}`).hasClass(getStatusClassname(status, wrapperItemClasses))).toBeTruthy();
      expect(component.find(`.${wrapperItemClasses.triangleLeft}`).exists()).toBeFalsy();
      const scoreItemClasses = getClasses(component, 'ChainItemScore');
      expect(component.find(`.${scoreItemClasses.root}`).hasClass('hidden')).toBeFalsy();
      expect(component.find('.mdi-star').exists()).toBeTruthy();
      expect(component.find('.mdi-plus-circle').exists()).toBeFalsy();
    }

    it('renders incomplete habit correctly', () => {
      const incompleteProps: IChainItemProps = {
        ...sampleProps,
          // @ts-ignore
        status: habitStatus.incomplete,
        value: 0,
      };
      const component = mount(<ChainItem {...incompleteProps}/>);
      const wrapperItemClasses = getClasses(component, 'ChainItemWrapper');
      expect(component.find(`.${wrapperItemClasses.wrapper}`).hasClass('incomplete')).toBeTruthy();
      expect(component.find(`.${wrapperItemClasses.triangleLeft}`).exists()).toBeFalsy();
      const scoreItemClasses = getClasses(component, 'ChainItemScore');
      expect(component.find(`.${scoreItemClasses.root}`).hasClass('hidden')).toBeTruthy();
      expect(component.find('.mdi-star').exists()).toBeFalsy();
      expect(component.find('.mdi-plus-circle').exists()).toBeFalsy();
    });
    it('renders complete habit correctly', () => testSingleStatus('complete'));
    it('renders paused habit correctly', () => testSingleStatus('paused'));
    it('renders started habit correctly', () => testSingleStatus('start'));
    it('renders ended habit correctly', () => testSingleStatus('end'));
    it('renders incomplete today habit correctly', () => {
      const props: IChainItemProps = {
        ...sampleProps,
        // @ts-ignore
        status: habitStatus.incompleteToday,
        value: 0,
      };
      const component = mount(<ChainItem {...props}/>);
      const wrapperItemClasses = getClasses(component, 'ChainItemWrapper');
      expect(component.find(`.${wrapperItemClasses.wrapper}`).hasClass(wrapperItemClasses.wrapperIncompleteToday)).toBeTruthy();
      expect(component.find(`.${wrapperItemClasses.triangleLeft}`).exists()).toBeTruthy();
      const scoreItemClasses = getClasses(component, 'ChainItemScore');
      expect(component.find(`.${scoreItemClasses.root}`).hasClass('hidden')).toBeTruthy();
      expect(component.find('.mdi-star').exists()).toBeFalsy();
      expect(component.find('.mdi-plus-circle').exists()).toBeTruthy();
    });
  });
});
