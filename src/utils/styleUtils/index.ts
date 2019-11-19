import {
  borderBottomRadius,
  borderColor,
  borderLeftRadius,
  borderRightRadius,
  borderStyle,
  borderTopRadius, borderWidth,
} from './borders/borders';
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
  border: {
    color: borderColor,
    radius: {
      top: borderTopRadius,
      right: borderRightRadius,
      bottom: borderBottomRadius,
      left: borderLeftRadius,
    },
    style: borderStyle,
    width: borderWidth,
  },
};
