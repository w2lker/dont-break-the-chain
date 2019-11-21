import {
  borderBottomRadius,
  borderColor,
  borderLeftRadius,
  borderRightRadius,
  borderStyle,
  borderTopRadius,
  borderWidth,
} from './borders/borders';
import { clearFix } from './clearfix/clearfix';
import { ellipsis } from './ellipsis/ellipsis';
import { setFlex } from './flex/flex';
import { setFont } from './font/font';
import { position, positionMirrored } from './position/position';
import { size, widthMinMax } from './size/size';

type cssAttribute = number | string;

export const styleUtils = {
  borderColor,
  borderTopRadius,
  borderRightRadius,
  borderBottomRadius,
  borderLeftRadius,
  borderStyle,
  borderWidth,
  clearFix,
  setFlex,
  setFont,
  size,
  position,
  positionMirrored,
  widthMinMax,
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
