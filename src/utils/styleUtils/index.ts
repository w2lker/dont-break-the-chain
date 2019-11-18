import { setFlex } from './flex/flex';
import { setFont } from './font/font';
import { position } from './position/position';
import { size, widthMinMax } from './size/size';

type cssAttribute = number | string;

export const styleUtils = {
  size,
  widthMinMax,
  setFlex,
  setFont,
  position,
};
