import * as WarningModule from '../helpers/warning/warning';
import { hexToRgbMapped, IRgbColor } from './colors';

function setup() {
  return {
    rgbMapped: {
      black: {
        red: 0,
        green: 0,
        blue: 0,
      },
      white: {
        red: 255,
        green: 255,
        blue: 255,
      },
      lightGrey: {
        red: 250,
        green: 250,
        blue: 250,
      },
      nebula: {
        red: 204,
        green: 170,
        blue: 187,
      },
      indigo: {
        red: 31,
        green: 52,
        blue: 180,
      },
    },
  };
}

describe('hexToRgb function', () => {

  let spy: jest.SpyInstance;
  let mockFunc: jest.MockedFunction<any>;

  beforeEach(() => {
    spy = jest.spyOn(WarningModule, 'bonWarning').mockImplementation(() => null);
    mockFunc = WarningModule.bonWarning;
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('outputs black if color was not provided', () => {
    const { black } = setup().rgbMapped;
    expect(hexToRgbMapped()).toEqual(black);
  });

  it('works with single char: F -> FF FF FF', () => {
    const { white } = setup().rgbMapped;
    expect(hexToRgbMapped('F')).toEqual(white);
  });
  it('works with double char: FA -> FA FA FA', () => {
    const { lightGrey }  = setup().rgbMapped;
    expect(hexToRgbMapped('FA')).toEqual(lightGrey);
  });

  it('works with tripple char: CAB -> CC AA BB', () => {
    const { nebula } = setup().rgbMapped;
    expect(hexToRgbMapped('CAB')).toEqual(nebula);
  });

  it('ignores 4-th and 5-th char of HEX: CABAA -> CC AA BB', () => {
    const { nebula } = setup().rgbMapped;
    expect(hexToRgbMapped('CABA')).toEqual(nebula);
    expect(hexToRgbMapped('CAB4D')).toEqual(nebula);
  });
  it('push warn message for 4 digit HEX provided', () => {
    hexToRgbMapped('CABA');
    expect(mockFunc).toBeCalledTimes(1);
    const call = mockFunc.mock.calls[0];
    expect(call[0]).toMatch("can't verify converting");
    expect(call[1]).toMatch('HEX to RGB');
  });

  it('push warn message for 5 digit HEX provided', () => {
    hexToRgbMapped('CAB4D');
    expect(mockFunc).toBeCalledTimes(1);
    const call = mockFunc.mock.calls[0];
    expect(call[0]).toMatch("can't verify converting");
    expect(call[1]).toMatch('HEX to RGB');
  });

  it('works with 6 digit hex: 1F34B4 -> 1F 34 B4', () => {
    const { indigo } = setup().rgbMapped;
    expect(hexToRgbMapped('1F34B4')).toEqual(indigo);
  });

  it('skips digits over 6 and outputs', () => {
    const { indigo } = setup().rgbMapped;
    expect(hexToRgbMapped('1F34B45AA4BC1')).toEqual(indigo);
  });

  it('push warn message for over 6 digit hex-es', () => {
    hexToRgbMapped('1F34B45AA4BC1');
    expect(mockFunc).toBeCalledTimes(1);
    const call = mockFunc.mock.calls[0];
    expect(call[0]).toMatch("can't verify converting");
    expect(call[1]).toMatch('HEX to RGB');
  });
});
