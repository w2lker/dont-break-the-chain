import cases from 'jest-in-case';

import { cleanMap, isParamUndefined } from './helpers';

describe('Test style helpers', () => {
  describe('isParamUndefined', () => {
    cases('isParamUndefined cases', (opts) => {
      expect(isParamUndefined(opts.param)).toBe(opts.response);
    }, [
      { name: 'Null is true', param: null, response: true },
      { name: 'Undefined is true', param: undefined, response: true },
      { name: '"" is true', param: '', response: true },
      { name: 'unset is true', param: 'unset', response: true },
      { name: '0 is false', param: 0, response: false },
    ]);
  });
  describe('cleanMap', () => {
    const sampleDataToSave = {
      a: 1,
      a0: 0,
      ['undefined']: 23,
    };
    const sampleData = {
      ...sampleDataToSave,
      c: null,
      unset: 'unset',
    };
    cases('cleanMap cases', (opts) => {
      // @ts-ignore
      expect(cleanMap(opts.input)).toEqual(opts.output);
    }, [
      { name: 'Null to empty object', input: null, output: {} },
      { name: 'Unset to empty object', input: { some: 'unset' }, output: {} },
      { name: 'SampleData objects', input: sampleData, output: sampleDataToSave },
    ]);
  });
});
