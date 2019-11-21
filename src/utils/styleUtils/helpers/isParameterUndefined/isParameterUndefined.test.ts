import cases from 'jest-in-case';
import { isParamUndefined } from './isParameterUndefined';

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
