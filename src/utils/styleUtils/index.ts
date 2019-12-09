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
import { rgb, rgba } from './colors/colors';
import { ellipsis } from './ellipsis/ellipsis';
import { setFlex } from './flex/flex';
import { setFont } from './font/font';
import { hideText, hideVisually, unhideVisually } from './hide/hide';
import { margin } from './margin/margin';
import { padding } from './padding/padding';
import { position, positionMirrored } from './position/position';
import { size, widthMinMax } from './size/size';

type cssAttribute = number | string;

// TODO: add flex-direction prop to setFlex

// TODO: produce 'modular scale'
// TODO: produce 'overflow-wrap'
// TODO: produce 'triangle' functions
// TODO: produce color 'shade' calculation
// TODO: produce color 'tint' calculation

// TODO: define what we are doing with prefixer and value-prefixer

// TODO: provide functions return so styled decorators would know that these are valid css props

export const bon = {
  borderColor,
  borderTopRadius,
  borderRightRadius,
  borderBottomRadius,
  borderLeftRadius,
  borderStyle,
  borderWidth,
  clearFix,
  ellipsis,
  margin,
  hideText,
  hideVisually,
  unhideVisually,
  setFlex,
  setFont,
  size,
  position,
  padding,
  positionMirrored,
  rgb,
  rgba,
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
