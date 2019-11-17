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

    function testSingleStatus(status: string) {
      const props: IChainItemProps = {
        ...sampleProps,
        // @ts-ignore
        status: habitStatus[status],
      };
      const component = mount(<ChainItem {...props}/>);
      const a = 3;
      expect(component.find('.habit-chain-wrapper').hasClass(status)).toBeTruthy();
      expect(component.find('.triangleLeft').exists()).toBeFalsy();
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
      expect(component.find('.habit-chain-wrapper').hasClass('incomplete')).toBeTruthy();
      expect(component.find('.triangleLeft').exists()).toBeFalsy();
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
      expect(component.find('.habit-chain-wrapper').hasClass('incomplete-today')).toBeTruthy();
      expect(component.find('.triangleLeft').exists()).toBeTruthy();
      const scoreItemClasses = getClasses(component, 'ChainItemScore');
      expect(component.find(`.${scoreItemClasses.root}`).hasClass('hidden')).toBeTruthy();
      expect(component.find('.mdi-star').exists()).toBeFalsy();
      expect(component.find('.mdi-plus-circle').exists()).toBeTruthy();
    });
  });
});
