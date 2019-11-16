import classNames from 'classnames';
import React from 'react';

import { colors, colorsKeys } from '../../../../contants/colors';
import { habitStatus, habitStatusesType } from '../../../../models/habit';

export interface IChainItemScoreProps {
  status: habitStatusesType;
  color: colorsKeys;
  value: number;
}

const ChainItemScore: React.FC<IChainItemScoreProps> = (props) => {
  const { status, value } = props;

  const scoreClass = classNames({
    'score-wrapper': true,
    hidden: (status === habitStatus.incomplete) || (status === habitStatus.incompleteToday) || (!value),
    bright: value > 4,
  });

  const colorBase = colors[props.color || 'blue'];
  const color = colorBase[value > 4 ? 500 : 400];

  const outputValue = value ? `+${value}` : null;

  return (
    <span
      className={scoreClass}
      style={{ color }}
    >
      {outputValue}
    </span>
  );
};

export default ChainItemScore;
