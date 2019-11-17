import { setFlex } from './flex/flex';
import { setFont } from './font/font';
import { cleanMap } from './helpers/helpers';
import { size, widthMinMax } from './size/size';

type cssAttribute = number | string;

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
  size,
  widthMinMax,
  setFlex,
  setFont,
  position: stylePosition,
};
