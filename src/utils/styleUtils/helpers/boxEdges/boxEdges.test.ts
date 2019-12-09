import cases from 'jest-in-case';
import * as Warnings from '../warning/warning';
import { boxEdges } from './boxEdges';

let spy: jest.SpyInstance;
let mockFunc: jest.MockedFunction<any>;

beforeEach(() => {
  spy = jest.spyOn(Warnings, 'bonWarning').mockImplementation(() => null);
  mockFunc = Warnings.bonWarning;
});

afterEach(() => {
  spy.mockRestore();
});

const casesTitle = 'boxEdges cases';

const casesTester = (opts: typeof casesData[1]) => {
  expect(boxEdges(opts.input)).toEqual(opts.output);
  if (!opts.valid) {
    expect(mockFunc).toBeCalledTimes(1);
    const call = mockFunc.mock.calls[0];
    expect(call[0].length).toBeGreaterThan(0);
    expect(call[1]).toMatch('Box Edges Params');
  } else {
    expect(mockFunc).not.toBeCalled();
  }
};

const casesData = [
  {
    name: 'For null should be null',
    input: null,
    output: null,
    valid: true,
  },
  {
    name: 'For 1 param',
    input: '14px',
    output: ['14px', '14px', '14px', '14px'],
    valid: true,
  },
  {
    name: 'For 2 params',
    input: '14px 45px',
    output: ['14px', '45px', '14px', '45px'],
    valid: true,
  },
  {
    name: 'For 3 params',
    input: '14px 45px 2em',
    output: ['14px', '45px', '2em', '45px'],
    valid: true,
  },
  {
    name: 'For 4 params',
    input: '14px 45px 2em 5vw',
    output: ['14px', '45px', '2em', '5vw'],
    valid: true,
  },
  {
    name: 'For 5 params',
    input: '14px 45px 2em 5vw 54px',
    output: null,
    valid: false,
  },
];

cases(casesTitle, casesTester, casesData);
