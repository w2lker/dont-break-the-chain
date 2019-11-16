import React from 'react';

import MaterialDesignIcon from '../../../basic/Material-Icon';

import { colors, colorsKeys } from '../../../../contants/colors';

export interface IChainItemStarProps {
  value: number;
  color: colorsKeys;
}

const ChainItemStar: React.FC<IChainItemStarProps> = (props) => {
  const { value } = props;
  if (!value || value < 4) {
    return null;
  }

  const color = colors[props.color || 'blue'][500];

  return (
    <MaterialDesignIcon
      name="star"
      style={{ color }}
    />
  );
};

export default ChainItemStar;
