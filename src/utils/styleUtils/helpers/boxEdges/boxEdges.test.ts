import cases from 'jest-in-case';
import { boxEdges } from './boxEdges';

const casesTitle = 'boxEdges cases';

const casesTester = (opts: typeof casesData[1]) => {
  try {
    // If function doesn't expect to throw error - check output
    if (opts.valid) {
      expect(boxEdges(opts.input)).toEqual(opts.output);
    }
  } catch (e) {
    // If function expect to throw error - expect boxEdges to say Param error
    expect(opts.valid).toBeFalsy();
    expect(e.message).toContain('Param error');
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
