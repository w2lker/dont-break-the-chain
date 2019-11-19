import cases from 'jest-in-case';
import { BoundAttributeArray } from '../models';

import { boxEdges, cleanMap, generateBoundedEdges, isParamUndefined } from './helpers';

describe('isParamUndefined', () => {
  const casesTitle = 'isParamUndefined cases';
  const casesTester = (opts: typeof casesData[1]) => {
    expect(isParamUndefined(opts.param)).toBe(opts.response);
  };
  const casesData = [
    {
      name: 'Null is true',
      param: null,
      response: true,
    },
    {
      name: 'Undefined is true',
      param: undefined,
      response: true,
    },
    {
      name: '"" is true',
      param: '',
      response: true,
    },
    {
      name: 'unset is true',
      param: 'unset',
      response: true,
    },
    {
      name: '"null" is true',
      param: 'null',
      response: true,
    },
    {
      name: '0 is false',
      param: 0,
      response: false,
    },
  ];
  cases(casesTitle, casesTester, casesData);
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
    nulled: 'null',
  };

  const casesTitle = 'cleanMap cases';
  const casesTester = (opts: typeof casesData[1]) => {
    // @ts-ignore
    expect(cleanMap(opts.input)).toEqual(opts.output);
  };
  const casesData = [
    {
      name: 'Null to empty object',
      input: null,
      output: {},
    },
    {
      name: 'Unset to empty object',
      input: { some: 'unset' },
      output: {},
    },
    {
      name: 'String "null" to empty object',
      input: { some: 'null' },
      output: {},
    },
    {
      name: 'SampleData objects',
      input: sampleData,
      output: sampleDataToSave,
    },
  ];
  cases(casesTitle, casesTester, casesData);
});

describe('boxEdges', () => {
  beforeEach(() => {
    // tslint:disable-next-line:no-empty
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    // tslint:disable-next-line:no-console
    console.error.mockRestore();
  });

  const casesTitle = 'boxEdges cases';
  const casesTester = (opts: typeof casesData[1]) => {
    expect(boxEdges(opts.input)).toEqual(opts.output);
    // tslint:disable-next-line:no-console
    expect(console.error).toHaveBeenCalledTimes(opts.mocks);
  };

  const casesData = [
    {
      name: 'For null should be null',
      input: null,
      output: null,
      mocks: 0,
    },
    {
      name: 'For 1 param',
      input: '14px',
      output: ['14px', '14px', '14px', '14px'],
      mocks: 0,
    },
    {
      name: 'For 2 params',
      input: '14px 45px',
      output: ['14px', '45px', '14px', '45px'],
      mocks: 0,
    },
    {
      name: 'For 3 params',
      input: '14px 45px 2em',
      output: ['14px', '45px', '2em', '14px'],
      mocks: 0,
    },
    {
      name: 'For 4 params',
      input: '14px 45px 2em 5vw',
      output: ['14px', '45px', '2em', '5vw'],
      mocks: 0,
    },
    {
      name: 'For 5 params',
      input: '14px 45px 2em 5vw 54px',
      output: null,
      mocks: 1,
    },
  ];
  cases(casesTitle, casesTester, casesData);
});

describe('generateBoundedEdges', () => {
  const keys: BoundAttributeArray = ['attr1', 'attr2', 'attr3', 'attr4'];
  const config = ['value1', 'value2', 'null', 'value4'];
  const response = {
    attr1: config[0],
    attr2: config[1],
    attr4: config[3],
  };
  beforeAll(() => {
    // tslint:disable-next-line:no-empty
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    // @ts-ignore
    // tslint:disable-next-line:no-console
    console.error.mockRestore();
  });

  it('works with correct attributes', () => {
    expect(generateBoundedEdges(keys, config.join(' '))).toEqual(response);
  });
  it('works without attributes', () => {
      // @ts-ignore
    expect(generateBoundedEdges()).toEqual({});
  });
  it('works with incorrect attributes', () => {
    const newKeys = keys.slice(0, 3);
    const newConfig = config.concat(config).join(' ');
    const newResponse = { ...response };
    // @ts-ignore
    delete newResponse.attr4;
    expect(generateBoundedEdges(keys, newConfig)).toEqual({});
    // tslint:disable-next-line:no-console
    expect(console.error).toHaveBeenCalledTimes(1);
    // @ts-ignore
    expect(generateBoundedEdges(newKeys, config.join(' '))).toEqual(newResponse);
  });
});
