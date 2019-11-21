import cases from 'jest-in-case';
import { cleanMap } from './cleanMap';

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
