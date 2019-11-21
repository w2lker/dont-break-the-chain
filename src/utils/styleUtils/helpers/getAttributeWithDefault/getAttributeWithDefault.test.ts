import cases from 'jest-in-case';
import { getAttributeWithDefault } from './getAttributeWithDefault';

const casesTitle = 'getAttributeWithDefault cases';
const casesTester = (opts: typeof casesData[1]) => {
  expect(getAttributeWithDefault(opts.custom, opts.default)).toEqual(opts.output);
};

const casesData = [
  {
    name: 'null attributes',
    custom: null,
    default: null,
    output: null,
  },
  {
    name: 'null custom attribute',
    custom: null,
    default: 'some-attribute',
    output: 'some-attribute',
  },
  {
    name: 'null default with defined custom',
    custom: 'val',
    default: undefined,
    output: 'val',
  },
  {
    name: '"unset" custom attribute',
    custom: 'unset',
    default: 14,
    output: 14,
  },
  {
    name: 'normal flow',
    custom: 'block',
    default: 'inline-block',
    output: 'block',
  },
];

cases(casesTitle, casesTester, casesData);
