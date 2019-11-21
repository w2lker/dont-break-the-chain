import cases from 'jest-in-case';
import { boxEdges } from './boxEdges';

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
