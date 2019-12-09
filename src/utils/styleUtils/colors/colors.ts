import { bonWarning } from '../helpers/warning/warning';

export interface IRgbColor {
  red: number;
  green: number;
  blue: number;
}

const black: IRgbColor = {
  red: 0,
  green: 0,
  blue: 0,
};

function regularHexToRgb(hex: string): IRgbColor {
  const [red, green, blue] = [0, 2, 4]
    .map(offset => hex.substring(offset, offset + 2))
    .map(hexCh => parseInt(hexCh, 16));
  return { red, green, blue };
}

export function hexToRgbMapped(hex?: string): IRgbColor {
  const warnType = 'HEX to RGB converter';
  if (!hex) {
    return black;
  }
  if (hex.length === 1) {
    return regularHexToRgb(hex.repeat(6));
  }

  if (hex.length === 2) {
    return regularHexToRgb(hex.repeat(3));
  }

  if (hex.length === 3) {
    const [r, g, b] = hex.split('') as string[];
    return regularHexToRgb(`${r}${r}${g}${g}${b}${b}`);
  }

  if (hex.length === 4 || hex.length === 5) {
    const hex3 = hex.slice(0, 3);
    // tslint:disable-next-line:no-console
    bonWarning(`can't verify converting from HEX to RGB — received HEX value with ${hex.length} digits. It is parsed as ${hex3} value`, warnType);
    return hexToRgbMapped(hex3);
  }

  if (hex.length > 6) {
    const hex6 = hex.slice(0, 6);
    // tslint:disable-next-line:no-console
    bonWarning(`can't verify converting from HEX to RGB — received HEX value with ${hex.length} digits. It is parsed as ${hex6} value`, warnType);
    return regularHexToRgb(hex6);
  }

  return regularHexToRgb(hex);
}

export function rgb(hex?: string): string {
  const colors = hexToRgbMapped(hex);
  return `rgb(${colors.red},${colors.green},${colors.blue})`;
}

export function rgba(hex?: string, opacity?: number): string {
  const warnType = 'RGBA';
  if (opacity === undefined) {
    return rgb(hex);
  }
  if (opacity > 1 || opacity < 0) {
    bonWarning(`Opacity measures from 0 to 1. You provided opacity ${opacity}, it will be rendered as opacity 1`, warnType);
    return rgb(hex);
  }

  const colors = hexToRgbMapped(hex);
  return `rgba(${colors.red},${colors.green},${colors.blue},${opacity})`;
}
