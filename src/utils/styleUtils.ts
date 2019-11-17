import { cleanMap } from './otherUtils';

type cssAttribute = number | string;

function styleMinMaxWidth(width: cssAttribute) {
  if (width === null || width === undefined) {
    return null;
  }
  return cleanMap({
    width,
    minWidth: width,
    maxWidth: width,
  });
}

function styleSetFlexContainer(justifyContent: string, alignItems: string) {
  return cleanMap({
    alignItems,
    justifyContent,
    display: 'flex',
  });
}

function styleSetFont(fontSize: cssAttribute, color: string, fontWeight: cssAttribute, letterSpacing: cssAttribute) {
  return cleanMap({
    fontSize,
    color,
    fontWeight: fontWeight || 400,
    letterSpacing: letterSpacing || 'inherit',
  });
}

type PositionName = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | 'inherit' | 'initial' | 'unset';

interface IPositionConfig {
  top?: cssAttribute;
  right?: cssAttribute;
  bottom?: cssAttribute;
  left?: cssAttribute;
}

function stylePosition(position: PositionName, config: IPositionConfig) {
  if (!position || Object.entries(config).length === 0) {
    return null;
  }

  return cleanMap({
    position,
    ...config,
  });
}

export const styleUtils = {
  minMaxWidth: styleMinMaxWidth,
  setFlexContainer: styleSetFlexContainer,
  setFont: styleSetFont,
  position: stylePosition,
};
