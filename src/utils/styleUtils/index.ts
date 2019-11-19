import { borderBottomRadius, borderColor, borderLeftRadius, borderRightRadius, borderTopRadius } from './borders/borders';
import { setFlex } from './flex/flex';
import { setFont } from './font/font';
import { position, positionMirrored } from './position/position';
import { size, widthMinMax } from './size/size';

type cssAttribute = number | string;

export const styleUtils = {
  size,
  widthMinMax,
  setFlex,
  setFont,
  position,
  positionMirrored,
  borderColor,
  borderRadius: {
    top: borderTopRadius,
    right: borderRightRadius,
    bottom: borderBottomRadius,
    left: borderLeftRadius,
  },
};
