import { string } from 'prop-types';
import { cleanMap } from './otherUtils';

export function styleMinMaxWidth(width: number | string) {
  if (width === null || width === undefined) {
    return null;
  }
  return cleanMap({
    width,
    minWidth: width,
    maxWidth: width,
  });
}

export function styleSetFlexContainer(justifyContent: string, alignItems: string) {
  return cleanMap({
    alignItems,
    justifyContent,
    display: 'flex',
  });
}

export function styleSetFont(fontSize: number | string, color: string, fontWeight: number | string, letterSpacing: number | string) {
  return cleanMap({
    fontSize,
    color,
    fontWeight: fontWeight || 400,
    letterSpacing: letterSpacing || 'inherit',
  });
}

export const styleUtils = {
  minMaxWidth: styleMinMaxWidth,
  setFlexContainer: styleSetFlexContainer,
  setFont: styleSetFont,
};
